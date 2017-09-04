import React, { Component } from 'react'
import { ScrollView, View, Text } from 'react-native'
import styles from './styles'
import dropInConfig from '../../../temp/dropin.config'
import globalConfig from '../../../temp/global.config.js'

import Row from '../styleguide/Row'
import Header from '../styleguide/Header'

class Previewer extends Component {
  render () {
    const Comp = require('../../../temp/dropin.component').default
    const presets = require('../../../temp/dropin.presets').default
    const config = require('../../../temp/dropin.config').default

    const items = Object.keys(presets).map(name => (
      <Row 
        key={name}
        presetName={name}
        componentName={config.name}>
        <Comp preset={name}/>
      </Row>
    ))

    return (
      <ScrollView style={{ flex: 1 }} contentContainerStyle={ styles.container }>
        <Header 
          backgroundColor={globalConfig.styleguide.primaryColor}
          icon={globalConfig.styleguide.icon}
          title={config.name}/>
        {items}
      </ScrollView>
    )
  }
}

export default Previewer
