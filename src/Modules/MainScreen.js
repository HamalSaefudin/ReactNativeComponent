/* eslint-disable no-use-before-define */
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Route from '../App/Routes';

export default class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.isBiometric = true;
    }

    componentDidMount() {
        FingerprintScanner.isSensorAvailable()
        .then(this.isBiometric = true)
        .catch((e) => { if (e) this.isBiometric = false; });
    }

    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                paddingTop: 30,
                backgroundColor: '#26C6DA',
            }}
            >
                <TouchableOpacity
                    style={styles.card}
                    onPress={() => {
                    Route.navigate(Route.CListView);
                }}
                >
                    <Text>Customize List View</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.card}
                    onPress={() => {
                    Route.navigate(Route.ZaraCarousel);
                }}
                >
                    <Text>{Route.ZaraCarousel}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.card}
                    onPress={() => {
                    Route.navigate(Route.Biometric, { isBiometric: this.isBiometric });
                }}
                >
                    <Text>{Route.Biometric}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.card}
                    onPress={() => {
                    Route.navigate(Route.Reanimated2, {
                        name: 'Total Points',
                        items: [
                          { name: 'Nathaniel Fitzgerald', points: '$3.45' },
                          { name: 'Lawrence Fullter Fitzgerald', points: '$3.45' },
                          { name: 'Jacob Mullins', points: '$3.45' },
                        ],
                      });
                }}
                >
                    <Text>{Route.Reanimated2}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 20,
        width: 300,
        alignItems: 'center',
    },
});