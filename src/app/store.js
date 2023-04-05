import { create } from "zustand";

const useStore = create((set) => ({
    Nodes: [
        {
            id: '1',
            type: 'input',
            data: { label: 'Input Node' },
            position: { x: 250, y: 25 },
        },
    ],
    edges: [
        { id: 'e2-3', source: '2', target: '3', animated: true },
    ]
}));


export default useStore