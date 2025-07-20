
/**
 * Compresses a string using run-length encoding
 * @param {string} str - The string to compress
 * @return {string} The compressed string
 */
function compress(str) {
  // Handle edge cases
  if (!str || str.length === 0) return '';
  
  let result = '';
  let currentChar = str[0];
  let count = 1;
  
  // Process each character starting from index 1
  for (let i = 1; i < str.length; i++) {
    if (str[i] === currentChar) {
      count++;
    } else {
      // Append current character and its count to result
      result += currentChar + (count > 1 ? count : '');
      currentChar = str[i];
      count = 1;
    }
  }
  
  // Don't forget the last group
  result += currentChar + (count > 1 ? count : '');
  
  return result;
}
