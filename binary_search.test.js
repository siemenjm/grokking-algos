const binarySearch = require('./binary_search');

test('finds target value with even amount of inputs', () => {
  expect(binarySearch([1, 2, 3, 4], 2)).toBe(1);
});

test('finds target value with odd amount of inputs', () => {
  expect(binarySearch([1, 2, 3, 4, 5], 2)).toBe(1);
});

test('finds target value with negative values', () => {
  expect(binarySearch([-3, -2, -1, 0, 1], -2)).toBe(1);
});

test('finds target value when located first in input array', () => {
  expect(binarySearch([-3, -2, -1, 0, 1], -3)).toBe(0);
});

test('finds target value when located last in input array', () => {
  expect(binarySearch([-3, -2, -1, 0, 1], 1)).toBe(4);
});

test('returns null if target is larger than largest input value', () => {
  expect(binarySearch([-3, -2, -1, 0, 1], 2)).toBe(null);
});

test('returns null if target is less than smallest input value', () => {
  expect(binarySearch([-3, -2, -1, 0, 1], -4)).toBe(null);
});
