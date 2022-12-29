function binarySearch(sortedArray, target) {
  let low = 0;
  let high = sortedArray.length - 1;

  while (low <= high) {
    let middle = Math.floor((low + high) / 2);
    let guess = sortedArray[middle];

    if (guess === target) {
      return middle;
    } else if (guess < target) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }

  return null;
}

module.exports = binarySearch;
