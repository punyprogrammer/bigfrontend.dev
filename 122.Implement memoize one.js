function memoizeOne(func, isEqual) {
  let lastArgs = null;
  let lastResult = null;
  let lastThis = null;

  return function (...args) {
    // Check if arguments are equal to last call
    const argsEqual =
      lastArgs &&
      (isEqual
        ? isEqual(args, lastArgs)
        : args.length === lastArgs.length &&
          args.every((arg, i) => arg === lastArgs[i]));

    // If same arguments and same context, return cached result
    if (argsEqual && this === lastThis) {
      return lastResult;
    }

    // Otherwise compute and cache new result
    lastArgs = args;
    lastThis = this;
    lastResult = func.apply(this, args);
    return lastResult;
  };
}
