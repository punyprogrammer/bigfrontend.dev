

/**
 * @param {number[]} arr
 * @returns number
 */
function findSingle(arr) {
  const n = arr.length;
  let res = arr[0];
  for(let i=1;i<n;i++) res = res^arr[i];
  return res;
}

