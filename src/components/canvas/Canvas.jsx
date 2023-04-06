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
import CustomerImport from '../customs/import/CustomImport';
import 'reactflow/dist/style.css';
import "./Canvas.css";

let id = 0;
const getId = () => `dndnode_${id++}`;
const nodeTypes = {
    import: CustomerImport,
}

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
            debugger
            const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
            const type = event.dataTransfer.getData('application/reactflow');
            if (typeof type === 'undefined' || !type) {
                return;
            }

            const position = reactFlowInstance.project({
                x: event.clientX - reactFlowBounds.left,
                y: event.clientY - reactFlowBounds.top,
            });
            if (type.includes('import')) {
                let newNode = {
                    id: getId(),
                    type: 'import',
                    data: { label: `${type}` },
                    position,
                }
                setNodes((nds) => nds.concat(newNode));
            }
        },
        [reactFlowInstance]
    );

    return (
        <div className='reactflow-wrapper-section'>
            <ReactFlowProvider>
                <div ref={reactFlowWrapper} className='reactflow-wrapper-section'>
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onDrop={onDrop}
                        onDragOver={onDragOver}
                        onConnect={onConnect}
                        onInit={setReactFlowInstance}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        snapGrid={[15, 15]}
                        nodeTypes={nodeTypes}
                        fitView>
                        <MiniMap nodeStrokeWidth={3} zoomable pannable />
                        <Controls />
                        <Background color="#ccc" variant={variant} />
                    </ReactFlow>
                </div>
            </ReactFlowProvider>
        </div>
    );
}

export default Flow;