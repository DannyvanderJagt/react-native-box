import React, { Component } from 'react'
import dropInConfig from '../../temp/config'
import boxConfig from ''

class Portal extends Component {
  render (){
    const { type, name } = dropInConfig 

    if (type == 'view') {
      const view = require(boxConfig.views.routes[name])
      return React.createElement(view)
    }

    if(type === 'component'){
      return React.createElement(Previewer)
    }

    return this.props.children
  }
}

export default Portal
