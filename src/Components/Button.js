import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import React from 'react';

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

const Button = ({ onPress, title }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
    >
        <Text>{title}</Text>
    </TouchableOpacity>
);

export default Button;