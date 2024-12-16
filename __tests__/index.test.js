// @ts-check

import { test } from 'node:test';
import assert from 'assert/strict';
import * as funcs from '../index.js';

test('step1', () => {
  assert.strictEqual(funcs.getSquare(1), 1);
  assert.strictEqual(funcs.getSquare(3), 9);
  assert.strictEqual(funcs.getSquare(-3), 9);
});

test('step2', () => {
  assert.strictEqual(funcs.isEven(2), true);
  assert.strictEqual(funcs.isEven(1111), false);
  assert.strictEqual(funcs.isEven(-1), false);
});

test('step3', () => {
  assert.strictEqual(funcs.castNumber('1'), 1);
  assert.strictEqual(funcs.castNumber(2), 2);
  assert.strictEqual(funcs.castNumber(false), 0);
  assert.strictEqual(funcs.castNumber(''), 0);
  assert.strictEqual(funcs.castNumber('Hexlet'), 'given value is not convertible');
});

test('step4', () => {
  assert.strictEqual(funcs.countVowels('Hexlet'), 2);
  assert.strictEqual(funcs.countVowels('HeexlEEt'), 4);
  assert.strictEqual(funcs.countVowels(''), 0);
  assert.strictEqual(funcs.countVowels('AAAAeejfjfjfijijotigdigfdjkKJHfdskjfhODSFu'), 13);
});
