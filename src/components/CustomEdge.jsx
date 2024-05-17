import { useDispatch } from "react-redux";
import { BaseEdge, getBezierPath, EdgeLabelRenderer } from "reactflow";

import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { removeEdge } from "../store/flowSlice";

// CustomEdge component to show edges with cross button and arrow at the end
export default function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}) {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });
  const dispatch = useDispatch();

  return (
    <>
      <BaseEdge id={id} path={edgePath} markerEnd={markerEnd} />
      <EdgeLabelRenderer>
        <IconButton
          className="nodrag nopan"
          onClick={() => {
            dispatch(removeEdge(id));
          }}
          sx={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
            pointerEvents: "all",
            padding: "2px",
            color: "#000",
            backgroundColor: "#eee",
            border: "1px solid #fff",
            cursor: "pointer",
            "&:hover": {
              boxShadow: "0 0 6px 2px rgba(0, 0, 0, 0.08)",
              backgroundColor: "#eee",
            },
          }}
        >
          <CloseIcon sx={{ fontSize: "12px" }} />
        </IconButton>
      </EdgeLabelRenderer>
    </>
  );
}
