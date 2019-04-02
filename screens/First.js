import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, Button } from 'react-native'
import { createStackNavigator, createAppContainer, StackNavigator } from 'react-navigation'

import App from '../App'

export default class First extends Component {
  static navigationOptions = {
    header: null,
    // title: 'Registration App',
    // headerStyle: {
    //   backgroundColor: '#36485f',
    // },
  }

  render() {
    return (
      <View>
        <Text> Home </Text>
        <Button 
        onPress={() => this.props.navigation.navigate('Signup')} title='Other screen' />
      </View>
    )
  }
}