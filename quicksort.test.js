const quicksort = require('./quicksort');

test('sort array of positive values', () => {
  expect(quicksort([2, 1, 4, 5, 3])).toStrictEqual([1, 2, 3, 4, 5]);
});

test('sort array of negative values', () => {
  expect(quicksort([-2, -1, -4, -5, -3])).toStrictEqual([-5, -4, -3, -2, -1]);
});

test('sort array of positive and negative values', () => {
  expect(quicksort([-2, 1, 4, -5, 3])).toStrictEqual([-5, -2, 1, 3, 4]);
});

test('sort empty array', () => {
  expect(quicksort([])).toStrictEqual([]);
});

test('sort array containing duplicate values', () => {
  expect(quicksort([2, 2, -1, 0, 0])).toStrictEqual([-1, 0, 0, 2, 2]);
});
