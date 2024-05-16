import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function TopBar({ onSaveChanges }) {
  return (
    <Box
      sx={{
        padding: "0px 64px 0px 0px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: "#f2f4ff",
        height: "8vh",
      }}
    >
      <Button variant="outlined" onClick={onSaveChanges}>
        Save Changes
      </Button>
    </Box>
  );
}
