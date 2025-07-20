/**
 * @param {number[]} arr - ascending array with duplicates
 * @param {number} target
 * @return {number}
 */
function lastIndex(arr, target) {
  const n = arr.length;
  let [l, r] = [0, n - 1];
  let rightMostOcc = -1;

  // Early exit if target is out of range
  if (n === 0 || target < arr[0] || target > arr[n - 1]) {
    return rightMostOcc;
  }

  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);

    if (arr[mid] === target) {
      // Found a match, search in the right half for the last occurrence
      rightMostOcc = mid;
      l = mid + 1;
    } else if (arr[mid] > target) {
      // Target is in the left half
      r = mid - 1;
    } else {
      // Target is in the right half
      l = mid + 1;
    }
  }

  return rightMostOcc;
}
