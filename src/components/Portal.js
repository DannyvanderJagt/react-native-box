import React, { Component } from 'react'
import config from '../temp/config'
import component from '../temp/component'
import Previewer from './Previewer'

class Portal extends Component {
  render (){

    if (config.type == 'view') {
      return React.createElement(component)
    }

    if(config.type === 'component'){
      return React.createElement(Previewer)
    }

    return this.props.children
  }
}

export default Portal
