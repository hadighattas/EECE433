import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Colors from '../constants/Colors';
import PropTypes from 'prop-types';

export default class Table extends Component {
    render() {
        const { headers, content, color } = this.props;
        return (
            <View style={styles.mainView}>
                <View style={styles.rowView}>
                    {headers.map((value, index) => (
                        <View style={[styles.headerCell, { backgroundColor: color }]} key={index}>
                            <Text style={styles.headerText}>{value}</Text>
                        </View>
                    ))}
                </View>
                {content.map((row, index) => (
                    <View style={styles.rowView} key={index}>
                        {row.map((value, index) => (
                            <View style={styles.cell} key={index}>
                                <Text style={styles.text} > {value}</Text>
                            </View>
                        ))}
                    </View>
                ))}
            </View>
        );
    }
}

Table.propTypes = {
    headers: PropTypes.arrayOf(PropTypes.any),
    content: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.any)),
    color: PropTypes.string
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    rowView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerCell: {
        flex: 1,
        borderRadius: 4,
        margin: 10
    },
    headerText: {
        color: '#ffffff',
        fontSize: 15,
        alignSelf: 'center',
        margin: 10
    },
    text: {
        fontSize: 15,
        alignSelf: 'center',
        margin: 10
    },
    cell: {
        flex: 1,
        borderRadius: 4,
        margin: 10,
    }
});