function longestUniqueSubstr(str) {
  const n = str.length;
  let left = 0, maxLength = 0, startIndex = 0;
  const lastSeen = new Map(); // Tracks last index of each character

  for (let right = 0; right < n; right++) {
    const currentChar = str[right];
    
    // If character was seen and is within current window
    if (lastSeen.has(currentChar) && lastSeen.get(currentChar) >= left) {
      left = lastSeen.get(currentChar) + 1;
    }
    
    // Update last seen index
    lastSeen.set(currentChar, right);
    
    // Check if current window is the largest found so far
    const currentWindowSize = right - left + 1;
    if (currentWindowSize > maxLength) {
      maxLength = currentWindowSize;
      startIndex = left;
    }
  }

  return str.slice(startIndex, startIndex + maxLength);
}
