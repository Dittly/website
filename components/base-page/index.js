import React from 'react'

import {logPageView} from '../../utils/ga'

class BasePageComponent extends React.Component {
  componentDidMount() {
    logPageView()
  }
}

export default BasePageComponent
