/**
 * @param {string} str
 * @return {string | null}
 */
function firstDuplicate(str) {
  // your code here
  const map = Array(26).fill(0);
  for(let char of str) {
     const charIndex = char.charCodeAt(0) - 'a'.charCodeAt(0);
     if(map[charIndex]) return char;
     else map[charIndex]++;
  }
  return null;
}
