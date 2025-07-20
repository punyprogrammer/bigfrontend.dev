
/**
 * @param {number} base
 * @param {number} power - integer
 * @return {number}
 */
function pow(base, power){
  // your code here
  const isNegative = power <  0;
  if(power === 0) return 1;
  let result  = 1;
  for(let i = 1;i<=Math.abs(power);i++) result*=(base);
  return isNegative ? 1/result:result;
}
