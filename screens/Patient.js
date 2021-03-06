import React, { Component } from 'react';
import { View, TextInput, Keyboard } from 'react-native';
import Colors from '../constants/Colors';
import { Button } from 'react-native-elements';
import Table from '../components/Table';

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
            SSN_P: null,
            data: [], getPatient: null
        };
        this.getPatientDrugs = this.getPatientDrugs.bind(this);
        this.getPatientDoctors = this.getPatientDoctors.bind(this);
    }

    async getPatientDrugs() {
        Keyboard.dismiss();
        var results = await this.state.database.getPatientDrugs(this.state.SSN_P);
        var len = results.rows.length;
        var data = [];
        var getPatient = null;

        if (results.rows.length === 0) {
            Alert.alert(
                'No records found'
            )
        }

        for (let i = 0; i < len; i++) {
            let row = results.rows.item(i);
            console.log(row);
            data[i] = [row.SSN_P, row.Name_P, row.Trade_Name]
        }
        getPatient = 'Drugs'
        this.setState({ data, getPatient });
    }

    async getPatientDoctors() {
        Keyboard.dismiss();
        var results = await this.state.database.getPatientDoctors(this.state.SSN_P);
        var len = results.rows.length;
        var getPatient = null;
        var data = [];
        for (let i = 0; i < len; i++) {
            let row = results.rows.item(i);
            console.log(row);
            data[i] = [row.SSN_P, row.Name_P, row.Name_D]
        }
        getPatient = 'Doctors'
        this.setState({ data, getPatient });
    }

    renderTable() {
        // if (this.state.data.length)
        if (this.state.getPatient === 'Drugs')
            return (<Table headers={['SSN_P', 'Name_P', 'Trade_Name']} content={this.state.data} color={Colors.patient.main} />);
        else if (this.state.getPatient === 'Doctors')
            return (<Table headers={['SSN_P', 'Name_P', 'Name_D']} content={this.state.data} color={Colors.patient.main} />);
        else return (<View />);
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

                {this.renderTable()}
            </View>
        );
    }
}