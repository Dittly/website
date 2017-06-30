import PropTypes from 'prop-types'
import React from 'react'
import Header from '../header'
import { logPageView } from '../../utils/ga'

class MainLayout extends React.Component {
  componentDidMount() {
    logPageView()
  }
  render() {
    const { children } = this.props
    return (
      <div>
        <Header />
        {children}
      </div>
    )
  }
}

MainLayout.propTypes = {
  children: PropTypes.node
}

export default MainLayout
