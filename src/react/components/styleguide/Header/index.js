import React, { PureComponent } from 'react'
import { View, Image, Text } from 'react-native'
import styles from './styles'

function upperFirst(name){
  return name[0].toUpperCase() + name.slice(1, name.length)
}

class Header extends PureComponent {
  render(){
    const { backgroundColor, title } = this.props
    const containerStyles = [styles.container]

    if(backgroundColor){
      containerStyles.push({backgroundColor})
    }

    return (
      <View style={containerStyles}>
        <Image style={styles.icon} source={require('../../../../../../../src/styleguide/images/logo-text-icon.png')}/>
        <Text style={styles.title}>{upperFirst(title)}</Text>
      </View>
    )
  }
}

export default Header