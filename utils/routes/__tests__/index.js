/* eslint-env jest */
import { nextRoutes } from '../';
import routesDefinitions from '../routes-definitions';

describe('utils/routes/index', () => {
  it('contains all routes', () => {
    const totalNumberOfRoutesDefined = Object.values(routesDefinitions).reduce(
      (total, routeDefinition) =>
        total +
        Object.values(routeDefinition).filter((route) => route.name).length, // eslint-disable-line max-nested-callbacks
      0
    );
    expect(nextRoutes.routes.length).toBe(totalNumberOfRoutesDefined);
  });
});
