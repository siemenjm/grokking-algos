// Selection sort
// For example, find the largest value in an array
// Loop through the array, tracking which index has the largest value
// Store that value at the end of an (empty if first time through) array
// Repeat until original array is empty

function sortByLargest(array) {
  let sortedArray = [];
  while (array.length > 0) {
    let largestIndex = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[largestIndex]) {
        largestIndex = i;
      }
    }

    sortedArray.push(array.splice(largestIndex, 1)[0]);
  }

  return sortedArray;
}

module.exports = sortByLargest;
