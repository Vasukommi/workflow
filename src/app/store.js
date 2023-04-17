import { create } from "zustand";

const useStore = create((set) => ({
    IsPrintavoConnected: false,
    nodes: [],
    edges: [],
    updatePrintavoConnection: (isConnected) => set((state) => ({ IsPrintavoConnected: isConnected })),
    addNode: (nodeObject) => set((state) => {
        const nodeIndex = state.nodes.findIndex((node) => node.id === nodeObject.id);
        if (nodeIndex !== -1) {
            const updateNodes = [...state.nodes];
            updateNodes[nodeIndex] = nodeObject;
            return { nodes: updateNodes };
        } else {
            const newNodes = [...state.nodes, nodeObject];
            return { nodes: newNodes }
        }
    }),
    addEdge: (edgesArray) => set((state) => ({ edges: edgesArray }))
}));


export default useStore