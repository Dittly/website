/* eslint-env jest */
import { createMockClient } from '../test-helpers';

describe('apollo/test-helpers', () => {
  it('successfully create an Apollo mock client', () => {
    const client = createMockClient();
    expect(client).toBeDefined();
    expect(client.link).toBeDefined();
    expect(client.cache).toBeDefined();
  });
});
