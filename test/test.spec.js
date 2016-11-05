
import assert from 'assert';
import { test } from './test';

describe('A test', () => {
  it(`should not fail`, async () => {
    await test()
  });
});