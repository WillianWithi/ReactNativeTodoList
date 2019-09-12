import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
  StatusBar,
  Dimensions,
  TextInput,
 } from 'react-native';

import TodoList from './components/TodoList'


const { heigh, width } = Dimensions.get('window');
export default class App extends Component {
   state = {
     newTodoItem: '',
   };

   addTodo = textValue => {
      this.setState({
          newTodoItem: textValue
      });
   };


  render() {
    return (

      <View style={styles.container}>
        <Text style={styles.appTitle}>Todo List</Text>
        <View style={styles.card}>
        <TextInput
            style={styles.input}
            placeholder={'Adicionar Tarefa!'}
            value={this.newTodoItem}
            onChangeText={this.addTodo}
            placeholderTextColor={'#999'}
            returnKeyType={'done'}
            autoCorrect={false}/>
            <ScrollView>
              <TodoList />
            </ScrollView>
        </View>
        <StatusBar barStyle="light-content" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems: 'center',
      backgroundColor: '#f23657',
    },

    appTitle: {
      color: '#fff',
      fontSize: 36,
      marginTop: 60,
      marginBottom: 30,
      fontWeight: '300'
    },

    card: {
      backgroundColor: '#fff',
      flex: 1,
      width: width - 25,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },

    input: {
      padding: 20,
      borderBottomColor: '#bbb',
      borderBottomWidth: 1,
      fontSize: 24
    }
});
