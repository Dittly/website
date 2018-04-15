/* eslint-env jest */
jest.mock('cookie');
jest.mock('../../../utils/ga');
jest.mock('../../../utils/routes');

import cookie from 'cookie';
import { mount } from 'enzyme';

import {
  Login,
  _mapApolloDataToProps,
  _signInSuccess,
  _signInError
} from '/pages/auth/login';
import MainLayout from '/components/layouts/main';
import LoginContent from '/src/auth/login';

describe('pages/auth/login', () => {
  const defaultProps = {
    signin: jest.fn()
  };

  it(`verifies ${Login.name} renders correctly`, () => {
    const wrapper = mount(<Login {...defaultProps} />);
    expect(wrapper.length).toBe(1);
  });

  it(`verifies the MainLayout renders correctly`, () => {
    const wrapper = mount(<Login {...defaultProps} />);
    expect(wrapper.find(MainLayout).length).toBe(1);
  });

  it(`verifies the LoginContent renders correctly`, () => {
    const wrapper = mount(<Login {...defaultProps} />);
    expect(wrapper.find(LoginContent).length).toBe(1);
  });

  it(`correctly maps Apollo data to props`, () => {
    const apolloData = {
      signinWithEmail: jest.fn(),
      ownProps: {}
    };

    const mappedProps = _mapApolloDataToProps(apolloData);

    expect(mappedProps).toEqual({
      signin: expect.any(Function)
    });
  });

  it(`processes a successful sign in`, () => {
    const client = {
      resetStore: jest.fn().mockReturnValue(Promise.resolve())
    };

    const signInResponse = {
      data: {
        signinUser: {
          token: 'test-token'
        }
      }
    };

    _signInSuccess(client)(signInResponse);

    expect(cookie.serialize).toHaveBeenCalledWith(
      'token',
      signInResponse.data.signinUser.token,
      {
        maxAge: 30 * 24 * 60 * 60 // 30 days
      }
    );
    expect(client.resetStore).toHaveBeenCalledTimes(1);
  });

  it(`processes an unsuccessful sign in`, () => {
    const originalConsoleError = console.error;

    try {
      console.error = jest.fn();

      const error = 'An error message';
      _signInError(error);

      expect(console.error).toHaveBeenCalledWith(error);
    } finally {
      console.error = originalConsoleError;
    }
  });
});
