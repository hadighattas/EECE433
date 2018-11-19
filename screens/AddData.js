import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Picker } from 'react-native';
import Colors from '../constants/Colors';
import DatePicker from 'react-native-datepicker';

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

    constructor(props) {
        super(props);
        this.state = {
            table: 'Doctor',
            data
        };
    }

    renderInputs() {
        const { tabe } = this.state;
        if (table == "Doctor") {
            return (
                <View>

                </View>
            );
        }
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
                <Picker
                    selectedValue={this.state.language}
                    style={{ height: 50, width: 100 }}
                    onValueChange={(itemValue, itemIndex) => this.setState({ table: itemValue })}>
                    <Picker.Item label="Doctor" value="doctor" />
                    <Picker.Item label="Patient" value="patient" />
                    <Picker.Item label="Addresses" value="addresses" />
                    <Picker.Item label="Drug" value="drug" />
                    <Picker.Item label="Pharmaceutical Company" value="Pharmaceutical_Company" />
                    <Picker.Item label="Pharmacy" value="Pharmacy" />
                    <Picker.Item label="Prescribe" value="Prescribe" />
                    <Picker.Item label="Sells" value="Sells" />
                    <Picker.Item label="Sells2" value="Sells2" />
                    <Picker.Item label="Contract" value="Contract" />
                    <Picker.Item label="Has_a" value="Has_a" />
                </Picker>


                {this.renderInputs()}
                <Button
                    title="Submit"
                    onPress={() => this.getDoctor()} />
            </View>
        );
    }
}