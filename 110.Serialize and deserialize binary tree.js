// This is the class for the node
// you can use this directly as it is bundled with your code

// class Node {
//   value: number
//   left: null | Node
//   right: null | Node
//   constructor(val) {
//     this.value = val
//     this.left = null
//     this.right = null
//   }
// }

/**
 * @param {Node} root
 * @return {string}
 */
function serialize(root) {
  // your code here
   if (!root) return "";
    
    const queue = [root];
    const values = [];
    
    while (queue.length) {
        const node = queue.shift();
        
        if (node) {
            values.push(node.data);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            values.push('$');
        }
    }
    
    // Remove trailing null markers for efficiency
    while (values.length > 0 && values[values.length - 1] === '$') {
        values.pop();
    }
    
    return values.join(',');
}

/**
 * @param {string} str
 * @return {Node}
 */
function deserialize(data) {
  // your code here
  if (!data) return null;
    
    const values = data.split(',');
    const root = new Node(Number(values[0]));
    const queue = [root];
    let i = 1;
    
    while (queue.length && i < values.length) {
        const node = queue.shift();
        
        // Left child
        if (i < values.length && values[i] !== '$') {
            node.left = new Node(Number(values[i]));
            queue.push(node.left);
        }
        i++;
        
        // Right child
        if (i < values.length && values[i] !== '$') {
            node.right = new Node(Number(values[i]));
            queue.push(node.right);
        }
        i++;
    }
    
    return root;
}
