import _ from 'lodash';

export default function buildTree(obj1, obj2) {
  const sortKeys = _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)));
  const result = sortKeys.map((key) => {
    if (!Object.hasOwn(obj2, key)) {
      return { key, value: obj1[key], status: 'delete' };
    }
    if (!Object.hasOwn(obj1, key)) {
      return { key, value: obj2[key], status: 'add' };
    }
    if (_.isPlainObject(obj1[key]) && _.isPlainObject(obj2[key])) {
      return { key, children: buildTree(obj1[key], obj2[key]), status: 'tree' };
    }
    if (!_.isEqual(obj1[key], obj2[key])) {
      return {
        key,
        value: obj1[key],
        value2: obj2[key],
        status: 'changed',
      };
    }
    return { key, value: obj1[key], status: 'unchanged' };
  });
  return result;
}
