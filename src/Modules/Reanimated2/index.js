import React from 'react';
import { View } from 'react-native';
import Accordion from './Accordion/Accordion';
import SwipeButton from './Swipeable/SwipeButton';

const index = ({ route }) => (
        <View style={{ flex: 1, backgroundColor: '#26C6DA' }}>
            <Accordion list={route.params} />
            <Accordion list={route.params} />
            <Accordion list={route.params} />
            <View style={{ alignItems: 'center', marginTop: 16 }}>
            <SwipeButton />
            </View>
        </View>
    );
export default index;