import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Colors from '../constants/Colors';
import { Button } from 'react-native-elements';

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
                    alignItems: 'center'
                }}
            >
                <TextInput
                    containerStyle={{ margin: 20 }}
                    placeholder="SSN_D"
                    value={this.state.SSN_D}
                    onChangeText={(text) => this.setState({ SSN_D: text })}
                />
                <Button
                    title="Search"
                    onPress={() => this.getDoctor()}
                    buttonStyle={{ backgroundColor: Colors.doctor.main, margin: 20 }} />
            </View>
        );
    }
}