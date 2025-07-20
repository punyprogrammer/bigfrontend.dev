// This is a JavaScript coding problem from BFE.dev 

/**
 * Throttles a function so it executes at most once every `wait` milliseconds.
 * If the function is called during the cooldown, the latest call's arguments and context are saved
 * and invoked once when the wait period ends.
 *
 * @param {(...args: any[]) => any} func - The function to be throttled
 * @param {number} wait - Throttle delay in milliseconds
 * @returns {(...args: any[]) => any} - A throttled version of `func`
 */
function throttle(func, wait) {
  // Flag to indicate if we are currently in the throttle cooldown period
  let inThrottle = false;

  // These store the most recent arguments/context passed during throttle period
  let latestArgs = null;
  let latestContext = null;

  // Return a new function that wraps the original one
  return function (...args) {
    // If not currently throttling, execute the function immediately
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;

      // Start the cooldown timer
      setTimeout(() => {
        // If any call happened during throttle, replay the latest one now
        if (latestArgs) {
          func.apply(latestContext, latestArgs);
        }

        // Reset throttle state and stored data
        inThrottle = false;
        latestArgs = null;
        latestContext = null;
      }, wait);
    } else {
      // If a call happens while in throttle, store the latest context and arguments
      latestArgs = args;
      latestContext = this; // ✅ Fix: originally you set this to null!
    }
  };
}
