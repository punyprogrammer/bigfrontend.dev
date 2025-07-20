
/**
 * @param {number[]} arr - ascending unique array
 * @param {number} target
 * @return {number}
 */
function binarySearch(arr, target){
  // your code here
  let occurence = -1;
  const n = arr.length;
  let [l,r] = [0,n-1];
  while( l<=r){
    const mid = l+ Math.floor((r-l)/2);
    if(arr[mid] === target){
      occurence = mid;
      break;
    }
    else if(arr[mid]>target){
      r = mid-1;
    }
    else {
      l = mid+1;
    }

  }
  return occurence;
  
}
