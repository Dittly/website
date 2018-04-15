/* eslint-env jest */
import routesDefinitions from '../routes-definitions';

describe('utils/routes/routes-definitions', () => {
  it('contains all routes', () => {
    // This makes sure adding, changing or removing a route
    // doesn't happen accidentally.
    expect(routesDefinitions).toMatchSnapshot();
  });
});
