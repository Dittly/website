import React from 'react'
import { initGA, logPageView } from '../../utils/ga'

export default class MainLayout extends React.Component {
  componentDidMount() {
    logPageView()
  }
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
