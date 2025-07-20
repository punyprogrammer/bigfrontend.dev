
/**
 * @param {Array<any>} promises - notice input might have non-Promises
 * @return {Promise<any[]>}
 */

// The Promise.all() static method takes an iterable of promises as input
// and returns a single Promise. This returned promise fulfills when all
// of the input's promises fulfill (including when an empty iterable is passed), with an array of 
// the fulfillment values.
// It rejects when any of the input's promises rejects, with this first rejection reason.
function all(promises) {
  // your code here
  return new Promise((resolve,reject)=>{
    let completedPromises = 0;
    let results = [];
    // if empty resolve right away 
    if(!promises.length) resolve(results);
    for(let i = 0 ;i<promises.length;i++){
      // if promise is resolve
      Promise.resolve(promises[i]).then((res)=>{
        results[i] = res;
        completedPromises++;
        if(completedPromises === promises.length) resolve(results);
      }).catch(err=>{
        reject(err)
      })
    }
  })
}
