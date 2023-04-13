export const stylish = `{
    common: {
      + follow: false
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: null
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
        setting6: {
            doge: {
              - wow: 
              + wow: so much
            }
            key: value
          + ops: vops
        }
    }
    group1: {
      - baz: bas
      + baz: bars
        foo: bar
      - nest: {
            key: value
        }
      + nest: str
    }
  - group2: {
        abc: 12345
        deep: {
            id: 45
        }
    }
  + group3: {
        deep: {
            id: {
                number: 45
            }
        }
        fee: 100500
    }
}`;

export const plain = `Property 'common.follow' was added with value: false
Property 'common.setting2' was removed
Property 'common.setting3' was updated. From true to null
Property 'common.setting4' was added with value: 'blah blah'
Property 'common.setting5' was added with value: [complex value]
Property 'common.setting6.doge.wow' was updated. From '' to 'so much'
Property 'common.setting6.ops' was added with value: 'vops'
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group1.nest' was updated. From [complex value] to 'str'
Property 'group2' was removed
Property 'group3' was added with value: [complex value]`;

export const json = '[{"key":"common","children":[{"key":"follow","value":false,"status":"add"},{"key":"setting1","value":"Value 1","status":"unchanged"},{"key":"setting2","value":200,"status":"delete"},{"key":"setting3","value":true,"value2":null,"status":"changed"},{"key":"setting4","value":"blah blah","status":"add"},{"key":"setting5","value":{"key5":"value5"},"status":"add"},{"key":"setting6","children":[{"key":"doge","children":[{"key":"wow","value":"","value2":"so much","status":"changed"}],"status":"tree"},{"key":"key","value":"value","status":"unchanged"},{"key":"ops","value":"vops","status":"add"}],"status":"tree"}],"status":"tree"},{"key":"group1","children":[{"key":"baz","value":"bas","value2":"bars","status":"changed"},{"key":"foo","value":"bar","status":"unchanged"},{"key":"nest","value":{"key":"value"},"value2":"str","status":"changed"}],"status":"tree"},{"key":"group2","value":{"abc":12345,"deep":{"id":45}},"status":"delete"},{"key":"group3","value":{"deep":{"id":{"number":45}},"fee":100500},"status":"add"}]';
