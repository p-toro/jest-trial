const getTriangle = require('./getTriangle');

test('getTriangle base 3 * height 2 / 2 equal 3', () => {
  expect(getTriangle(3, 2)).toBe(3);
});

