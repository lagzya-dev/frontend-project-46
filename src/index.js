import parse from './parser.js';
import { getFormat, getPath, readFile } from './utils.js';
import buildTree from './buildTree.js';
import formatter from './formatters/index.js';

export default function gendiff(file1, file2, option = 'stylish') {
  const filepath1 = getPath(file1);
  const filepath2 = getPath(file2);
  const obj1 = parse(readFile(filepath1), getFormat(file1));
  const obj2 = parse(readFile(filepath2), getFormat(file2));
  const tree = buildTree(obj1, obj2);
  return formatter(tree, option);
}
