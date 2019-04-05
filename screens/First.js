import React, { Component } from 'react'
import {Platform, ActivityIndicator, StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity, Image, AsyncStorage} from 'react-native';
import { createStackNavigator, createAppContainer, StackNavigator } from 'react-navigation'

import App from '../App'

export default class First extends Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props){
    super(props)
    this.state = {
      results: [],
      username: '', 
      password: '',
    }
  }

  render() {
    return (
      <View style={styles.regform}>
           <Image source={require('../images/Alien.png')} style={{ width: 100, height: 100, alignSelf: 'center', marginTop: 30, tintColor: 'white' }} />
  
          <Text style={styles.header}> Sing Up </Text>
  
          <TextInput
            style={styles.textinput}
            placeholder='Username'
            underlineColorAndroid={'transparent'}
            placeholderTextColor='#ffd'
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
          />
  
          <TextInput
            style={styles.textinput}
            placeholder='Password'
            secureTextEntry={true}
            underlineColorAndroid={'transparent'}
            placeholderTextColor='#ffd'
            onChangeText = {(password) => this.setState({password})}
            value={this.state.password}
          />
  
          <TouchableOpacity style={styles.button} onPress={this.checkData}>
            <Text style={styles.btntext}> Login </Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Other')}>
            <Text style={styles.btntext}> Show Me All </Text>
          </TouchableOpacity>
  
          </View>
    )
  }

checkData = () => {
  
// alert(this.state.username)

fetch('http://10.0.2.2:3000', {
    method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      })  
    })
  
    .then((response) => response.json())
    .then((res) => {
  
      if(res.sucess === true){
        var username = res.message;

        AsyncStorage.setItem('username', username)

        this.props.navigation.navigate('Login')
        
        } else {
        alert(res.message)
      }
    })
    .done()
  }
}

  
const styles = StyleSheet.create({
  regform: {
    alignSelf: 'stretch',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
    paddingLeft: 60,
    paddingRight: 60,
  },
  header: {
    fontSize: 24,
    alignSelf: 'center',
    color: '#ffd',
    paddingTop: 20,
    paddingBottom: 30,
    marginTop: 5,
    marginBottom: 40,
    // borderBottomColor: '#ffd',
    borderBottomWidth: 1,
  },
  textinput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: '#ffd',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffd',
    marginTop: 30,
  },
  btntext: {
    color: 'black',
    fontWeight: 'bold',
  },
  logo: {
    alignSelf: 'center',
    width: 125,
    height: 125,
  },
})