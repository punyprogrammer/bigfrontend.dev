/**
 * Returns a function that can only be executed once.
 * Subsequent calls return the result of the first call.
 *
 * @param {Function} func - The function to wrap.
 * @return {Function} A new function that runs `func` only once.
 */
function once(func) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      result = func.apply(this, args);
      called = true;
      func = null; // Free memory
    }
    return result;
  };
}
