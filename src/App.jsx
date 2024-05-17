import "reactflow/dist/style.css";
import { useSelector } from "react-redux";

import Box from "@mui/material/Box";

import Flow from "./components/Flow";
import TopBar from "./components/TopBar";
import SettingsPanel from "./components/SettingsPanel";
import NodesPanel from "./components/NodesPanel";

export default function App() {
  const { selectedNode } = useSelector((state) => state.flow);

  return (
    <Box sx={{ padding: "0" }}>
      <TopBar />
      <Box sx={{ display: "flex" }}>
        <Box sx={{ width: "75vw" }}>
          <Flow />
        </Box>
        <Box sx={{ width: "25vw" }}>
          {selectedNode !== null ? <SettingsPanel /> : <NodesPanel />}
        </Box>
      </Box>
    </Box>
  );
}
