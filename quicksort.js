// Quicksort
// Another Divide and Conquer method
//
// 1. Pick a pivot
// 2. Partition the array into two sub-arrays: elements less than pivot and elements greater than pivot
// 3. Call quicksort recursively on two sub-arrays
//
// Base case: array of length 0 or 1
// Recursive case: quicksort(lessArray) + pivot + quicksort(moreArray)

function quicksort(array) {
  if (array.length <= 1) {
    return array;
  } else {
    const pivot = array[0];
    let leftArray = [];
    let rightArray = [];

    for (let i = 1; i < array.length; i++) {
      if (array[i] <= pivot) {
        leftArray.push(array[i]);
      } else {
        rightArray.push(array[i]);
      }
    }

    return [...quicksort(leftArray), pivot, ...quicksort(rightArray)];
  }
}

module.exports = quicksort;
