import React, { Component } from 'react'

const paths = {
  config: path.join(process.cwd(), 'node_modules/react-native-box-cli/src/temp/config.js'),
  component: path.join(process.cwd(), 'node_modules/react-native-box-cli/src/temp/component.js'),
}

const config = require(paths.config)
const component = require(paths.component)

class Portal extends Component {
  render (){

    if (config.type && config.type !== 'clear') {
      return React.createElement(component)
    }

    return this.props.children
  }
}

export default Portal
