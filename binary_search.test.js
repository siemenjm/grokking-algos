const binarySearch = require('./binary_search');

test('finds target value with even amount of inputs', () => {
  expect(binarySearch([1, 2, 3, 4], 2)).toBe(1);
});
