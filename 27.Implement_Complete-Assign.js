function completeAssign(target, ...sources) {
  if (target === null || target === undefined) {
    throw Error('Target is wrong.');
  }

  target = Object(target);
  
  for (const source of sources) {
    if (!source ) continue;

    Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
  }

  return target;
}
