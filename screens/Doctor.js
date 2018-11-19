import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';
import { Input, Button } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';

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

    constructor(props) {
        super(props);
        this.state = {
            database: this.props.navigation.getParam('database', null),
            SSN_D: null
        };
        this.getDoctor = this.getDoctor.bind(this);
        this.handleSSNChange = this.handleSSNChange.bind(this);
    }

    handleSSNChange(SSN_D) {
        this.setState({
            SSN_D
        });
    }

    async getDoctor() {
        var result = await this.state.database.getDoctor(this.state.SSN_D);
    }
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
                <Input
                    placeholder="SSN_D"
                    onChangeText={(text) => this.handleSSNChange(text)}
                />
                <Button
                    title="get"
                    onPress={() => this.getDoctor()} />
            </View>
        );
    }
}