import Box from "@mui/material/Box";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import Typography from "@mui/material/Typography";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useDispatch } from "react-redux";
import { selectNode } from "../store/flowSlice";

export default function MessageItem({ value, id }) {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(selectNode(id));
  }

  return (
    <Box
      sx={{
        width: "200px",
        borderRadius: "6px",
        boxShadow: "3px 5px 15px 2px rgba(0,0,0,0.35)",
        overflow: "hidden",
      }}
      onClick={handleClick}
    >
      <Box
        sx={{
          padding: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#a2ffff",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <MessageOutlinedIcon sx={{ fontSize: "12px" }} />
          <Typography
            component="span"
            sx={{ fontSize: "10px", fontWeight: "bold   " }}
          >
            Send Message
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "4px",
            backgroundColor: "#fff",
            borderRadius: "50%",
          }}
        >
          <WhatsAppIcon sx={{ fontSize: "12px", color: "green" }} />
        </Box>
      </Box>
      <Box sx={{ padding: "8px", backgroundColor: "#fff" }}>
        <Typography component="p" sx={{ fontSize: "12px " }}>
          {value}
        </Typography>
      </Box>
    </Box>
  );
}
