test('array indexOf test', () => {
  const values = ['banana', 'apple', 'orange', 'apple'];
  expect(values.indexOf('apple')).toBe(1);
  expect(values.lastIndexOf('apple')).toBe(3);
});
