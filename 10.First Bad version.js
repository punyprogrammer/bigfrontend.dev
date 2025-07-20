// This is a JavaScript coding problem from BFE.dev

/**
 * @typedef {(version: number) => boolean} IsBad
 */

/**
 * @param {IsBad} isBad
 * @return {(v: number) => number}
 */
// monotonic like +++++,----
function firstBadVersion(isBad) {
  // firstBadVersion receive a check function isBad
  // and should return a closure which accepts a version number(integer)
  let ans = -1;
  let l = 0,
    r = 0;
  return (version) => {
    // write your code to return the first bad version
    // if none found, return -1
    r = version;
    while (l <= r) {
      const mid = Math.floor((l + r) / 2);
      if (isBad(mid)) {
        ans = mid;
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
    return ans;
  };
}
