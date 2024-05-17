import { useEffect, useState } from "react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { editNodeMessage, unselectNode } from "../store/flowSlice";

// SettingsPanel component only visible is any node is clicked
export default function SettingsPanel() {
  const { selectedNode } = useSelector((state) => state.flow);
  const [value, setValue] = useState(selectedNode?.data?.value || "");
  const dispatch = useDispatch();

  useEffect(() => {
    setValue(selectedNode?.data?.value || "");
  }, [selectedNode]);

  return (
    <Box
      sx={{
        boxShadow: "-2px 0px 5px 0px rgba(0,0,0,0.2)",
        width: "100%",
        height: "92vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "8px 4px",
          borderBottom: "1px solid #777",
        }}
      >
        <IconButton onClick={() => dispatch(unselectNode())}>
          <ArrowBackIcon sx={{ color: "#555", "&:hover": { color: "#000" } }} />
        </IconButton>
        <Box sx={{ margin: "0 auto" }}>
          <Typography>Message</Typography>
        </Box>
      </Box>
      <Box sx={{ padding: "16px 16px" }}>
        <Typography sx={{ marginBottom: "16px", color: "grey" }}>
          Text
        </Typography>
        <TextField
          fullWidth
          rows={3}
          multiline={true}
          placeholder="Enter your message here"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          sx={{ marginBottom: "16px" }}
        />
        <Button
          fullWidth
          variant="outlined"
          onClick={() => {
            dispatch(editNodeMessage({ id: selectedNode?.id, value: value }));
          }}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
}
