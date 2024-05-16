import { createSlice } from "@reduxjs/toolkit";

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
    },
  ],

  selectedNode: null,
};

const flowSlice = createSlice({
  name: "flow",
  initialState: initialState,
  reducers: {
    addNode: (state, action) => {},
    addEdge: (state, action) => {},
    selectNode: (state, action) => {},
    unselectNode: (state, action) => {},
  },
});

export const { addNode, addEdge, selectNode, unselectNode } = flowSlice.actions;
export default flowSlice.reducer;
