import assert from 'node:assert/strict';
import test from 'node:test';
import { add } from './demo.mjs';

test('the canary demo is executable', () => {
  assert.equal(add(20, 22), 42);
});
