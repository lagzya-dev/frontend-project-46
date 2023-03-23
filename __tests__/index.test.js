import { test, expect } from '@jest/globals';
import path from 'path';
import genDiff from '../src/index.js';
import { json } from '../__fixtures__/result.js';

const getPath = (way) => (way.includes('__fixtures__') ? path.resolve(process.cwd(), way) : path.resolve(process.cwd(), `__fixtures__/${way}`));

test('test', () => {
  const file1 = getPath('file1.json');
  const file2 = getPath('file2.json');
  const readDiff = genDiff(file1, file2).trim();
  const result = json;
  expect(readDiff).toEqual(result);
});
