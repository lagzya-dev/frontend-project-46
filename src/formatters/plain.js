import _ from 'lodash';

export default function plain(tree) {
  const generatePath = (node, path) => {
    if (path !== '') {
      return `${path}.${node.key}`;
    }
    return String(node.key);
  };
  const stringify = (data) => {
    if (_.isObject(data) && data !== null) {
      return '[complex value]';
    }
    if (_.isString(data)) {
      return `'${data}'`;
    }
    return String(data);
  };
  const iter = (nodes, path) => nodes.filter((p) => p.status !== 'unchanged').map((node) => {
    const currentPatch = generatePath(node, path);
    switch (node.status) {
      case 'add':
        return `Property '${currentPatch}' was added with value: ${stringify(node.value)}`;
      case 'delete':
        return `Property '${currentPatch}' was removed`;
      case 'changed':
        return `Property '${currentPatch}' was updated. From ${stringify(node.value)} to ${stringify(node.value2)}`;
      case 'tree':
        return iter(node.children, currentPatch).join('\n');
      default:
        throw new Error(`Unknown type of node '${node.type}'.`);
    }
  });
  const result = iter(tree, '');
  return result.join('\n');
}
