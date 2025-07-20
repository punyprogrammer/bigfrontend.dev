
/**
 * @param {number[]} arr - ascending array with duplicates
 * @param {number} target
 * @return {number}
 */
function elementBefore(arr, target){
  // your code here
  // the idea is to find the first appearance and return the element before
  const n = arr.length;
  let [l,r] = [0,n-1];
  let firstOccurence = -1;
  while( l <= r){
    const mid = (l+Math.floor((r-l)/2));
    if(arr[mid] === target){
      firstOccurence = mid;
      r =mid-1;
    }
    else if(arr[mid] > target){
      r = mid-1;
    }
    else {
      l = mid+1;
    }
  }
  if(firstOccurence === -1) return undefined;
  if(firstOccurence  === 0) return undefined;
  return arr[firstOccurence - 1];
}
