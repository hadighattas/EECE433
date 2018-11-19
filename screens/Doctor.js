import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';
import { Input, Button } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import CustomButton from '../components/CustomButton';

export default class Doctor extends Component {
    static navigationOptions = {
        title: 'Doctor',
        headerStyle: {
            backgroundColor: Colors.doctor.main
        },
        headerTintColor: '#000000',
        headerTitleStyle: {
            fontWeight: 'bold'
        },
    };

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
            </View>
        );
    }
}