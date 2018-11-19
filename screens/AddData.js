import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Picker, TextInput } from 'react-native';
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
            SSN_D: null,
            Name_D: null,
            Specialty: null,
            Years_experience: null,
            SSN_P:null,
            Name_P: null,
            Age:null,
            SSN_D:null
            

        };
        this.Submit= this.Submit.bind(this);
    }

    async Submit() {
        const {table} = this.state;
        if (table == "Doctor") {
        var result = await this.state.database.addDoctor(this.state.SSN_D, this.state.Name_D, this.state.Specialty, this.state.Years_experience);
        }
        if (table == "Patient") {
            var result = await this.state.database.addPatient(this.state.SSN_P, this.state.Name_P, this.state.Age, this.state.SSN_D);
            }
    }


    renderInputs() {
        const { table } = this.state;
        if (table == "Doctor") {
            return (
                <View>
                <TextInput
                    placeholder="SSN_D"
                    onChangeText={(text) => this.setState({SSN_D: text})}
                    value={this.state.SSN_D}
                />
                <TextInput
                    placeholder="Name_D"
                    onChangeText={(text) => this.setState({Name_D: text})}
                    value={this.state.Name_D}
                />
                <TextInput
                    placeholder="Specialty"
                    onChangeText={(text) => this.setState({Specialty: text})}
                    value={this.state.Specialty}
                />

                <TextInput
                    placeholder="Years_experience"
                    keyboardType='numeric'
                    onChangeText={(text) => this.setState({Years_experience: text})}
                    value={this.state.Years_experience}
                />

                </View>  
            );
        }
        if (table == "Patient") {
            return (
                <View>
                <TextInput
                    placeholder="SSN_P"
                    onChangeText={(text) => this.setState({SSN_P: text})}
                    value={this.state.SSN_P}
                />
                <TextInput
                    placeholder="Name_P"
                    onChangeText={(text) => this.setState({Name_P: text})}
                    value={this.state.Name_P}
                />
                <TextInput
                    placeholder="Age"
                    keyboardType='numeric'
                    onChangeText={(text) => this.setState({Age: text})}
                    value={this.state.Age}
                />

                <TextInput
                    placeholder="SSN_D"
                    onChangeText={(text) => this.setState({SSN_D: text})}
                    value={this.state.SSN_D}
                />
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
                    onPress={() => this.Submit()} />
            </View>
        );
    }
}