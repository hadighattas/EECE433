import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';

export default class AddData extends Component {
    static navigationOptions = {
        title: 'Add Data',
        headerStyle: {
            backgroundColor: Colors.addData.main
        },
        headerTintColor: '#000000',
        headerTitleStyle: {
            fontWeight: 'bold'
        },
    };
    render() {
        return (
            <View >
                <Text>Add Data</Text>
            </View>
        );
    }
}