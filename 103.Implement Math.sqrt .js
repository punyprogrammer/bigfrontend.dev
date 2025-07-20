function mySqrt(x, precision = 1e-6, maxIterations = 1000) {
  if (x < 0) return NaN;
  if (x === 0 || x === 1) return x;
  if(isNaN(x)) return NaN;
  let left = 1;
  let right = x;
  let iterations = 0;
  
  while (right - left > precision && iterations < maxIterations) {
    const mid = (left + right) / 2;
    const square = mid * mid;
    if (Math.floor(square) === x) {
      return Math.floor(mid);
    } else if (square < x) {
      left = mid;
    } else {
      right = mid;
    }
    
    iterations++;
  }
  
  return Math.floor((left + right) / 2);
}
mySqrt(100)
