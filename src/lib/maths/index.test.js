import { sum, sub } from './index';

test('sum', () => {
  expect(sum(3, 3)).toBe(6);
  expect(sum(-5, 10)).toBe(5);
});

test('sub', () => {
  expect(sub(3, 3)).toBe(0);
  expect(sub(-5, 10)).toBe(-15);
});
