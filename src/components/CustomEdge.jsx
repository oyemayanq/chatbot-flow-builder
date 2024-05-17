import {
  BaseEdge,
  getStraightPath,
  getBezierPath,
  EdgeLabelRenderer,
  useReactFlow,
  MarkerType,
} from "reactflow";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { removeEdge } from "../store/flowSlice";

// const markerEnd = {
//   type: MarkerType.ArrowClosed,
// };

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
  const { setEdges } = useReactFlow();
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
