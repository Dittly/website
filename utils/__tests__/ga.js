/* eslint-env jest */
/* global jsdom, process */
jest.mock('react-ga')

import ReactGA from 'react-ga'
import * as ga from '../ga'

const gaTrackingID = 'UA-notliveyet-1'

Object.defineProperty(process.env, 'GA_TRACKING_ID', {
  writable: true,
  value: gaTrackingID
})

describe('utils/ga', () => {
  beforeEach(() => {
    ga._resetInitialized()
  })
  describe('initGA()', () => {
    it('initializes correctly', () => {
      ga.initGA()
      expect(ReactGA.initialize).toBeCalledWith(gaTrackingID)
    })
  })

  describe('logPageView()', () => {
    beforeEach(() => {
      ReactGA.set.mockClear()
      ReactGA.pageview.mockClear()
    })

    it('initializes correctly', () => {
      ga.logPageView()
      expect(ReactGA.initialize).toBeCalledWith(gaTrackingID)
    })

    it('does not initializes if already initialized', () => {
      // Manually initialize GA, then reset initialize mock
      ga.initGA()
      expect(ReactGA.initialize).toBeCalledWith(gaTrackingID)
      ReactGA.initialize.mockClear()

      ga.logPageView()
      expect(ReactGA.initialize).not.toBeCalled()
    })

    it('fires the pageview correctly', () => {
      jsdom.reconfigure({
        url: 'https://test-url.com/test-path'
      })
      ga.logPageView()
      expect(ReactGA.set).toBeCalledWith({page: '/test-path'})
      expect(ReactGA.pageview).toBeCalledWith('/test-path')
    })
  })

  describe('logEvent()', () => {
    beforeEach(() => {
      ReactGA.event.mockClear()
    })

    it('initializes correctly', () => {
      ga.logEvent()
      expect(ReactGA.initialize).toBeCalledWith(gaTrackingID)
    })

    it('does not initializes if already initialized', () => {
      // Manually initialize GA, then reset initialize mock
      ga.initGA()
      expect(ReactGA.initialize).toBeCalledWith(gaTrackingID)
      ReactGA.initialize.mockClear()

      ga.logEvent()
      expect(ReactGA.initialize).not.toBeCalled()
    })

    it('fires the event correctly', () => {
      const category = 'test-category'
      const action = 'test-action'
      ga.logEvent(category, action)
      expect(ReactGA.event).toBeCalledWith({category, action})
    })

    it('does not fire the event if no category is available', () => {
      const category = ''
      const action = 'test-action'
      ga.logEvent(category, action)
      expect(ReactGA.event).not.toBeCalledWith()
    })

    it('does not fire the event if no action is available', () => {
      const category = 'test-category'
      const action = ''
      ga.logEvent(category, action)
      expect(ReactGA.event).not.toBeCalledWith()
    })
  })

  describe('logException()', () => {
    beforeEach(() => {
      ReactGA.exception.mockClear()
    })

    it('initializes correctly', () => {
      ga.logException()
      expect(ReactGA.initialize).toBeCalledWith(gaTrackingID)
    })

    it('does not initializes if already initialized', () => {
      // Manually initialize GA, then reset initialize mock
      ga.initGA()
      expect(ReactGA.initialize).toBeCalledWith(gaTrackingID)
      ReactGA.initialize.mockClear()

      ga.logException()
      expect(ReactGA.initialize).not.toBeCalled()
    })

    it('fires the exception correctly', () => {
      const description = 'test-description'
      ga.logException(description)
      expect(ReactGA.exception).toBeCalledWith({description, fatal: false})
    })

    it('fires the exception correctly with fatal set to true', () => {
      const description = 'test-description'
      ga.logException(description, true)
      expect(ReactGA.exception).toBeCalledWith({description, fatal: true})
    })

    it('does not fire the exception if no description is available', () => {
      ga.logException()
      expect(ReactGA.exception).not.toBeCalled()
    })
  })
})
