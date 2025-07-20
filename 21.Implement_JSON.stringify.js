
/**
 * @param {any} data
 * @return {string}
 */
function stringify(data) {
  if ([NaN, null, undefined, Infinity].includes(data)) {
    return 'null';
  }
  const type = typeof data;
  switch (type) {
    case 'function' :
    case 'symbol': return undefined;
    case 'bigint': throw Error('bigints are not supported');
    case 'string': return `"${data}"`;
    case 'object': {
      if (Array.isArray(data)) {
        return `[${data.map(e => ((typeof e) == 'symbol') ? 'null' : stringify(e)).join()}]`;
      }
      if (data instanceof Date) {
        return `"${data.toISOString()}"`;
      }
      return '{' + Object.keys(data).filter(key => data[key] !== undefined).map(key => `"${key}":${stringify(data[key])}`).join() + '}';
    }
  
    default: return String(data);
  }
}
