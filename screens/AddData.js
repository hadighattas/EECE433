import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Picker, TextInput } from 'react-native';
import Colors from '../constants/Colors';
import { Button } from "react-native-elements";
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
            table: 'doctor',
            SSN_D: null,
            Name_D: null,
            Specialty: null,
            Years_experience: null,
            SSN_P: null,
            Name_P: null,
            Age: null,
            add_id: null,
            add_Name: null,
            Trade_Name: null,
            formula: null,
        };
        this.Submit = this.Submit.bind(this);
    }

    async Submit() {
        const { table } = this.state;
        if (table == "doctor") {
            var result = await this.state.database.addDoctor(this.state.SSN_D, this.state.Name_D, this.state.Specialty, this.state.Years_experience);
        }
        if (table == "patient") {
            var result = await this.state.database.addPatient(this.state.SSN_P, this.state.Name_P, this.state.Age, this.state.SSN_D);
        }
        if (table == "addresses") {
            var result = await this.state.database.addAddress(this.state.add_id, this.state.add_Name, this.state.SSN_P);
        }
        if (table == "drug") {
            var result = await this.state.database.addDrug(this.state.Trade_Name, this.state.formula);
        }
    }


    renderInputs() {
        const { table } = this.state;
        if (table == "doctor") {
            return (
                <View>
                    <TextInput
                        placeholder="SSN_D"
                        onChangeText={(text) => this.setState({ SSN_D: text })}
                        value={this.state.SSN_D}
                    />
                    <TextInput
                        placeholder="Name_D"
                        onChangeText={(text) => this.setState({ Name_D: text })}
                        value={this.state.Name_D}
                    />
                    <TextInput
                        placeholder="Specialty"
                        onChangeText={(text) => this.setState({ Specialty: text })}
                        value={this.state.Specialty}
                    />

                    <TextInput
                        placeholder="Years_experience"
                        keyboardType='numeric'
                        onChangeText={(text) => this.setState({ Years_experience: text })}
                        value={this.state.Years_experience}
                    />

                </View>
            );
        }
        if (table == "patient") {
            return (
                <View>
                    <TextInput
                        placeholder="SSN_P"
                        onChangeText={(text) => this.setState({ SSN_P: text })}
                        value={this.state.SSN_P}
                    />
                    <TextInput
                        placeholder="Name_P"
                        onChangeText={(text) => this.setState({ Name_P: text })}
                        value={this.state.Name_P}
                    />
                    <TextInput
                        placeholder="Age"
                        keyboardType='numeric'
                        onChangeText={(text) => this.setState({ Age: text })}
                        value={this.state.Age}
                    />

                    <TextInput
                        placeholder="SSN_D"
                        onChangeText={(text) => this.setState({ SSN_D: text })}
                        value={this.state.SSN_D}
                    />
                </View>
            );
        }
        if (table == "addresses") {
            return (
                <View>
                    <TextInput
                        placeholder="add_id"
                        keyboardType='numeric'
                        onChangeText={(text) => this.setState({ add_id: text })}
                        value={this.state.add_id}
                    />
                    <TextInput
                        placeholder="add_Name"
                        onChangeText={(text) => this.setState({ add_Name: text })}
                        value={this.state.add_Name}
                    />
                    <TextInput
                        placeholder="SSN_P"
                        onChangeText={(text) => this.setState({ SSN_P: text })}
                        value={this.state.SSN_P}
                    />
                </View>
            );
        }
        if (table == "drug") {
            return (
                <View>
                    <TextInput
                        placeholder="Trade_Name"
                        onChangeText={(text) => this.setState({ Trade_Name: text })}
                        value={this.state.Trade_Name}
                    />
                    <TextInput
                        placeholder="formula"
                        onChangeText={(text) => this.setState({ formula: text })}
                        value={this.state.formula}
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
                    selectedValue={this.state.table}
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