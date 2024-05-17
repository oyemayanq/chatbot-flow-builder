import { createSlice } from "@reduxjs/toolkit";
import { MarkerType } from "reactflow";

const initialState = {
  nodes: [
    {
      id: "1",
      data: { value: "Text" },
      position: { x: 0, y: 0 },
      type: "customNode",
    },
    {
      id: "2",
      data: { value: "Flow" },
      position: { x: 100, y: 100 },
      type: "customNode",
    },
    {
      id: "3",
      data: { value: "React" },
      position: { x: 200, y: 200 },
      type: "customNode",
    },
  ],

  edges: [
    {
      id: "1-2",
      source: "1",
      target: "2",
      type: "customEdge",
      markerEnd: {
        type: MarkerType.ArrowClosed,
      },
    },
  ],

  selectedNode: null,
};

const flowSlice = createSlice({
  name: "flow",
  initialState: initialState,
  reducers: {
    addNode: (state, action) => {
      state.nodes = [...state.nodes, action.payload];
    },
    editNodeMessage: (state, action) => {
      const nodeId = action.payload.id;
      const nodeIndex = state.nodes.findIndex((node) => node.id === nodeId);
      if (nodeIndex !== -1) {
        state.nodes[nodeIndex].data.value = action.payload.value;
        state.selectedNode = null;
      }
    },

    removeNode: (state, action) => {
      state.nodes = state.nodes.filter((node) => node.id !== action.payload);
    },

    addEdge: (state, action) => {
      state.edges = [...state.edges, action.payload];
    },
    removeEdge: (state, action) => {
      state.edges = state.edges.filter((edge) => edge.id !== action.payload);
    },

    nodeChanges: (state, action) => {
      state.nodes = action.payload;
    },
    edgeChanges: (state, action) => {
      state.edges = action.payload;
    },

    selectNode: (state, action) => {
      const selectedNodeId = action.payload;
      const node = state.nodes?.find((node) => node.id === selectedNodeId);
      if (node) {
        state.selectedNode = node;
      } else {
        state.selectedNode = null;
      }
    },

    unselectNode: (state) => {
      state.selectedNode = null;
    },
  },
});

export const {
  addNode,
  removeNode,
  editNodeMessage,
  addEdge,
  removeEdge,
  nodeChanges,
  edgeChanges,
  selectNode,
  unselectNode,
} = flowSlice.actions;
export default flowSlice.reducer;
