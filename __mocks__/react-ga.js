import noop from '../utils/noop'

const ReactGA = jest.genMockFromModule('react-ga')

ReactGA.initialize = noop
ReactGA.set = noop
ReactGA.pageview = noop
ReactGA.event = noop
ReactGA.exception = noop

export default ReactGA
