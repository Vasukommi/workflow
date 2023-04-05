import React, { useState, useCallback, useRef } from 'react';
import ReactFlow, {
    Background,
    Controls,
    MiniMap,
    useNodesState,
    useEdgesState,
    addEdge,
    ReactFlowProvider
} from 'reactflow';
import 'reactflow/dist/style.css';
import useStore from '../../app/store.js';

let id = 0;
const getId = () => `dndnode_${id++}`;

function Flow() {
    const reactFlowWrapper = useRef(null);
    const [variant, setVariant] = useState('cross');
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);

    const onConnect = useCallback((params) => {
        const newEdges = addEdge(params, edges);
        setEdges(newEdges);
    }, [edges]);

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    const onDrop = useCallback(
        (event) => {
            event.preventDefault();
            const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
            const type = event.dataTransfer.getData('application/reactflow');
            if (typeof type === 'undefined' || !type) {
                return;
            }

            const position = reactFlowInstance.project({
                x: event.clientX - reactFlowBounds.left,
                y: event.clientY - reactFlowBounds.top,
            });
            let newNode = {
                id: getId(),
                type: 'input',
                data: { label: `${type}` },
                position,
                type: 'Filter',
                style: { color: 'black', minHeight: '30px' },
            }
            setNodes((nds) => nds.concat(newNode));
        },
        [reactFlowInstance]
    );

    return (
        <ReactFlowProvider>
            <ReactFlow
                defaultNodes={nodes}
                defaultEdges={edges}
                onDrop={onDrop}
                onDragOver={onDragOver}
                onConnect={onConnect}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                fitView>
                <MiniMap nodeStrokeWidth={3} zoomable pannable />
                <Controls />
                <Background color="#ccc" variant={variant} />
            </ReactFlow>
        </ReactFlowProvider>
    );
}

export default Flow;