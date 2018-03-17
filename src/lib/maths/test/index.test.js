import test from 'ava';
import { sum, sub } from '../index';

test('sum', (t) => {
  t.plan(2);

  t.is(sum(3, 3), 6, 'should return 6');
  t.is(sum(-5, 10), 5, 'should return 5');
});

test('sub', (t) => {
  t.plan(2);

  t.is(sub(3, 3), 0, 'should return 0');
  t.is(sub(-5, 10), -15, 'should return -15');
});
