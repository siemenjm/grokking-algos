const {
  sumArray,
  listCount,
  maximumNumber,
  binarySearch,
} = require('./recursion');

test('sum values in array', () => {
  expect(sumArray([-2, 0, 1, 2, 3, 4, 5])).toBe(13);
});

test('sum of empty array is 0', () => {
  expect(sumArray([])).toBe(0);
});

test('count total items in list', () => {
  expect(listCount([1, 2, 3, 4, 5])).toBe(5);
});

test('count total items in empty list', () => {
  expect(listCount([])).toBe(0);
});

test('find the maximum number in an array', () => {
  expect(maximumNumber([1, 2, 5, 13, -4])).toBe(13);
});

test('find the maximum number in an array of length 1', () => {
  expect(maximumNumber([-4])).toBe(-4);
});

test('find a target number in a sorted, ascending array with odd amount of values', () => {
  expect(binarySearch([0, 2, 3, 5, 8], 2)).toBe(1);
});

test('find a target number in a sorted, ascending array with even amount of values', () => {
  expect(binarySearch([0, 2, 3, 5], 3)).toBe(2);
});

test('return 0 when target is first in sorted array', () => {
  expect(binarySearch([0, 2, 3, 5, 8], 0)).toBe(0);
});

test('return sortedArray.length - 1 when target is last in sorted array', () => {
  expect(binarySearch([0, 2, 3, 5, 8], 8)).toBe(4);
});
