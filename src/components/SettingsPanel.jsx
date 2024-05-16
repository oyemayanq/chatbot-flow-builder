import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function SettingsPanel() {
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
          padding: "4px 0px",
          borderBottom: "1px solid #777",
        }}
      >
        <IconButton>
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
        />
      </Box>
    </Box>
  );
}
