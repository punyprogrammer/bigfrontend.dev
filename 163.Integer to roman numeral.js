


/**
 * @param {number} integer
 * @returns {string} str - roman numeral string
 */
function integerToRoman(num) {
  // your code here
  const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const sym = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  
  let roman = '';
  
  for (let i = 0; i < val.length; i++) {
    while (num >= val[i]) {
      roman += sym[i];
      num -= val[i];
    }
  }
  
  return roman;
}


