import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';

export default class Pharmacy extends Component {
    static navigationOptions = {
        title: 'Pharmacy',
        headerStyle: {
            backgroundColor: Colors.pharmacy.main
        },
        headerTintColor: '#000000',
        headerTitleStyle: {
            fontWeight: 'bold'
        },
    };
    render() {
        return (
            <View >
                <Text>Pharmacy</Text>
            </View>
        );
    }
}