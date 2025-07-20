/**
 * @param {number} num - integer
 * @return {number} count of 1 bit
 */
function countOne(num) {
  let count = 0;

  // Iterate until num becomes 0
  while (num > 0) {
    // Check if the least significant bit is 1
    if (num % 2 === 1) {
      count++;
    }
    // Right-shift num by 1 to process the next bit
    num = Math.floor(num / 2);
  }

  return count;
}
