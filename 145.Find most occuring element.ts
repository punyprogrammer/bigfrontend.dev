function count(str: string): string | string[] {
  const charCount: { [key: string]: number } = {};
  const result: string[] = [];
  let maxCount = 0;

  // Use for...of loop for simplicity
  for (const char of str) {
    // Use nullish coalescing to simplify incrementing the count
    charCount[char] = (charCount[char] ?? 0) + 1;
    maxCount = Math.max(maxCount, charCount[char]);
  }

  // Iterate through map to find characters with maxCount
  for (const [key, value] of Object.entries(charCount)) {
    if (value === maxCount) {
      result.push(key);
    }
  }

  // Return a single character if there's only one result, otherwise return the array
  return result.length === 1 ? result[0] : result;
}

// Testing the function
console.log(count('abbccc')); // 'c'
console.log(count('abbcccddd')); // ['c', 'd']
