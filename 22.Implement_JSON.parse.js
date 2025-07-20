/**
 * @param {string} str
 * @return {object | Array | string | number | boolean | null}
 */
/**
 * @param {string} str
 * @return {object | Array | string | number | boolean | null}
 */
function parse(str) {
  if (typeof str !== 'string') throw new Error('Input must be a string');
  str = str.trim();

  if (str === '' || str[0] === "'") throw new Error('Invalid input');
  if (str === 'null') return null;
  if (str === 'true') return true;
  if (str === 'false') return false;
  if (str === '{}') return {};
  if (str === '[]') return [];
  if (!isNaN(str)) return Number(str);

  // String
  if (str[0] === '"' && str[str.length - 1] === '"') {
    return str.slice(1, -1);
  }

  // Object
  if (str[0] === '{' && str[str.length - 1] === '}') {
    const content = str.slice(1, -1);
    if (content.trim() === '') return {};
    return content.split(',').reduce((acc, cur) => {
      const index = cur.indexOf(':');
      if (index === -1) throw new Error('Invalid object syntax');
      const key = cur.slice(0, index).trim();
      const val = cur.slice(index + 1).trim();
      acc[parse(key)] = parse(val);
      return acc;
    }, {});
  }

  // Array
  if (str[0] === '[' && str[str.length - 1] === ']') {
    const content = str.slice(1, -1);
    if (content.trim() === '') return [];
    return content.split(',').map(el => parse(el.trim()));
  }

  throw new Error('Unable to parse input');
}
