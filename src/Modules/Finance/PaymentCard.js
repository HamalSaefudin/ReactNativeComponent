import { Image, Text, View } from 'react-native';
import React from 'react';

const PaymentCard = ({ srcBg, dot }) => (
        <View
                style={{
                    backgroundColor: '#F1C4A4',
                    marginTop: 28,
                    borderRadius: 24,
                    padding: 24,
                    flexDirection: 'row',
                }}
        >
                    <View>
                    <Text style={{ color: '#5B5B5B', fontSize: 16 }}>Your Balance</Text>
                    <Text style={{ color: '#21252F', fontSize: 36 }}>Rp 5.200.124</Text>
                    <View style={{ flexDirection: 'row', marginTop: 48 }}>
                        {
                            dot.map((x) => (
                                <View key={x}>
                                    <Text style={{ marginRight: 12, color: '#59473A' }}>4132</Text>
                                </View>
                            ))
                        }
                    </View>
                    </View>
                    <Image
                        source={srcBg}
                        resizeMode="center"
                        style={{
                          height: 150,
                          width: 150,
                          marginRight: 24,
                          zIndex: -10,
                          marginLeft: -25,
                          marginTop: -24,
                          borderTopRightRadius: 30,
                        }}
                    />
        </View>
    );
export default PaymentCard;