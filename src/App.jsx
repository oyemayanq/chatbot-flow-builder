import "reactflow/dist/style.css";
import { useDispatch, useSelector } from "react-redux";

import Box from "@mui/material/Box";

import Flow from "./components/Flow";
import TopBar from "./components/TopBar";
import SettingsPanel from "./components/SettingsPanel";
import NodesPanel from "./components/NodesPanel";
import { unselectNode } from "./store/flowSlice";

export default function App() {
  const { selectedNode } = useSelector((state) => state.flow);
  const dispatch = useDispatch();

  return (
    <Box sx={{ padding: "0" }}>
      <TopBar />
      <Box sx={{ display: "flex" }}>
        <Box sx={{ width: "75vw" }}>
          <Flow />
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
