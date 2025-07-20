// This is a JavaScript coding problem from BFE.dev

/**
 * @param {Array<any>} list
 * @returns {void}
 */
function moveZeros(list) {
  // your code here
  let lastNonZeroIndex = 0;
  const n = list.length;
  for (let i = 0; i < n; i++) {
    if (list[i] !== 0) {
      list[lastNonZeroIndex++] = list[i];
    }
  }
  for (let i = lastNonZeroIndex; i < n; i++) list[i] = 0;
 
}
