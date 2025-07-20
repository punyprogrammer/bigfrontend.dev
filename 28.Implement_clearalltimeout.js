/**
 * cancel all timer from window.setTimeout
 */
window.originalSetTimeout = window.setTimeout;
// keep track of all the timers and whever a timer is initiated push into array 
window.timeoutIds = []
window.setTimeout = (callbackFunc,delay)=>{
  const timeoutId = originalSetTimeout(callbackFunc,delay);
  timeoutIds.push(timeoutId);
  return timeoutId;

}
function clearAllTimeout() {
  // your code here
  for(const timerId of timeoutIds) clearTimeout(timerId);
}
