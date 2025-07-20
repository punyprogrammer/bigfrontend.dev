function sequence(functions) {
  return function finalCallback(cb, initialData) {
    let index = 0;

    function next(err, data) {
      if (err) return cb(err); // Stop and forward error

      if (index >= functions.length) {
        // No error: return undefined if no data
        return typeof data === 'undefined' ? cb() : cb(undefined, data);
      }

      const fn = functions[index++];
      fn(next, data);
    }

    next(undefined, initialData); // Start chain
  };
}
