import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { addNode } from "../store/flowSlice";
import { useReactFlow } from "reactflow";

export default function NodesPanel() {
  const { nodes } = useSelector((state) => state.flow);
  const dispatch = useDispatch();
  const reactFlowInstance = useReactFlow();

  function handleClick() {
    const id = `${nodes.length + 1}`;
    const position = reactFlowInstance.screenToFlowPosition({
      x: 400,
      y: 400,
    });
    const newNode = {
      id,
      data: {
        value: "",
      },
      position,
      type: "customNode",
    };
    dispatch(addNode(newNode));
  }
  return (
    <Box
      sx={{
        boxShadow: "-2px 0px 5px 0px rgba(0,0,0,0.2)",
        width: "100%",
        height: "92vh",
        padding: "32px 8px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData("messageType", "text");
            }}
            onClick={handleClick}
            sx={{
              height: "100px",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(25, 118, 210, 0.5)",
              cursor: "pointer",
              "&:hover": {
                border: "1px solid #1976d2",
              },
            }}
          >
            <MessageOutlinedIcon
              sx={{ color: "#1976d2", marginBottom: "6px" }}
            />
            <Typography color="primary">Message</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
