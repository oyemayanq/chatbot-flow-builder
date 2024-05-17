import { useState, useCallback } from "react";
import ReactFlow, {
  Background,
  Controls,
  MarkerType,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow";
import "reactflow/dist/style.css";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import TopBar from "./components/TopBar";
import SettingsPanel from "./components/SettingsPanel";
import NodesPanel from "./components/NodesPanel";
import CustomNode from "./components/CustomNode";
import CustomEdge from "./components/CustomEdge";
import MessageItem from "./components/MessageItem";
import { useDispatch, useSelector } from "react-redux";
import {
  addNode,
  addEdge as addEdgeAction,
  edgeChanges,
  nodeChanges,
  unselectNode,
} from "./store/flowSlice";

const nodeTypes = { customNode: CustomNode };
const edgeTypes = { customEdge: CustomEdge };

export default function App() {
  const { nodes, edges, selectedNode } = useSelector((state) => state.flow);
  const dispatch = useDispatch();

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

  return (
    <Box sx={{ padding: "0" }}>
      <TopBar onSaveChanges={() => {}} />
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{ width: "75vw" }}
          onDrop={(e) => {
            //console.log("event", e);
            const rect = e.target.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const id = `${nodes.length + 1}`;
            const newNode = {
              id,
              data: {
                value: "",
              },
              position: { x, y },
              type: "customNode",
            };
            dispatch(addNode(newNode));
            const messageType = e.dataTransfer.getData("messageType");
            console.log("messageType", messageType);
            console.log("drop");
          }}
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
        <Box sx={{ width: "25vw" }}>
          {selectedNode !== null ? (
            <SettingsPanel
              selectedNode={selectedNode}
              backClickHandler={() => dispatch(unselectNode())}
            />
          ) : (
            <NodesPanel />
          )}
        </Box>
      </Box>
    </Box>
  );
}
