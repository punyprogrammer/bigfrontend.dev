/**
 * @param {any} proto
 * @return {object}
 */
function myObjectCreate(proto) {
  // your code here
  // we have to create a object
  // proto can be a object or a function 
  
  if(typeof proto !== 'object'||proto === null || proto === undefined){
    throw new Error("Only object can be passed as proto");
  }
  const F = function(){}
  F.prototype = proto;
  return new F();
}
