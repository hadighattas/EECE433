import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Colors from '../constants/Colors';
import { Button } from 'react-native-elements';

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

    constructor(props) {
        super(props);
        this.state = {
            database: this.props.navigation.getParam('database', null),
            SSN_P: null
        };
        this.getPatientDrugs = this.getPatientDrugs.bind(this);
        this.getPatientDoctors = this.getPatientDoctors.bind(this);
    }

    async getPatientDrugs() {
        var result = await this.state.database.getPatientDrugs(this.state.SSN_P);

    }

    async getPatientDoctors() {
        var result = await this.state.database.getPatientDrugs(this.state.SSN_P);

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
                    placeholder="SSN_P"
                    value={this.state.SSN_D}
                    onChangeText={(text) => this.setState({ SSN_P: text })}
                />
                <Button
                    title="Get drugs"
                    onPress={() => this.getPatientDrugs()}
                    buttonStyle={{ backgroundColor: Colors.patient.main, margin: 20 }} />
                <Button
                    title="Get doctors"
                    onPress={() => this.getPatientDoctors()}
                    buttonStyle={{ backgroundColor: Colors.patient.main, margin: 20 }} />
            </View>
        );
    }
}