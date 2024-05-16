import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import TopBar from "./components/TopBar";

export default function App() {
  return (
    <Box sx={{ padding: "0" }}>
      <TopBar onSaveChanges={() => {}} />
    </Box>
  );
}
