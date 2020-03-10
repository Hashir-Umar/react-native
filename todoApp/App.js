import React, {useState, useEffect } from "react";
import {View, Text, FlatList, Modal, Alert, Dimensions} from "react-native";
import TodoItem from './components/listItem'
import Header from "./components/header";
import AddTodo from "./components/modals";

export default function App() {

  // const randomID = (min, max) => {
  //   const number = (Math.floor(Math.random() % (max - min + 1)) + min)
  //   return number
  // }

  const [todos, setTodos] = useState([]) 

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const [modalVisibilty, setModalVisibilty] = useState(false);
  const handleModal = (flag) => {    
    setModalVisibilty(flag);
  }

  const addTodo = (text) => {
    const arr = [...todos]
    
    let id = 0;
    if(arr.length > 0) {
      id = parseInt(arr[arr.length - 1].id) + 1
    }

    const item = {id: id, title: text}
    arr.push(item)
    setTodos(arr)
  }

  const deleteTodo = (id) => {
    Alert.alert(
      'Delete?',
      'Are you sure you want to delete this todo.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {text: 'Yes', onPress: () =>{
          const arr = todos.filter(item => item.id !== id)
          setTodos(arr);
        }},
      ],
      {cancelable: false},
    );
  }

  return (    
    <View style={{flex: 1}}>
      <Header title="Todo App" handleModal={handleModal} />
      <AddTodo visible={modalVisibilty} handleModal={handleModal} addTodo={addTodo}/>
      {!todos.length ? <View><Text style={{fontSize: 16, color: '#000', textAlign: "center", marginTop: (windowHeight / 2) - 80}}>No todo found!!</Text></View>: <View></View>}
      <FlatList
        style={{marginTop: 10}}
        data={todos}
        renderItem={({ item }) => 
          <TodoItem item={item} deleteTodo={deleteTodo} />
        }
        keyExtractor={item => item.id}
      />
    </View>
  )

}
