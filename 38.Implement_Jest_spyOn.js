
/**
 * @param {object} obj
 * @param {string} methodName
 */
function spyOn(obj, methodName) {
  let calls = [];
  // The idea is to modify the existing implementation
  if(typeof obj[methodName]!=='function' || !obj[methodName]){
    throw new Error('Invalid function');
  }
  const originalMethod = obj[methodName];
  obj[methodName] = function(...args){
  originalMethod(...args);
  calls.push(args);
  }
  return {
    calls
  }
}
