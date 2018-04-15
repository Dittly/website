/* eslint-env jest */
import { deepClone } from '../helpers';

describe('utils/helpers', () => {
  it('deep clones an object', () => {
    const object1 = {
      topLevel: 'A',
      nestedObj: {
        nestedLevel: 'AA'
      }
    };
    const object2 = deepClone(object1);

    // This only impacts object1
    object1.topLevel = 'B';
    object1.nestedObj.nestedLevel = 'BB';

    expect(object2).toEqual({
      topLevel: 'A',
      nestedObj: {
        nestedLevel: 'AA'
      }
    });
  });
});
