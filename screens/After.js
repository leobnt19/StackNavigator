import React, { Component } from 'react'
import {Platform, ActivityIndicator, StyleSheet, Text, View, FlatList} from 'react-native';
import { createStackNavigator, createAppContainer, StackNavigator } from 'react-navigation'

export default class After extends Component {

  constructor(props){
    super(props)
    this.state = {
      isLoading: true,
      results: [],
    }
  }
  
  // fetchData = async() => {
  //   const response = await fetch('http://10.0.2.2:3000')
  //   const rows = await response.json()
  //   this.setState({results: rows})
  // }
  
  
  componentWillMount(){
    return fetch ('http://10.0.2.2:3000')
    .then((response) => response.json())
    .then((responseJson) => {
  
      this.setState({
        isLoading: false,
        results: responseJson.rows, 
      }, function(){
  
      });
  
    })
    .catch((error) =>{
      console.error(error);
    });
    
  }
  
  render(){
  
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
  
    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.results}
          renderItem={({item}) => <Text> Usuário: {item.name} - Senha: {item.password} </Text>} //{item.name} {item.password}
          keyExtractor={({id}, index) => id}
  
        />
      </View>
    );
  }
}
