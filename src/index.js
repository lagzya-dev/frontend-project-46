import fs from 'fs';
import path from 'path';
import _ from 'lodash';

const getPath = (way) => (way.includes('__fixtures__') ? path.resolve(process.cwd(), way) : path.resolve(process.cwd(), `__fixtures__/${way}`));

export default function gendiff(file1, file2, option = 'stylish') {
  const filepath1 = getPath(file1);
  const filepath2 = getPath(file2);
  const json1 = JSON.parse(fs.readFileSync(filepath1, 'utf-8'));
  const json2 = JSON.parse(fs.readFileSync(filepath2, 'utf-8'));
  return parser(json1, json2);
}

function parser(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const allKeys = _.union(keys1, keys2);
  const sortKeys = allKeys.sort();
  const result = [];
  /* eslint-disable-next-line */
  for (const key of sortKeys) {
    if (!Object.hasOwn(obj1, key)) {
      result.push({ key, value: obj2[key], status: '+' });
    } else if (!Object.hasOwn(obj2, key)) {
      result.push({ key, value: obj1[key], status: '-' });
    } else if (obj1[key] !== obj2[key]) {
      result.push({ key, value: obj1[key], status: '-' });
      result.push({ key, value: obj2[key], status: '+' });
    } else {
      result.push({ key, value: obj1[key], status: ' ' });
    }
  }
  return formater(result);
}

function formater(obj) {
  let result = '{\n';
  for (let i = 0; i < obj.length; i += 1) {
    result += `    ${obj[i].status} ${obj[i].key}: ${obj[i].value}\n`;
  }
  return `${result}}`;
}
