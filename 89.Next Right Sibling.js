/**
 * @param {HTMLElement} root
 * @param {HTMLElement} target
 * @return {HTMLElemnt | null}
 */
function nextRightSibling(root, target) {
  // your code here
  // Do standard BFS
  const bfsQueue = [];
  bfsQueue.push(root);
  while (bfsQueue.length) {
    // deque element
    const levelSize = bfsQueue.length;
    for (let i = 0; i < levelSize; i++) {
      const frontNode = bfsQueue.shift();
      // enqueue all children
      for (let child of frontNode.children) {
        //  if previous appended element was target we have found siblind
        if (bfsQueue[bfsQueue.length - 1] === target) {
          return child;
        } else {
          bfsQueue.push(child);
        }
      }
    }
  }
  return null;
}
