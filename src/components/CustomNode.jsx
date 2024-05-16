import { Handle, Position } from "reactflow";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MessageItem from "./MessageItem";

export default function CustomNode({ id, data }) {
  return (
    <>
      <Handle type="source" position={Position.Right} />

      <MessageItem value={data?.value} id={id} />
      <Handle type="target" position={Position.Left} />
    </>
  );
}
