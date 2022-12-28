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

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0));
