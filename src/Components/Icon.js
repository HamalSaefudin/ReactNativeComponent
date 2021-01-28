import React from 'react';
import { Image, View } from 'react-native';
import { ICON_SIZE } from '../Config/Themes';

const Icon = ({ uri }) => (
    <View
        style={{
            width: ICON_SIZE,
            height: ICON_SIZE,
            borderRadius: ICON_SIZE / 2,
            backgroundColor: '#ddd',
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        <Image
            source={uri}
            style={{
                width: ICON_SIZE * 0.6,
                height: ICON_SIZE * 0.6,
                resizeMode: 'contain',
            }}
        />
    </View>
);

export default Icon;