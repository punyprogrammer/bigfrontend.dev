# Implement Array.prototype.flat()

## Question:
Implement Array.prototype.flat()

```javascript
function flat(arr, depth = 1) {
  const flattened = [];
  
  for (let  item  of arr) {
    if (Array.isArray(item) && depth > 0) {
      flattened.push(...flat(item, depth - 1));
    } else {
      flattened.push(item);
    }
  }
  
  return flattened;
}
