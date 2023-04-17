import React, { useState, useCallback, useRef, Panel } from 'react';
import ReactFlow, {
    Background,
    Controls,
    MiniMap,
    useNodesState,
    useEdgesState,
    addEdge,
    ReactFlowProvider
} from 'reactflow';
import CustomImport from '../customs/import/CustomImport.jsx';
import CustomPrintavo from '../customs/printavo/Printavo.jsx';
import CustomPrintavoOrdersInput from '../customs/printavo/input/Orders.jsx';
import CustomPrintavoOrdersOutput from '../customs/printavo/output/Orders.jsx';
import 'reactflow/dist/style.css';
import "./Canvas.css";
import useStore from "../../app/store.js";

let id = 0;
const getId = (type) => `dndnode_${type}_${id++}`;
const nodeTypes = {
    Printavo: CustomPrintavo,
    import: CustomImport,
    InputOrders: CustomPrintavoOrdersInput,
    OutputOrders: CustomPrintavoOrdersOutput
}

function Flow({ triggerPopup, activateTriggers }) {
    const isConnected = useStore((state) => state.isConnected);
    const addEdges = useStore((state) => state.addEdge);
    const reactFlowWrapper = useRef(null);
    const [variant, setVariant] = useState('cross');
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);

    const onConnect = useCallback((params) => {
        const newEdges = addEdge(params, edges);
        setEdges(newEdges);
        addEdges(newEdges)
    }, [edges]);

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    const onNodeDoubleClick = (event, node) => {
        triggerPopup(node)
    }

    const onNodeClick = () => {
        activateTriggers()
    }

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
            if (type.includes('Printavo')) {
                let newNode = {
                    id: getId(type),
                    type: 'Printavo',
                    data: { label: `${type}` },
                    position,
                }
                setNodes((nds) => nds.concat(newNode));
            } else if (type.includes('import')) {
                let newNode = {
                    id: getId(type),
                    type: 'import',
                    data: { label: `${type}` },
                    position,
                }
                setNodes((nds) => nds.concat(newNode));
            } else if (type.includes('InputOrders')) {
                let newNode = {
                    id: getId(type),
                    type: 'InputOrders',
                    data: { label: `${type}` },
                    position,
                }
                setNodes((nds) => nds.concat(newNode));
            } else if (type.includes('OutputOrders')) {
                let newNode = {
                    id: getId(type),
                    type: 'OutputOrders',
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
                        onNodeDoubleClick={onNodeDoubleClick}
                        onNodeClick={onNodeClick}
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