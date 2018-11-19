import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';

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