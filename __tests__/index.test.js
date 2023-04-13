import { test, expect } from '@jest/globals';
import genDiff from '../src/index.js';
import { stylish, plain, json } from '../__fixtures__/result.js';
import { getPath } from '../src/utils.js';

test('Tests', () => {
  const file1 = getPath('file1.json');
  const file2 = getPath('file2.json');

  const file3 = getPath('file1.yaml');
  const file4 = getPath('file2.yaml');

  const file5 = getPath('file1.yml');
  const file6 = getPath('file2.yml');
  const stylishTry = genDiff(file1, file2, 'stylish').trim();
  expect(stylishTry).toEqual(stylish);
  const plainTry = genDiff(file3, file4, 'plain').trim();
  expect(plainTry).toEqual(plain);
  const jsonTry = genDiff(file5, file6, 'json').trim();
  expect(jsonTry).toEqual(json);
});
