import React, { Component } from 'react'
import { View, Text } from 'react-native'
import config from '../temp/config'

class Previewer extends Component {
  render () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Previewer type:{config.type} name:{config.name || 'none'}</Text>
      </View>
    )
  }
}

export default Previewer
