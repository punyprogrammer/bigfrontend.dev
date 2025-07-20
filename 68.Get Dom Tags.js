/**
 * Returns an array of unique HTML tag names in the DOM tree
 * @param {HTMLElement} tree - The root element of the DOM tree to traverse
 * @return {string[]} Array of unique lowercase tag names
 */
function getTags(tree) {
  const tagSet = new Set();  // Using Set for automatic uniqueness
  
  /**
   * Recursively traverses the DOM tree and collects tag names
   * @param {HTMLElement} node - Current node being processed
   */
  function traverse(node) {
    if (!node || !node.tagName) return;
    
    // Add lowercase tag name to the Set
    tagSet.add(node.tagName.toLowerCase());
    
    // Recursively process all child elements
    for (const child of node.children) {
      traverse(child);
    }
  }
  
  traverse(tree);
  return Array.from(tagSet); // Convert Set to Array before returning
}
