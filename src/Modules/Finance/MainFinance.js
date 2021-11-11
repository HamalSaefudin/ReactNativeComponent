/* eslint-disable global-require */
import React, { Component } from 'react';
import {
 Image, Text, View,
} from 'react-native';
import PaymentCard from './PaymentCard';
import SlidingUp from './SlidingUp';

export default class MainFinance extends Component {
    render() {
        const dot = [1, 2, 3, 4];
        const src = require('../../assets/Icons/FinanceApp/Profile.png');
        const srcBg = require('../../assets/Icons/FinanceApp/EllipseBg.png');

        const data = [
            {
                img: require('../../assets/Icons/FinanceApp/Kfc.png'),
                title: 'KFC',
                price: '56.000',
                time: '13:01 am',
            },
            {
                img: require('../../assets/Icons/FinanceApp/Mcd.png'),
                title: 'McDonald’s ',
                price: '124.021',
                time: 'Yesterday',
            },
            {
                img: require('../../assets/Icons/FinanceApp/Hkb.png'),
                title: 'Hoka HokBen',
                price: '200.000',
                time: 'Yesterday',
            },
        ];
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#21252F',
                paddingTop: 32,
            }}
            >
                <View style={{ paddingHorizontal: 32 }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    }}
                >
                <View style={{
                    width: 40,
                    height: 40,
                    backgroundColor: '#2B303B',
                    borderRadius: 10,
                    flexWrap: 'wrap',
                    paddingTop: 8,
                    paddingLeft: 2,
                }}
                >
                    {dot.map((x) => (
                        <View
                        key={x}
                        style={{
                            width: 10,
                            height: 10,
                            backgroundColor: '#FFFFFF',
                            borderRadius: 20 / 2,
                            marginBottom: 5,
                            marginLeft: 5,
                        }}
                        />
                    ))}
                </View>
                <Image source={src} resizeMode="cover" style={{ width: 50, height: 50, borderRadius: 10 }} />
                </View>
                <Text
                    style={{
                        marginTop: 28,
                        fontSize: 20,
                        color: '#A1A1A1',
                        fontFamily: 'Poppins-Regular',
                    }}
                >
                    Welcome back,
                </Text>
                <Text
                    style={{
                        marginTop: 4,
                        fontSize: 24,
                        color: '#FFFFFF',
                        fontFamily: 'Poppins-SemiBold',
                        fontWeight: '600',
                    }}
                >
                    Olive Mars
                </Text>
                <PaymentCard dot={dot} srcBg={srcBg} />
                <Text style={{
                    marginTop: 28,
                    fontFamily: 'Poppins-Regular',
                    color: '#FFFFFF',
                    fontSize: 16,
                }}
                >
                    Transaction History
                </Text>
                </View>
                <SlidingUp data={data} />
            </View>
        );
    }
}
