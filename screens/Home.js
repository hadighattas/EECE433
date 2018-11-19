import React, { Component } from 'react'; 1
import { Platform, StyleSheet, Text, View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/Colors';
import Database from '../database/Database';

const list = [
    {
        title: 'Doctor',
        iconName: 'doctor',
        navigation: 'Doctor',
        color: Colors.doctor.main
    }, {
        title: 'Patient',
        iconName: 'account',
        navigation: 'Patient',
        color: Colors.patient.main
    }, {
        title: 'Pharmacy',
        iconName: 'pharmacy',
        navigation: 'Pharmacy',
        color: Colors.pharmacy.main
    }, {
        title: 'Add Data',
        iconName: 'plus',
        navigation: 'AddData',
        color: Colors.addData.main
    }
]
export default class Home extends Component {
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#dddddd'
        },
        headerTintColor: '#000000',
        headerTitleStyle: {
            fontWeight: 'bold'
        },
    };
    constructor(props) {
        super(props);
        var database = new Database();
        this.state = {
            database
        };
    }
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'space-around',
                    flexGrow: 1
                }}
            >
                <View
                    style={{
                        height: '30%',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Avatar
                        size='xlarge'
                        source={require('../images/Logo1.png')}
                    />
                </View>
                {
                    list.map((item, i) => (
                        <ListItem
                            key={i}
                            style={{ flex: 1 }}
                            leftIcon={<Icon name={item.iconName} color='white' size={30} />}
                            title={item.title}
                            titleStyle={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}
                            containerStyle={{ backgroundColor: item.color, flex: 1 }}
                            chevronColor='white'
                            onPress={() => this.props.navigation.push(item.navigation, {
                                database: this.state.database
                            })}
                        />
                    ))
                }
            </View>
        );
    }
}
