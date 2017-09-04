import React, { Component } from 'react'
import Previewer from './Previewer'
import dropInConfig from '../../temp/dropin.config'
import dropInComponent from '../../temp/dropin.component'

class Portal extends Component {
  render (){
    const { type } = dropInConfig 

    if (type == 'view') {
      return React.createElement(dropInComponent)
    }

    if(type === 'component'){
      return React.createElement(Previewer)
    }

    return this.props.children
  }
}

export default Portal
