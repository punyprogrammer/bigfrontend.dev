
/**
 * @param {any[]} arr
 */
function deduplicate(arr) {
  // your code here
  const seen = new Set();
  let i = 0;
  while (i < arr.length) {
    if (seen.has(arr[i])) {
      arr.splice(i, 1); // Remove duplicate in-place
    } else {
      seen.add(arr[i]);
      i++;
    }
  }
  return arr;
}
