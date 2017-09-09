/* eslint-env jest */
jest.mock('cookie')
jest.mock('../../../utils/routes')

import cookie from 'cookie'
import {mount} from 'enzyme'

import withAuth from '../'

const DummyComponent = () => <div /> // eslint-disable-line react/prop-types

describe('components/with-auth', () => {
  it('provides required properties to wrapped components', () => {
    const WrappedComponent = withAuth(DummyComponent)
    const wrapper = mount(<WrappedComponent serverState={{}} />)
    const dummyComponentRendered = wrapper.find(DummyComponent)

    expect(dummyComponentRendered.prop('client')).toBeDefined()
    expect(typeof dummyComponentRendered.prop('signOut')).toBe('function')
  })

  it('signs out correctly', () => {
    const WrappedComponent = withAuth(DummyComponent)
    const wrapper = mount(<WrappedComponent serverState={{}} />)
    const dummyComponentRendered = wrapper.find(DummyComponent)

    dummyComponentRendered.prop('signOut')()
    expect(cookie.serialize).toHaveBeenCalledWith('token', '', {
      maxAge: -1
    })
  })
})
