import _ from 'lodash';

const replacer = ' ';
const spacesCount = 4;

export default function stylish(tree) {
  const getSpaces = (depth, space = 0) => {
    const indentSize = depth * spacesCount;
    return replacer.repeat(indentSize - space);
  };
  const stringify = (data, depth) => {
    if (!_.isPlainObject(data)) {
      return String(data);
    }
    const lines = Object.entries(data).map(
      ([key, value]) => `${getSpaces(depth + 1)}${key}: ${stringify(value, depth + 1)}`,
    );
    return `{\n${lines.join('\n')}\n${getSpaces(depth)}}`;
  };
  const iter = (nodes, depth = 1) => nodes.map((node) => {
    switch (node.status) {
      case 'add':
        return `${getSpaces(depth, 2)}+ ${node.key}: ${stringify(node.value, depth)}`;
      case 'delete':
        return `${getSpaces(depth, 2)}- ${node.key}: ${stringify(node.value, depth)}`;
      case 'changed':
        return `${getSpaces(depth, 2)}- ${node.key}: ${stringify(node.value, depth)}\n${getSpaces(depth, 2)}+ ${node.key}: ${stringify(node.value2, depth)}`;
      case 'unchanged':
        return `${getSpaces(depth)}${node.key}: ${stringify(node.value, depth)}`;
      case 'tree':
        return `${getSpaces(depth)}${node.key}: {\n${iter(node.children, depth + 1).join('\n')}\n${getSpaces(depth)}}`;
      default:
        throw new Error(`Unknown type of node '${node.type}'.`);
    }
  });
  const result = iter(tree);
  return `{\n${result.join('\n')}\n}`;
}
