import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Colors from '../constants/Colors';
import { Button } from 'react-native-elements';
import Table from '../components/Table';

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
            SSN_D: null,
            data: []
        };
        this.getDoctor = this.getDoctor.bind(this);
    }

    async getDoctor() {
        var results = await this.state.database.getDoctor(this.state.SSN_D);
        var len = results.rows.length;
        var data = [];
        for (let i = 0; i < len; i++) {
            let row = results.rows.item(i);
            console.log(row);
            data[i] = [row.SSN_D, row.Name_D, row.Name_P]
        }
        this.setState({ data });
    }

    renderTable() {
        if (this.state.data.length)
            return (<Table headers={['SSN_D', 'Name_D', 'Name_P']} content={this.state.data} color={Colors.doctor.main} />);
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
                    placeholder="SSN_D"
                    value={this.state.SSN_D}
                    onChangeText={(text) => this.setState({ SSN_D: text })}
                />
                <Button
                    title="Search"
                    onPress={() => this.getDoctor()}
                    buttonStyle={{ backgroundColor: Colors.doctor.main, margin: 20 }} />

                {this.renderTable()}
            </View>
        );
    }
}