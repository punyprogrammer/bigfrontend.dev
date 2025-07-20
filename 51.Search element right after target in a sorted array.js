/**
 * @param {number[]} arr - ascending array with duplicates
 * @param {number} target
 * @return {number}
 */
function elementAfter(arr, target) {
  const n = arr.length;

  // Early exit if target is out of range
  if (n === 0 || target < arr[0] || target > arr[n - 1]) {
    return undefined;
  }

  let lastOcc = -1;
  let [l, r] = [0, n - 1];

  // Find the last occurrence of the target
  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);

    if (arr[mid] === target) {
      lastOcc = mid;
      l = mid + 1; // Search in the right half for the last occurrence
    } else if (arr[mid] > target) {
      r = mid - 1; // Target is in the left half
    } else {
      l = mid + 1; // Target is in the right half
    }
  }

  // If target not found or it's the last element, return undefined
  if (lastOcc === -1 || lastOcc === n - 1) {
    return undefined;
  }

  // Return the element after the last occurrence of the target
  return arr[lastOcc + 1];
}
