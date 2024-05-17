import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import Typography from "@mui/material/Typography";

export default function NodesPanel() {
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
