import { useCallback } from "react";
import ReactFlow, {
  Background,
  Controls,
  MarkerType,
  applyEdgeChanges,
  applyNodeChanges,
  useReactFlow,
} from "reactflow";

import Box from "@mui/material/Box";

import CustomNode from "./CustomNode";
import CustomEdge from "./CustomEdge";

import { useDispatch, useSelector } from "react-redux";
import {
  addNode,
  addEdge as addEdgeAction,
  edgeChanges,
  nodeChanges,
} from "../store/flowSlice";

const nodeTypes = { customNode: CustomNode };
const edgeTypes = { customEdge: CustomEdge };

export default function Flow() {
  const { nodes, edges } = useSelector((state) => state.flow);
  const dispatch = useDispatch();
  const reactFlowInstance = useReactFlow();

  const onNodesChange = useCallback(
    (changes) => {
      const newNodes = applyNodeChanges(changes, nodes);
      dispatch(nodeChanges(newNodes));
    },
    [nodes, dispatch]
  );

  const onEdgeChange = useCallback(
    (changes) => {
      const newEdges = applyEdgeChanges(changes, edges);
      dispatch(edgeChanges(newEdges));
    },
    [edges, dispatch]
  );

  // Adding new edge. A check is added to ensure that there is only one edge from
  // a source
  const onConnect = useCallback(
    (params) => {
      const index = edges.findIndex((edge) => edge.source === params.source);
      if (index !== -1) {
        return;
      }

      const newEdge = {
        ...params,
        type: "customEdge",
        markerEnd: {
          type: MarkerType.ArrowClosed,
        },
        id: `${params.source}-${params.target}`,
      };
      dispatch(addEdgeAction(newEdge));
    },
    [edges, dispatch]
  );

  function handleDrop(e) {
    e.preventDefault();
    const position = reactFlowInstance.screenToFlowPosition({
      x: e.clientX,
      y: e.clientY,
    });

    const id = `${nodes.length + 1}`;
    const newNode = {
      id,
      data: {
        value: "",
      },
      position,
      type: "customNode",
    };
    dispatch(addNode(newNode));
  }

  return (
    <Box
      sx={{ width: "100%", height: "100%" }}
      onDrop={handleDrop}
      onDragOver={(e) => {
        e.preventDefault();
      }}
    >
      <ReactFlow
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgeChange}
        onConnect={onConnect}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </Box>
  );
}
