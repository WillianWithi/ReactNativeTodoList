import React, { Component } from 'react';
import { 
  Text, 
  View,
  StyleSheet
 } from 'react-native';

 import Todo from './components/Todo'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Todo title="Fazer café"/>
      </View>
    );
  }
} 

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
});