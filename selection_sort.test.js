const sortByLargest = require('./selection_sort');

test('sort ascending ordered array', () => {
  expect(sortByLargest([1, 2, 3, 4, 5])).toStrictEqual([5, 4, 3, 2, 1]);
});

test('sort descending ordered array', () => {
  expect(sortByLargest([5, 4, 3, 2, 1])).toStrictEqual([5, 4, 3, 2, 1]);
});

test('sort randomly ordered array', () => {
  expect(sortByLargest([4, 3, 12, 0, -18])).toStrictEqual([12, 4, 3, 0, -18]);
});

test('return empty array if input is empty array', () => {
  expect(sortByLargest([])).toStrictEqual([]);
});
