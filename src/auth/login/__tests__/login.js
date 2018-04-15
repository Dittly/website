/* eslint-env jest */
jest.mock('../../../../utils/routes');
import { mount } from 'enzyme';

import Login from '../';
import { Link } from '/utils/routes';
import { authRoutes } from '/utils/routes/routes-definitions';

describe('src/auth/login', () => {
  it(`verifies ${Login.name} renders correctly`, () => {
    const props = {
      signin: jest.fn()
    };
    const wrapper = mount(<Login {...props} />);
    expect(wrapper.length).toBe(1);
  });

  it(`verifies the login form submits`, () => {
    const props = {
      signin: jest.fn()
    };
    const wrapper = mount(<Login {...props} />);
    wrapper.find('form').simulate('submit');
    expect(props.signin).toHaveBeenCalled();
  });

  it(`verifies the sign up link renders correctly`, () => {
    const props = {
      signin: jest.fn()
    };
    const wrapper = mount(<Login {...props} />);
    wrapper.find('form').simulate('submit');
    expect(wrapper.find(Link).prop('prefetch')).toBe(true);
    expect(wrapper.find(Link).prop('route')).toBe(authRoutes.signup.name);
  });
});
