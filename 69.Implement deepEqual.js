/**
 * @param {any} a
 * @param {any} b
 * @return {boolean}
 */
// A weak set added for detecting cycle 
function isEqual(a, b,s = new WeakSet()) {
  // last level base case 
  if(a === b) return true;
  // if this key has been seen before then a potential cycle 
  if(s.has(a) || s.has(b)) return true;
  // undefined and null check 
  if(typeof a!=="object" || typeof b!=="object"|| a=== null || b === null) return false;
  // main check 
  const keys1 = Object.keys(a);
  const keys2 = Object.keys(b);
  s.add(a);
  s.add(b);
  // if different keys
  if(keys1.length !=keys2.length) return false;
  // check for all properties
  for(let key of keys1){
    if(!keys2.includes(key) || !isEqual(a[key],b[key],s))
    {
      return false;
    }
  }
  return true;
}
console.log(isEqual({a: {b: 1}}, {a: {b: 1}})); // true
console.log(isEqual({a: {b: 1}}, {a: {b: 2}})); // false
console.log(isEqual({a: {b: 1, c: 2}}, {a: {b: 1, c: 2}})); // true
console.log(isEqual({a: {b: 1, c: 2}}, {a: {b: 1, c: 3}})); // false
