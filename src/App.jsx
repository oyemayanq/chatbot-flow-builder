import { useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import TopBar from "./components/TopBar";
import SettingsPanel from "./components/SettingsPanel";
import NodesPanel from "./components/NodesPanel";

export default function App() {
  const [messages, setMessages] = useState([]);

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
          {messages?.map((message, index) => (
            <Box key={index} sx={{ marginBottom: "10px" }}>
              {message}
            </Box>
          ))}
        </Box>
        <Box sx={{ width: "25vw" }}>
          <NodesPanel />
        </Box>
      </Box>
    </Box>
  );
}
