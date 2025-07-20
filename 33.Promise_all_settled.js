
// Promise.allSettled waits for all promises to be resolved or reject 
// unline promise.all which rejects right away 
function allSettled(promises) {
  // your code here
  let results = [];
  let totalPending = promises.length;

  return new Promise((resolve,_)=>{
    if(!promises.length) resolve(results);
    for(let  i = 0 ;i<promises.length;i++){
      const currentPromise = promises[i];
      Promise.resolve(currentPromise).then(value=>{
       results[i] = {status:'fulfilled',value};
      })
      .catch(err=>{
        results[i] = {status:'rejected',reason:err};
      })
      .finally(()=>{
        totalPending--;
        if(totalPending === 0 ) resolve(results);
      })
    }

  })
}

