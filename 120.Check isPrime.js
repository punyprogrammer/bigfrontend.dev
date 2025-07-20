
/**
 * @param {number} num - positive integer
 */
function isPrime(num) {
  // your code here
  if(num === 1) return false;
  for(let i =2;i*i<=num;i++){
    if(num%i === 0) return false;
  }
  return true;
}
