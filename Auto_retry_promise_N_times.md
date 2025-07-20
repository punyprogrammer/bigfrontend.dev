## Retry a promise N number of times

### Description
<img width="476" alt="image" src="https://github.com/user-attachments/assets/e78a236b-4eb6-4097-b2ef-22a71e5f5ee3">


### Solution
```javascript

/**
 * @param {() => Promise<any>} fetcher
 * @param {number} maximumRetryCount
 * @return {Promise<any>}
 */
function fetchWithAutoRetry(fetcher, maximumRetryCount) {

  return new Promise((resolve,reject)=>{
    let attempts = 0;
    const callFetcher = ()=>fetcher().then((res)=>{
      resolve(res)
    }).catch((err)=>{

      //  if used all attempts then reject 
       if(attempts >=maximumRetryCount) {
        reject(err);}
       else {attempts++;callFetcher();}
    })
    callFetcher();
  })
}
