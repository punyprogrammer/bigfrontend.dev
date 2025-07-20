/**
 * Sorts an array using the Bubble Sort algorithm
 * @param {number[]} arr - The array to be sorted
 * @returns {number[]} - The sorted array (sorted in-place)
 */
function bubbleSort(arr) {
  const n = arr.length;
  
  // Early return if array is empty or has only one element
  if (n <= 1) return arr;
  
  // Outer loop - controls number of passes
  for (let i = 0; i < n - 1; i++) {
    // Flag to optimize - check if any swaps occurred
    let swapped = false;
    
    // Inner loop - performs comparisons and swaps
    // After each pass, the largest element bubbles to the end
    for (let j = 0; j < n - 1 - i; j++) {
      // Compare adjacent elements
      if (arr[j] > arr[j + 1]) {
        // Swap elements if they're in the wrong order
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    
    // If no swaps occurred, array is already sorted
    if (!swapped) break;
  }
  
  return arr;
}
