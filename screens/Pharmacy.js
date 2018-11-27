import React, { Component } from 'react';
import { Text, View, Keyboard } from 'react-native';
import Colors from '../constants/Colors';
import { Button } from 'react-native-elements';
import Table from '../components/Table';

export default class Pharmacy extends Component {
    static navigationOptions = {
        title: 'Pharmacy',
        headerStyle: {
            backgroundColor: Colors.pharmacy.main
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
            data: []
        };
        this.getPharmacies = this.getPharmacies.bind(this);
    }

    async getPharmacies() {
        Keyboard.dismiss();
        var results = await this.state.database.getPharmacies(this.state.SSN_P);
        var len = results.rows.length;
        var data = [];
        for (let i = 0; i < len; i++) {
            let row = results.rows.item(i);
            data[i] = [row.Name_Ph, row.Address_Ph, row.Phone_Number_Ph];
        }
        this.setState({ data });
    }

    renderTable() {
        if (this.state.data.length)
            return (<Table headers={['Name_Ph', 'Address_Ph', 'Phone_Number_Ph']} content={this.state.data} color={Colors.pharmacy.main} />);
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
                <Button
                    title="Get pharmacies"
                    onPress={() => this.getPharmacies()}
                    buttonStyle={{ backgroundColor: Colors.pharmacy.main, margin: 20 }} />
                {this.renderTable()}
            </View>
        );
    }
}