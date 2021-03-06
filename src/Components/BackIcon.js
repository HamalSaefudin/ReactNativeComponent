import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const BackIcon = ({ onPress }) => (
        <AntDesign
            name="arrowleft"
            size={24}
            style={{ padding: 12 }}
            color="#333"
            onPress={onPress}
        />
    );

export default BackIcon;