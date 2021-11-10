import React from 'react';
import {
 View, ScrollView, Text, Image,
} from 'react-native';

const SlidingUp = ({ data }) => (
        <View style={{
            flex: 1,
            backgroundColor: '#FFFFFF',
            marginTop: 20,
            borderTopRightRadius: 35,
            borderTopLeftRadius: 35,
            paddingHorizontal: 28,
        }}
        >
                <View style={{
                    width: 60,
                    height: 6,
                    backgroundColor: '#B3B0B7',
                    borderRadius: 7,
                    alignSelf: 'center',
                    marginTop: 16,
                }}
                />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{ paddingBottom: 34 }}
                >
                {data.map((dt) => (
                    <View
                    key={dt.title}
                    style={{
                         backgroundColor: '#F9F9F9',
                         borderRadius: 12,
                         paddingVertical: 14,
                         paddingHorizontal: 16,
                         flexDirection: 'row',
                         justifyContent: 'space-between',
                         marginTop: 12,
                    }}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                              source={dt.img}
                              resizeMode="cover"
                              style={{
                               height: 60,
                               width: 60,
                               borderRadius: 12,
                               marginRight: 12,
                              }}
                            />
                            <View style={{ marginTop: 7 }}>
                                <Text style={{ color: '#21252F', fontFamily: 'Poppins-SemiBold' }}>{dt.title}</Text>
                                <Text style={{ color: '#FF5A5A', fontFamily: 'Poppins-SemiBold' }}>{`- Rp${dt.price}`}</Text>
                            </View>
                        </View>
                        <Text style={{ alignSelf: 'center', color: '#9A9398', fontFamily: 'Poppins-Regular' }}>{dt.time}</Text>
                    </View>
                ))}
                </ScrollView>
        </View>
    );

export default SlidingUp;