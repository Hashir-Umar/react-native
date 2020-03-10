import React, {useState} from 'react'
import { Text, ToastAndroid, View, Button, Modal, StyleSheet, TextInput } from "react-native";

export default function AddTodo(props) {

    const [value, setValue] = useState("")
    const handleAdd = () => {
        if(value == "") {
            ToastAndroid.show('Please type your todo to add in your list!!!', ToastAndroid.SHORT);
            return;
        }

        props.addTodo(value);
        setValue("")
        props.handleModal(false);
    }


    return (    
        <Modal
          animationType="slide"
          transparent={false}
          visible={props.visible}
          onRequestClose={() => {
            props.handleModal(false);
          }}>
          
          <View style={styles.container}>
            <View>
                <Text style={styles.text}>Add your todo</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} value={value} onChangeText={text => setValue(text)} placeholder={"Type here"}/>
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Add" onPress={() => handleAdd()}/>
            </View>
          </View>

        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    input: {  
        padding: 8,    
        color: 'coral'
    },
    inputContainer: {
        width: 300,
        borderColor: '#ddd',
        borderWidth: 0.5,  
        marginBottom: 10, 
    },
    buttonContainer: {
        width: 300,
    },
    text: {
        fontSize: 28,
        color: 'coral',
        fontWeight: '700',
        marginBottom: 16,
    }
});