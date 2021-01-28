import faker from 'faker';
import React from 'react';
import {
    Animated,
    Image, StatusBar, StyleSheet, Text, View,
} from 'react-native';

faker.seed(10);

const Data = [...Array(30).keys()].map((_, i) => ({
        key: faker.random.uuid(),
        image: `https://randomuser.me/api/portraits/${faker.helpers.randomize(['women', 'men'])}/${faker.random.number(60)}.jpg`,
        name: faker.name.findName(),
        jobTitle: faker.name.jobTitle(),
        email: faker.internet.email(),
}));

const Spacing = 20;
const Avatar_Size = 70;
const ITEM_SIZE = 80;

const CustomizeListView = () => {
    const scrollY = React.useRef(new Animated.Value(0)).current;
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Image
            source={{ uri: 'https://images.unsplash.com/photo-1466853817435-05b43fe45b39?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1978&q=80' }}
            style={StyleSheet.absoluteFillObject}
            blurRadius={80}
            />
            <Animated.FlatList
            data={Data}
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                { useNativeDriver: true },
            )}
            keyExtractor={(item) => item.key}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                padding: Spacing,
                paddingTop: 42,
            }}
            renderItem={({ item, index }) => {
                const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)];
                const opacityInputeRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 1)];
                const scale = scrollY.interpolate({
                    inputRange,
                    outputRange: [1, 1, 1, 0],
                });
                const opacity = scrollY.interpolate({
                    inputRange: opacityInputeRange,
                    outputRange: [1, 1, 1, 0.5],
                });
                return (
                    <Animated.View style={{
                      flexDirection: 'row',
                      marginBottom: Spacing,
                      borderRadius: 12,
                      shadowColor: '#000',
                      shadowOffset: { width: 0, height: 10 },
                      shadowOpacity: 0.3,
                      shadowRadius: 20,
                      backgroundColor: 'white',
                      opacity,
                      transform: [{ scale }],
                    }}
                    >
                      <Image
                      source={{ uri: item.image }}
                      style={{
                        width: Avatar_Size,
                        height: Avatar_Size,
                        borderRadius: 70 / 2,
                        marginHorizontal: Spacing,
                      }}
                      />
                      <View>
                      <Text style={{ fontSize: 22, fontWeight: '700' }}>{item.name}</Text>
                      <Text style={{ fontSize: 18, opacity: 0.7 }}>{item.jobTitle}</Text>
                      <Text style={{ fontSize: 12, opacity: 0.8, color: 'blue' }}>{item.email}</Text>
                      </View>
                    </Animated.View>
                    );
            }}
            />
        </View>
    );
};

export default CustomizeListView;

const styles = StyleSheet.create({});
