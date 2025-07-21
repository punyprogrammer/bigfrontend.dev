if (!Function.prototype.call) {
  Function.prototype.call = function (context, ...args) {
    if (typeof this !== 'function') {
      throw new TypeError(this + ' is not callable');
    }

    context = context || globalThis;

    // Create a unique property to avoid overwriting existing ones
    const fnSymbol = Symbol();

    // Temporarily assign the function to the context
    context[fnSymbol] = this;

    // Call the function
    const result = context[fnSymbol](...args);

    // Clean up
    delete context[fnSymbol];

    return result;
  };
}
