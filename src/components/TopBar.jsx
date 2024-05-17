import { useDispatch, useSelector } from "react-redux";

import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SnackBar from "@mui/material/Snackbar";

import { isGraphDisconnected } from "../utils/graph";
import { setSaveError } from "../store/flowSlice";

export default function TopBar() {
  const { nodes, edges, saveError } = useSelector((state) => state.flow);
  const dispatch = useDispatch();

  function handleClick() {
    const result = isGraphDisconnected(nodes, edges);
    if (!result) {
      dispatch(setSaveError("Cannot save Flow"));
    }
  }

  return (
    <Box
      sx={{
        padding: "0px 64px 0px 0px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: "#f2f4ff",
        height: "8vh",
        boxShadow: "0px 2px 24px 0px rgba(0,0,0,0.3)",
      }}
    >
      <Button variant="outlined" onClick={handleClick}>
        Save Changes
      </Button>
      <SnackBar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={saveError !== null}
        autoHideDuration={3000}
        onClose={() => {
          dispatch(setSaveError(null));
        }}
      >
        <Alert
          severity="error"
          sx={{ backgroundColor: "#f28996", color: "#000", fontWeight: "bold" }}
        >
          {saveError}
        </Alert>
      </SnackBar>
    </Box>
  );
}
