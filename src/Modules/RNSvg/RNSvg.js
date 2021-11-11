import React from 'react';
import { StatusBar, View } from 'react-native';
import Donut from './Donut';

export default function RNSvg() {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}
        >
            <StatusBar hidden />
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                flexWrap: 'wrap',
                alignItems: 'center',
            }}
            >
                <Donut />
            </View>
        </View>
    );
}