import { Handle, Position } from "reactflow";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function CustomNode({ data }) {
  const Node = data.label;
  return (
    <>
      <Handle type="source" position={Position.Right} />
      <Node value={data?.value} />
      <Handle type="target" position={Position.Left} />
    </>
  );
}
