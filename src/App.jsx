import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import TopBar from "./components/TopBar";
import SettingsPanel from "./components/SettingsPanel";

export default function App() {
  return (
    <Box sx={{ padding: "0" }}>
      <TopBar onSaveChanges={() => {}} />
      <Box sx={{ display: "flex" }}>
        <Box sx={{ width: "75vw" }}>Flow Chart</Box>
        <Box sx={{ width: "25vw" }}>
          <SettingsPanel />
        </Box>
      </Box>
    </Box>
  );
}
