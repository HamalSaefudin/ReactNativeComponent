/* eslint-disable no-use-before-define */
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Route from '../App/Routes';

export default class MainScreen extends Component {
    render() {
        return (
            <View style={{
                flex: 1, alignItems: 'center', paddingTop: 30,
            }}
            >
                <TouchableOpacity style={styles.card} onPress={() => { Route.navigate('Custom List View'); }}>
                    <Text>Customize List View</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: 'grey',
        paddingHorizontal: 40,
    },
});