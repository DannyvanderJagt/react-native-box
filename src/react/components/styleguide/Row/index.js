import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

export default class Row extends PureComponent {
  render(){

    const { children, componentName, presetName } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          { children }
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.presetName}>Preset: {presetName}</Text>
        </View>
      </View>
    )
  }
}