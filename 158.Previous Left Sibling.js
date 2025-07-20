function previousLeftSibling(root, target) {
  if (root === target) return null; // Root has no siblings

  const queue = [{ node: root, prev: null }];
  
  while (queue.length) {
    const levelSize = queue.length;
    let prevNode = null;
    
    for (let i = 0; i < levelSize; i++) {
      const { node, prev } = queue.shift();
      
      // Check children
      for (const child of node.children) {
        if (child === target) {
          return prevNode; // Return previous sibling at this level
        }
        
        // Track previous node at this level
        queue.push({ node: child, prev: prevNode });
        prevNode = child;
      }
    }
  }
  
  return null; // Target not found
}
