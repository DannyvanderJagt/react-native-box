import React, { Component } from 'react'
import config from '../temp/config'
import component from '../temp/component'

class Portal extends Component {
  render (){

    if (config.type && config.type !== 'clear') {
      return React.createElement(component)
    }

    return this.props.children
  }
}

export default Portal
