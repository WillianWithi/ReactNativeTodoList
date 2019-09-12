import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,
}  from 'react-native';

export default class Main extends Component {
   render() {
      return(
         <View style = {StyleSheet.container}>
           <View style = {StyleSheet.header}>
              <Text style={StyleSheet.headerText}>- Notas -</Text>
           </View>

           <ScrollView style={StyleSheet.scrollContainer}>

           </ScrollView>

           <View style={StyleSheet.footer}>
              <TextInput
                  style={styles.textInput}
                  placeholder='>note'
                  placeholderTextColor='white'
                  underlineColorAndroid='transparent'>
              </TextInput>
           </View>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
     flex: 1,
   },

   header: {
      backgroundColor: '#E91E63',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 10,
      borderBottomColor: '#ddd',
   },

   headerText: {
    color: 'white',
    fontSize: 18,
    padding: 26,
  },

  scrollContainer: {
    flex:1,
    marginBottom: 100,
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },

  textInput: {
    alignSelf: 'stretch',
    color: '#FFF',
    padding:20,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed',
  },

  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: '#e91e63',
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
  }




});
