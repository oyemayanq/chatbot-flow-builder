import {
  BaseEdge,
  getStraightPath,
  getBezierPath,
  EdgeLabelRenderer,
  useReactFlow,
} from "reactflow";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const EdgeMarker = {
  type: {
    Arrow: "arrow",
    ArrowClosed: "arrowClosed",
  },
};

export default function CustomEdge({ id, sourceX, sourceY, targetX, targetY }) {
  const { setEdges } = useReactFlow();
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  return (
    <>
      <BaseEdge id={id} path={edgePath} markerEnd={EdgeMarker} />
      <EdgeLabelRenderer>
        <IconButton
          onClick={() => {
            setEdges((es) => es.filter((e) => e.id !== id));
          }}
          sx={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
            pointerEvents: "all",
            zIndex: 10,
            padding: "2px",
            color: "#000",
            "&:hover": {
              backgroundColor: "#f6b2b1",
              color: "red",
            },
          }}
        >
          <CloseIcon sx={{ fontSize: "10px" }} />
        </IconButton>
      </EdgeLabelRenderer>
    </>
  );
}
