import React, { Component } from 'react'
import { ScrollView, View, Text } from 'react-native'
import styles from './styles'

class Previewer extends Component {
  componentDidMount(){
    console.log('[Previewer] Did mount')
  }
  componentWillReceiveProps = (props) => {
    console.log('props', props)
  }
  render () {
    const Comp = require('../../../temp/component').default
    const presets = require('../../../temp/presets').default
    const config = require('../../../temp/config').default

    const items = Object.keys(presets).map(name => (
      <View key={name} style={styles.row}>
        <Comp preset={name}/>
      </View>
    ))

    return (
      <ScrollView style={{ flex: 1 }} contentContainerStyle={ styles.container }>
        <Text>Previewer type:{config.type} name:{config.name || 'none'}</Text>
        {items}
      </ScrollView>
    )
  }
}

export default Previewer
