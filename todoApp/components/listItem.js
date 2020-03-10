import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity, Button , View} from "react-native";
import Card from './card'
import {Ionicons} from '@expo/vector-icons'

export default TodoItem = (props) => {

    return (
        <Card style={styles.item}>      
            <View>
                <Text style={styles.title}>{props.item.title}</Text>                
            </View>
            <TouchableOpacity onPress={() => props.deleteTodo(props.item.id)}>
                <Ionicons name="md-trash" size={24} color="red"/>
            </TouchableOpacity>
        </Card>
);
  }
  

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    title: {
        color: 'coral', 
        fontSize: 14, 
        fontWeight: '100',
    } 
});