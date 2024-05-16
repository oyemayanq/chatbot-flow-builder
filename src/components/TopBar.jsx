import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function TopBar({ onSaveChanges }) {
  return (
    <Box
      sx={{
        padding: "8px 64px 8px 16px",
        textAlign: "end",
        backgroundColor: "#f2f4ff",
      }}
    >
      <Button variant="outlined" onClick={onSaveChanges}>
        Save Changes
      </Button>
    </Box>
  );
}
