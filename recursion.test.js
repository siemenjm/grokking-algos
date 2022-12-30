const { sumArray, listCount } = require('./recursion');

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
