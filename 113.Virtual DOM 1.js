/**
 * @param {HTMLElement} 
 * @return {object} object literal presentation
 */
function virtualize(element) {
  // Handle text nodes
  if (element.nodeType === Node.TEXT_NODE) {
    return element.textContent;
  }

  // Handle element nodes
  if (element.nodeType === Node.ELEMENT_NODE) {
    const result = {
      type: element.tagName.toLowerCase(),
      props: {}
    };

    // Copy attributes to props
    for (const { name, value } of element.attributes) {
      // Convert class to className to match React conventions
      result.props[name === 'class' ? 'className' : name] = value;
    }

    // Handle children
    const children = [];
    for (const child of element.childNodes) {
      const virtualChild = virtualize(child);
      if (virtualChild !== null) {
        children.push(virtualChild);
      }
    }

    // Only add children prop if there are children
    if (children.length > 0) {
      // Flatten single child array for consistency with React
      result.props.children = children.length === 1 ? children[0] : children;
    }

    return result;
  }

  // Return null for unsupported node types
  return null;
}


/**
 * @param {object} valid object literal presentation
 * @return {HTMLElement} 
 */
function render(virtualNode) {
  // your code here
    // Handle text nodes (strings)
  if (typeof virtualNode === 'string') {
    return document.createTextNode(virtualNode);
  }

  // Create the DOM element
  const element = document.createElement(virtualNode.type);

  // Set properties/attributes
  const { children, ...attributes } = virtualNode.props;
  
  for (const [name, value] of Object.entries(attributes)) {
    // Convert className back to class for HTML
    if (name === 'className') {
      element.setAttribute('class', value);
    } else {
      element.setAttribute(name, value);
    }
  }

  // Handle children
  if (children) {
    const childrenArray = Array.isArray(children) ? children : [children];
    for (const child of childrenArray) {
      element.appendChild(render(child));
    }
  }

  return element;
}
