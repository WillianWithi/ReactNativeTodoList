import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  AsyncStorage,
  Button,
  StatusBar,
  Dimensions,
  TextInput,
  FlatList,
 } from 'react-native';




const { heigh, width } = Dimensions.get('window');
export default class App extends Component {
   state = {
     tasks: [],
     text: ""
   };

   changeTextHandler = text => {
      this.setState({ text:text });
   }

   addTask = () => {
    let notEmpty = this.state.text.trim().length > 0;

    if (notEmpty) {
      this.setState(
        prevState => {
          let { tasks, text } = prevState;
          return {
            tasks: tasks.concat({ key: tasks.length, text: text }),
            text: ""
          };
        },
        () => Tasks.save(this.state.tasks)
      );
    }
   };

   deleteTask = i => {
    this.setState(
      prevState => {
        let tasks = prevState.tasks.slice();

        tasks.splice(i, 1);

        return { tasks: tasks };
      },
      () => Tasks.save(this.state.tasks)
    );
   };

   componentDidMount() {
      Tasks.all(tasks => this.setState({ tasks: tasks || [] }));
   }


  render() {
    return (

      <View style={styles.container}>
        <Text style={styles.appTitle}>Todo List</Text>
        <View style={styles.card}>
            <FlatList
              style={styles.list}
              data={this.state.tasks}

              renderItem={({ item, index }) =>
                <View>
                  <View style={styles.listItemCont}>
                    <Text style={styles.listItem}>
                      {item.text}
                    </Text>
                    <Button style={styles.button} title="X" onPress={() => this.deleteTask(index)} />
                  </View>
                  <View style={styles.hr} />
                </View>}/>
                <TextInput
                    style={styles.textInput}
                    onChangeText={this.changeTextHandler}
                    onSubmitEditing={this.addTask}
                    value={this.state.text}
                    placeholder="Adicionar Tarefa"
                    returnKeyType="done"
                    returnKeyLabel="done"
                />

        </View>
        <StatusBar barStyle="light-content" />
      </View>
    );
  }
}


let Tasks = {
  convertToArrayOfObject(tasks, callback) {
    return callback(
      tasks ? tasks.split("||").map((task, i) => ({ key: i, text: task })) : []
    );
  },
  convertToStringWithSeparators(tasks) {
    return tasks.map(task => task.text).join("||");
  },
  all(callback) {
    return AsyncStorage.getItem("TASKS", (err, tasks) =>
      this.convertToArrayOfObject(tasks, callback)
    );
  },
  save(tasks) {
    AsyncStorage.setItem("TASKS", this.convertToStringWithSeparators(tasks));
  }
};



const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems: 'center',
      backgroundColor: '#f23657',
    },

    button: {
      marginRight:10,
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
      bottom: 10,
    },


    list: {
      width: "100%"
    },
    listItem: {
      left: 10,
      paddingTop: 2,
      paddingBottom: 2,
      fontSize: 18
    },
    hr: {
      height: 1,
      backgroundColor: "gray"
    },
    listItemCont: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
    },
    textInput: {
      height: 70,
      paddingRight: 10,
      paddingLeft: 10,
      borderColor: "gray",
      borderWidth: 0,
      width: "100%"
    }
});
