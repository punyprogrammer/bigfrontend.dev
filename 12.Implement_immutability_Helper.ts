

type Command = {
  $push?: any,
  $set?: any
  $apply?: (arg: any) => any
  $merge?: object
}
function update(target: object|[], command: Command): object|[] {
  // your code here

  if (typeof command !== 'object' || command === null) {
    throw new Error("Command must be a non-null object");
  }

  // $set takes highest priority: replace target entirely
  if ('$set' in command) {
    return command['$set'];
  }

  // $push applies only on arrays
  if ('$push' in command) {
    if (!Array.isArray(target)) {
      throw new Error('$push expects target to be an array');
    }
    return [...target, ...command['$push']];
  }

  // $merge applies only on objects
  if ('$merge' in command) {
    if (typeof target !== 'object' || target === null || Array.isArray(target)) {
      throw new Error('$merge expects target to be a plain object');
    }
    return { ...target, ...command['$merge'] };
  }

  // $apply runs a custom function
  if ('$apply' in command) {
    return command['$apply']?.(target);
  }

  // If none of the base commands, treat this as nested updates
  if (typeof target !== 'object' || target === null) {
    throw new Error('Target must be an object or array for nested updates');
  }

  // For nested updates: recursively apply update to each specified key
  const result = Array.isArray(target) ? [...target] : { ...target };

  for (const key in command) {
    result[key] = update(target?.[key], command?.[key]);
  }

  return result;
}


