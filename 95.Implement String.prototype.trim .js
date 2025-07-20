
/**
 * @param {string} str
 * @return {string}
 */
function trim(str) {
//   ^\s+ matches whitespaces at the start of the string:

// ^ asserts the start of the string.

// \s+ matches one or more whitespace characters.

// \s+$ matches whitespaces at the end of the string:

// $ asserts the end of the string.

// \s+ matches one or more whitespace characters.

// The | acts as an OR.

// g flag ensures all matches (start and end) are removed.
  return  str.replace(/^\s+|\s+$/g, '');
}
