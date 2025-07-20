/**
 * @param {string} str
 * @return {boolean} 
 */
function validMatch(opening, closing) {
  return ((opening === "[" && closing === "]") || (opening === "(" && closing === ")") || (opening === "{" && closing === "}"))
}
function isOpening(char) {
  return char === "(" || char === "[" || char === "{"
}
function isClosing(char) {
  return char === ")" || char === "]" || char === "}"
}
function validate(str) {
  // your code here
  // stack to be used opening should be pushed to stack and closing should be compared to the top of stack 
  const stack = [];
  for (let ch of str) {
    if (isOpening(ch)) {
      stack.push(ch);
    } else {
      if (stack.length === 0) return false;
      // if valid open close remove from stack 
      if (validMatch(stack.at( - 1), ch)) stack.pop();
      else return false;
    }
  }
  // If stack is empty it means valid 
  return stack.length === 0

}
console.log(validate('{}[]()'))
// true
console.log(validate('{[()]}'))
// true
console.log(validate('{[}]'))
// false, they are not in the right order
console.log(validate('{}}'))
