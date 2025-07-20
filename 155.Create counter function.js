
function createCounter() {
  let counter = 0;
  
  function count() {
    return ++counter;
  }
  
  count.reset = function() {
    counter = 0;
    return counter;
  };
  
  return count;
}

const count = createCounter();

// Usage:
console.log(count()); // 1
console.log(count()); // 2
console.log(count()); // 3
console.log(count.reset()); // 0 (and resets)
console.log(count()); // 1
