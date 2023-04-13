import { test, expect } from '@jest/globals';
import path from 'path';
import genDiff from '../src/index.js';
import { stylish, plain, json } from '../__fixtures__/result.js';

const getPath = (way) => (way.includes('__fixtures__') ? path.resolve(process.cwd(), way) : path.resolve(process.cwd(), `__fixtures__/${way}`));

test('Test JSON', () => {
  const file1 = getPath('file1.json');
  const file2 = getPath('file2.json');
  const stylishTry = genDiff(file1, file2, 'stylish').trim();
  expect(stylishTry).toEqual(stylish);
  const plainTry = genDiff(file1, file2, 'plain').trim();
  expect(plainTry).toEqual(plain);
  const jsonTry = genDiff(file1, file2, 'json').trim();
  expect(jsonTry).toEqual(json);
});
test('Test YAML', () => {
  const file1 = getPath('file1.yaml');
  const file2 = getPath('file2.yaml');
  const stylishTry = genDiff(file1, file2, 'stylish').trim();
  expect(stylishTry).toEqual(stylish);
  const plainTry = genDiff(file1, file2, 'plain').trim();
  expect(plainTry).toEqual(plain);
  const jsonTry = genDiff(file1, file2, 'json').trim();
  expect(jsonTry).toEqual(json);
});
test('Test YML', () => {
  const file1 = getPath('file1.yml');
  const file2 = getPath('file2.yml');
  const stylishTry = genDiff(file1, file2, 'stylish').trim();
  expect(stylishTry).toEqual(stylish);
  const plainTry = genDiff(file1, file2, 'plain').trim();
  expect(plainTry).toEqual(plain);
  const jsonTry = genDiff(file1, file2, 'json').trim();
  expect(jsonTry).toEqual(json);
});
