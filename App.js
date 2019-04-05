import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, Button } from 'react-native'
import { createStackNavigator, createAppContainer, StackNavigator } from 'react-navigation'

import First from './screens/First';
import After from './screens/After';
import Memberarea from './screens/Memberarea';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: First
    },
    Other: {
      screen: After
    },
    Login: {
      screen: Memberarea
    },
  },
  {
    initialRouteName: 'Home'
  }
);

class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

export default createAppContainer(RootStack);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
})
