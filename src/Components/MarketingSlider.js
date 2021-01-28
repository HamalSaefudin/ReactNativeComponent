import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Text, View } from 'react-native';
import { SLIDER_DATA } from '../Config/Travel';
import { ITEM_WIDTH, SPACING, width } from '../Config/Themes';

const MarketingSlider = () => (
        <FlatList
            data={SLIDER_DATA}
            keyExtractor={(key) => key.color}
            horizontal
            snapToInterval={200 + 10}
            pagingEnabled
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            renderItem={({ item }) => (
                <View style={{
                     width: 200,
                     height: 80,
                     backgroundColor: item.color,
                     margin: SPACING,
                     borderRadius: 5,
                }}
                >
                    <Text style={{ color: 'white', margin: 10 }}>{item.title}</Text>
                </View>
            )}
        />
    );

export default MarketingSlider;