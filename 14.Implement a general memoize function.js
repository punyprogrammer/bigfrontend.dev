

/**
 * @param {Function} func
 * @param {(args:[]) => string }  [resolver] - cache key generator
 */
function memo(func, resolver) {
  const cache = new Map(); // Better than object for memoization
  
  return function(...args) {
    // Generate cache key
    const key = resolver ? resolver(...args) : 
                args.length === 1 ? args[0] : JSON.stringify(args);
    
    // Check cache
    if (cache.has(key)) {
      return cache.get(key);
    }
    
    // Compute and cache result
    const result = func.apply(this, args);
    cache.set(key, result);
    return result;
  };
}
const func = (arg1, arg2) => {
  return arg1 + arg2
}
const memoed = memo(func)
memoed(1, 2) 
// 3, func is called
memoed(1, 2) 
// 3 is returned right away without calling func
memoed(1, 3)
// 4, new arguments, so func is called
