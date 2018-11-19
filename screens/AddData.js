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
            Name_PC: null,
            Phone_Number_PC: null,
            Name_Ph: null,
            Address_Ph: null,
            Phone_Number_Ph: null,
            Date: null,
            Quantity: null,
            Price: null,
            Start_Date: null,
            End_Date: null,
            Text: null,
            Supervisor: null,
        };
        this.Submit = this.Submit.bind(this);
    }

    async Submit() {
        const { table } = this.state;
        if (table == "doctor") {
            var result = await this.state.database.addDoctor(this.state.SSN_D, this.state.Name_D, this.state.Specialty, this.state.Years_experience);
        }
        else if (table == "patient") {
            var result = await this.state.database.addPatient(this.state.SSN_P, this.state.Name_P, this.state.Age, this.state.SSN_D);
        }
        else if (table == "addresses") {
            var result = await this.state.database.addAddress(this.state.add_id, this.state.add_Name, this.state.SSN_P);
        }
        else if (table == "drug") {
            var result = await this.state.database.addDrug(this.state.Trade_Name, this.state.formula);
        }
        else if (table == "Pharmaceutical_Company") {
            var result = await this.state.database.addPC(this.state.Name_PC, this.state.Phone_Number_PC);
        }
        else if (table == "Pharmacy") {
            var result = await this.state.database.addPharmacy(this.state.Name_Ph, this.state.Address_Ph, this.state.Phone_Number_Ph);
        }
        else if (table == "Prescribe") {
            var result = await this.state.database.addPrescribe(this.state.Date, this.state.Quantity, this.state.Trade_Name, this.state.SSN_D, this.state.SSN_P);
        }
        else if (table == "Sells") {
            var result = await this.state.database.addSells(this.state.Trade_Name, this.state.Price, this.state.Name_Ph, this.state.Address_Ph);
        }
        else if (table == "Sells2") {
            var result = await this.state.database.addSells2(this.state.Trade_Name, this.state.Name_PC);
        }
        else if (table == "Contract") {
            var result = await this.state.database.addSells2(this.state.Name_Ph, this.state.Address_Ph, this.state.Name_PC, this.state.Start_Date, this.state.End_Date, this.state.End_Date, this.state.Text, this.state.Supervisor);
        }
        else if (table == "Has_a") {
            var result = await this.state.database.addSells2(this.state.SSN_D, this.state.SSN_P);
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
        else if (table == "patient") {
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
        else if (table == "addresses") {
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
        else if (table == "drug") {
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
        else if (table == "Pharmaceutical_Company") {
            return (
                <View>
                    <TextInput
                        placeholder="Name_PC"
                        onChangeText={(text) => this.setState({ Name_PC: text })}
                        value={this.state.Name_PC}
                    />
                    <TextInput
                        placeholder="Phone_Number_PC"
                        keyboardType='numeric'
                        onChangeText={(text) => this.setState({ Phone_Number_PC: text })}
                        value={this.state.Phone_Number_PC}
                    />
                </View>
            );
        }
        else if (table == "Pharmacy") {
            return (
                <View>
                    <TextInput
                        placeholder="Name_Ph"
                        onChangeText={(text) => this.setState({ Name_Ph: text })}
                        value={this.state.Name_Ph}
                    />
                    <TextInput
                        placeholder="Address_Ph"
                        onChangeText={(text) => this.setState({ Address_Ph: text })}
                        value={this.state.Address_Ph}
                    />
                    <TextInput
                        placeholder="Phone_Number_Ph"
                        keyboardType='numeric'
                        onChangeText={(text) => this.setState({ Phone_Number_Ph: text })}
                        value={this.state.Phone_Number_Ph}
                    />
                </View>
            );
        }
        else if (table == "Prescribe") {
            return (
                <View>
                    <DatePicker
                        style={{ width: 200 }}
                        Date={this.state.Date}
                        mode="Date"
                        placeholder="Date"
                        format="YYYY-MM-DD"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                        }}
                        onDateChange={(date) => { this.setState({ Date: date }) }}
                        value={this.state.Date}
                    />
                    <TextInput
                        placeholder="Quantity"
                        keyboardType='numeric'
                        onChangeText={(text) => this.setState({ Quantity: text })}
                        value={this.state.Quantity}
                    />
                    <TextInput
                        placeholder="Trade_Name"
                        onChangeText={(text) => this.setState({ Trade_Name: text })}
                        value={this.state.Trade_Name}
                    />
                    <TextInput
                        placeholder="SSN_D"
                        onChangeText={(text) => this.setState({ SSN_D: text })}
                        value={this.state.SSN_D}
                    />
                    <TextInput
                        placeholder="SSN_P"
                        onChangeText={(text) => this.setState({ SSN_P: text })}
                        value={this.state.SSN_P}
                    />
                </View>
            );
        }
        else if (table == "Sells") {
            return (
                <View>
                    <TextInput
                        placeholder="Trade_Name"
                        onChangeText={(text) => this.setState({ Trade_Name: text })}
                        value={this.state.Trade_Name}
                    />
                    <TextInput
                        placeholder="Price"
                        keyboardType='decimal-pad'
                        onChangeText={(text) => this.setState({ Price: text })}
                        value={this.state.Price}
                    />
                    <TextInput
                        placeholder="Name_Ph"
                        onChangeText={(text) => this.setState({ Name_Ph: text })}
                        value={this.state.Name_Ph}
                    />
                    <TextInput
                        placeholder="Address_Ph"
                        onChangeText={(text) => this.setState({ Address_Ph: text })}
                        value={this.state.Address_Ph}
                    />
                </View>
            );
        }
        else if (table == "Sells2") {
            return (
                <View>
                    <TextInput
                        placeholder="Trade_Name"
                        onChangeText={(text) => this.setState({ Trade_Name: text })}
                        value={this.state.Trade_Name}
                    />
                    <TextInput
                        placeholder="Name_PC"
                        onChangeText={(text) => this.setState({ Name_PC: text })}
                        value={this.state.Name_PC}
                    />
                </View>
            );
        }
        //Update dates
        else if (table == "Contract") {
            return (
                <View>
                    <TextInput
                        placeholder="Name_Ph"
                        onChangeText={(text) => this.setState({ Name_Ph: text })}
                        value={this.state.Name_Ph}
                    />
                    <TextInput
                        placeholder="Address_Ph"
                        onChangeText={(text) => this.setState({ Address_Ph: text })}
                        value={this.state.Address_Ph}
                    />
                    <TextInput
                        placeholder="Name_PC"
                        onChangeText={(text) => this.setState({ Name_PC: text })}
                        value={this.state.Name_PC}
                    />
                    <DatePicker
                        style={{ width: 200 }}
                        Date={this.state.Date}
                        mode="Start_Date"
                        placeholder="Start_Date"
                        format="YYYY-MM-DD"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                        }}
                        onDateChange={(date) => { this.setState({ Start_Date: date }) }}
                        value={this.state.Start_Date}
                    />
                    <DatePicker
                        style={{ width: 200 }}
                        Date={this.state.Date}
                        mode="End_Date"
                        placeholder="End_Date"
                        format="YYYY-MM-DD"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                        }}
                        onDateChange={(date) => { this.setState({ End_Date: date }) }}
                        value={this.state.End_Date}
                    />
                    <TextInput
                        placeholder="Text"
                        onChangeText={(text) => this.setState({ Text: text })}
                        value={this.state.Text}
                    />
                    <TextInput
                        placeholder="Supervisor"
                        onChangeText={(text) => this.setState({ Supervisor: text })}
                        value={this.state.Supervisor}
                    />
                </View>
            );
        }
        else if (table == "Has_a") {
            return (
                <View>
                    <TextInput
                        placeholder="SSN_D"
                        onChangeText={(text) => this.setState({ SSN_D: text })}
                        value={this.state.SSN_D}
                    />
                    <TextInput
                        placeholder="SSN_P"
                        onChangeText={(text) => this.setState({ SSN_P: text })}
                        value={this.state.SSN_P}
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
                    alignItems: 'center'
                }}
            >
                <Picker
                    selectedValue={this.state.table}
                    style={{ height: 50, width: 200 }}
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
                    onPress={() => this.Submit()}
                    buttonStyle={{ backgroundColor: Colors.addData.main, margin: 20 }} />
            </View>
        );
    }
}