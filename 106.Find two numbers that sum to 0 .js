/**
 * @param {number[]} arr
 * @return {number[]}
 */
function findTwo(arr) {
  // your code here
  const map = new Map();
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    if (map.has(-1 * arr[i])) {
      return [map.get(-1 * arr[i]), i];
    } else {
      map.set(arr[i], i);
    }
  }
  return null
}
