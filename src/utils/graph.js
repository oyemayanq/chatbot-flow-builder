function dfs(nodes, edges, nodeId, visited) {
  visited.add(nodeId);

  // Getting list of node ids where the current nodeId might be connected
  // either as a source or target
  const nodeList = edges
    .filter((edge) => {
      if (edge.source === nodeId) {
        if (!visited.has(edge.target)) {
          return true;
        }
      }

      if (edge.target === nodeId) {
        if (!visited.has(edge.source)) {
          return true;
        }
      }

      return false;
    })
    .map((edge) => {
      if (edge.source === nodeId) {
        return edge.target;
      }

      return edge.source;
    });

  nodeList.forEach((node) => {
    dfs(nodes, edges, node, visited);
  });
}

// This function checks if the flow is disconnected
// It checks by applying DFS on the nodes and edges
export function isGraphDisconnected(nodes, edges, sourceNode = "1") {
  let visited = new Set();

  dfs(nodes, edges, sourceNode, visited);

  for (let i = 0; i < nodes.length; i++) {
    if (!visited.has(nodes[i].id)) {
      return false;
    }
  }

  return true;
}
