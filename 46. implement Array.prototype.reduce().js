

Array.prototype.myReduce = function(callback,initialValue){
  let startIndex = 0;
  let accumulator;
  let array = this;
  if(!array.length && !initialValue){
    throw new Error("Empty array not allowed")
  }
  if(arguments.length >=2){
    accumulator = initialValue;
  }
  else{
    accumulator = array[0];
    startIndex = 1;
  }
  for(let i = startIndex;i<array.length;i++){
    accumulator = callback(accumulator,array[i],i,array);
  }
  return accumulator;

}

