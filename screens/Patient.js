import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';
import SQLite from 'react-native-sqlite-storage';

export default class Patient extends Component {
    static navigationOptions = {
        title: 'Patient',
        headerStyle: {
            backgroundColor: Colors.patient.main
        },
        headerTintColor: '#000000',
        headerTitleStyle: {
            fontWeight: 'bold'
        },
    };
    render() {
        return (
            <View >
                <Text>Patient</Text>
            </View>
        );
    }
}