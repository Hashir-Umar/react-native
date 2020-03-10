import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import Constants from 'expo-constants';
import {Ionicons} from '@expo/vector-icons'

export default function Header(props) {

    return (
        <View style={styles.header}>  
            <Text style={styles.title}>{props.title}</Text>
            <TouchableOpacity style={styles.btn} onPress={() => props.handleModal(true)}>
                <Ionicons name="md-add" size={20} color="#fefefe"/>
            </TouchableOpacity>
        </View>
    );
  }
  

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: Constants.statusBarHeight,
        height: 60,
        paddingHorizontal: 20,
        backgroundColor: 'coral',

        elevation: 3,
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    title: {
        textAlign: 'center',
        fontSize: 20, 
        fontWeight: 'bold',
        fontWeight: '100', 
        color: '#fff', 
    },
    btn: {
        height: 60,
        justifyContent: "center",
        paddingHorizontal: 10
    }
});