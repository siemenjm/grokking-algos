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

module.exports = { sumArray, listCount, maximumNumber };
