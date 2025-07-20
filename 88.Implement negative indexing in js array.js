/**
 * @param {any[]} arr
 * @returns {?} - sorry no type hint for this
 */
function wrap(arr) {
  return new Proxy(arr, {
    get(target, prop, receiver) {
      // Convert negative indices to positive
      if (typeof prop === 'string' && /^-?\d+$/.test(prop)) {
        const index = parseInt(prop, 10);
        const adjustedIndex = index < 0 ? target.length + index : index;
        return Reflect.get(target, adjustedIndex, receiver);
      }
      return Reflect.get(target, prop, receiver);
    },
    set(target, prop, value, receiver) {
      // Handle negative indices for assignment too
      if (typeof prop === 'string' && /^-?\d+$/.test(prop)) {
        const index = parseInt(prop, 10);
        if(index + target.length < 0) {
          throw new Error('Not allowed')
        }
        const adjustedIndex = index < 0 ? target.length + index : index;
        return Reflect.set(target, adjustedIndex, value, receiver);
      }
      return Reflect.set(target, prop, value, receiver);
    }
  });
}
const originalArr = [1,2,3]
const arr = wrap(originalArr)
arr[0] // 1
arr[1] // 2
arr[2] // 3
arr[3] // undefined
arr[-1] // 3
arr[-2] // 2
arr[-3] // 1
arr[-4] // undefined

                   
