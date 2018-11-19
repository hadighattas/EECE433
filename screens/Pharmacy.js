import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';
import { Button } from 'react-native-elements';

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
        };
        this.getPharmacies = this.getPharmacies.bind(this);
    }

    async getPharmacies() {
        var result = await this.state.database.getPatientDrugs(this.state.SSN_P);
        console.log(result);
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
            </View>
        );
    }
}