import { useState, useCallback } from "react";
import ReactFlow, {
  Background,
  Controls,
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

const initialNodes = [
  {
    id: "1",
    data: { label: MessageItem, value: "Text" },
    position: { x: 0, y: 0 },
    type: "customNode",
  },
  {
    id: "2",
    data: { label: "Flow" },
    position: { x: 100, y: 100 },
  },
  {
    id: "3",
    data: { label: "Flow" },
    position: { x: 200, y: 200 },
  },
];

const initialEdges = [
  {
    id: "1-2",
    source: "1",
    target: "2",
    type: "customEdge",
  },
];

const nodeTypes = { customNode: CustomNode };
const edgeTypes = { customEdge: CustomEdge };

export default function App() {
  const [messages, setMessages] = useState([]);
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback((changes) => {
    setNodes((nds) => applyNodeChanges(changes, nds));
  }, []);

  const onEdgeChange = useCallback((changes) => {
    setEdges((eds) => applyEdgeChanges(changes, eds));
  }, []);

  const onConnect = useCallback((params) => {
    const edge = { ...params, type: "customEdge" };
    setEdges((eds) => addEdge(edge, eds));
  }, []);

  return (
    <Box sx={{ padding: "0" }}>
      <TopBar onSaveChanges={() => {}} />
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{ width: "75vw" }}
          onDrop={(e) => {
            const messageType = e.dataTransfer.getData("messageType");
            console.log("messageType", messageType);
            setMessages((prevMessages) => [...prevMessages, messageType]);
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
          <NodesPanel />
        </Box>
      </Box>
    </Box>
  );
}
