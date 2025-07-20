/**
 * @param {any} target
 * @param {any[]} sources
 * @return {object}
 */
function objectAssign(target, ...sources) {
  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  const to = Object(target); // Ensure target is an object

  for (const source of sources) {
    if (source == null) continue;

    // STEP 1: Get string keys (only own, enumerable keys)
    const stringKeys = Object.keys(source); // Same as: Object.getOwnPropertyNames(source).filter(key => source.propertyIsEnumerable(key))

    // STEP 2: Get symbol keys — these are not returned by Object.keys()
    // Symbols are special unique property keys that can be used to avoid key collisions.
    // For example:
    //    const sym = Symbol('id');
    //    const obj = { [sym]: 123 }; // This won't show up in Object.keys(obj)
    const symbolKeys = Object.getOwnPropertySymbols(source)
      .filter(sym =>
        // We use propertyIsEnumerable to make sure we only copy *enumerable* symbol keys,
        // just like how Object.assign behaves. Non-enumerable properties should be ignored.
        Object.prototype.propertyIsEnumerable.call(source, sym)
      );

    // Combine both kinds of keys into one array
    const keys = [...stringKeys, ...symbolKeys];

    // STEP 3: Assign properties one by one
    for (const key of keys) {
      // Note: This will throw in strict mode if property is read-only,
      // which matches how native Object.assign behaves
      to[key] = source[key];
    }
  }

  return to;
}
