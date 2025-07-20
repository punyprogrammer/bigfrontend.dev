

// This is a JavaScript coding problem from BFE.dev 

type Flat = (arr: Array<any>, depth?:number) => Array<any>

const flat: Flat = function (arr, depth = 1) {
  // your imeplementation here
  const result:any[] = [];
  for(let i = 0 ;i<arr.length;i++){
    const item = arr[i];
    if(Array.isArray(item) && depth > 0 ){
      result.push(...flat(item,depth - 1))
    }
    // check for sparse item
    else if(arr.hasOwnProperty(i)){
      result.push(item);
    }
  }
  return result;

}



