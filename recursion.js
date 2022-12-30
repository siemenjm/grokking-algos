// Recursion
// base case and recursive case
// figure out what the base case is
// figure out how to get to the base case using the recursive case
// divide and conquer

function sumArray(array) {
  // base case
  if (array.length === 0) {
    return 0;
  } else {
    //recursive case
    return array[0] + sumArray(array.slice(1));
  }
}

function listCount(list) {
  if (list.length === 0) {
    return 0;
  } else {
    return 1 + listCount(list.slice(1));
  }
}

function maximumNumber(array) {
  if (array.length === 1) {
    return array[0];
  } else if (array[0] > array[1]) {
    array.splice(1, 1);
    return maximumNumber(array);
  } else {
    return maximumNumber(array.slice(1));
  }
}

function binarySearch(sortedArray, target) {
  const middleIndex = Math.floor(sortedArray.length / 2);
  const guess = sortedArray[middleIndex];

  if (guess === target) {
    return middleIndex;
  } else if (guess > target) {
    return binarySearch(sortedArray.slice(0, middleIndex), target);
  } else if (guess < target) {
    return (
      1 + middleIndex + binarySearch(sortedArray.slice(middleIndex + 1), target)
    );
  }
}

module.exports = { sumArray, listCount, maximumNumber, binarySearch };
