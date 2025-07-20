
/**
 * @param {number[]} arr - ascending array with duplicates
 * @param {number} target
 * @return {number}
 */
function firstIndex(arr, target) {
  // your code here
  const n = arr.length;
  let firstOccurence = -1;
  let [l, r] = [0, n - 1];
  // do iterative binary search 
  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2); // Correct calculation of mid
    if (arr[mid] === target) {
      // found a possible target so reduce search space to left

      firstOccurence = mid;
      r = mid - 1;

    }
    else if (arr[mid] > target) {
      r = mid - 1;
    }
    else {
      l = mid + 1;
    }
  }
  return firstOccurence;
}
