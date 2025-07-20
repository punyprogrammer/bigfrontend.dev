/**
 * Performs selection sort on an array in ascending order
 * @param {number[]} arr - The array to be sorted
 * @returns {number[]} - The sorted array
 */
function selectionSort(arr) {
  const length = arr.length;
  
  // Early return if array is empty or has only one element
  if (length <= 1) return arr;
  
  for (let currentIndex = 0; currentIndex < length - 1; currentIndex++) {
    // Assume the current element is the smallest initially
    let minIndex = currentIndex;
    
    // Find the index of the minimum element in the remaining unsorted portion
    for (let comparisonIndex = currentIndex + 1; comparisonIndex < length; comparisonIndex++) {
      if (arr[comparisonIndex] < arr[minIndex]) {
        minIndex = comparisonIndex;
      }
    }
    
    // Swap the found minimum element with the current element
    // Only swap if we found a smaller element than the current one
    if (minIndex !== currentIndex) {
      [arr[currentIndex], arr[minIndex]] = [arr[minIndex], arr[currentIndex]];
    }
  }
  
  return arr;
}
