function cloneDeep(data, seen = new WeakMap()) {
  if (typeof data !== 'object' || data === null) {
    return data;
  }

  if (seen.has(data)) {
    return seen.get(data);
  }

  if (Array.isArray(data)) {
    const copy = [];
    seen.set(data, copy);
    data.forEach((item, i) => {
      copy[i] = cloneDeep(item, seen);
    });
    return copy;
  }

  const copy = {};
  seen.set(data, copy);

  // Handle string keys
  for (const key in data) {
    if (Object.hasOwn(data, key)) {
      copy[key] = cloneDeep(data[key], seen);
    }
  }

  // ✅ Handle symbol keys
  const symbolKeys = Object.getOwnPropertySymbols(data);
  for (const sym of symbolKeys) {
      copy[sym] = cloneDeep(data[sym], seen);
  }

  return copy;
}
