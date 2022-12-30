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

module.exports = sumArray;
