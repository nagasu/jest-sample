test('string indexOf test', () => {
  expect('abcd'.indexOf('a')).toBe(0);
  expect('abcd'.indexOf('z')).toBe(-1);
  expect('aabcd'.indexOf('a', 1)).toBe(1);
  expect('abcd'.lastIndexOf('d')).toBe(3);
});
