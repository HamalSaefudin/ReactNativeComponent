import React from 'react';
import {
 Animated, View, TextInput, Text, StyleSheet,
} from 'react-native';
import Svg, { G, Circle } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedInput = Animated.createAnimatedComponent(TextInput);

export default function Donut({
    percentage = 90,
    radius = 40,
    strokeWidth = 10,
    duration = 900,
    color = 'tomato',
    delay = 500,
    textColor,
    max = 100,
}) {
    const animatedValue = React.useRef(new Animated.Value(0)).current;
    const circleCircumference = 2 * Math.PI * radius;
    const halfCircle = radius + strokeWidth;
    const circleRef = React.useRef();
    const inputRef = React.useRef();
    const animation = (toValue) => Animated.timing(animatedValue, {
        toValue,
        duration,
        delay,
        useNativeDriver: true,
    }).start();

    React.useEffect(() => {
        setTimeout(() => {
        animation(percentage);

        animatedValue.addListener((v) => {
            const maxPerc = (100 * v.value) / max;
            const strokeDashoffset = circleCircumference - (circleCircumference * maxPerc) / 100;
            if (circleRef.current) {
                circleRef.current.setNativeProps({
                    strokeDashoffset,
                });
            }

            if (inputRef.current) {
                inputRef.current.setNativeProps({
                    text: `${Math.round(v.value)}`,
                });
            }
        });
        }, 500);

        return () => {
            animatedValue.removeAllListeners();
        };
    }, [max, percentage]);
    return (
        <View>
            <Svg
                width={radius * 2}
                height={radius * 2}
                viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
            >
                <G rotation="-90" origin={`${halfCircle}, ${halfCircle}`}>
                    <Circle
                        cx="50%"
                        cy="50%"
                        stroke={color}
                        strokeWidth={strokeWidth}
                        r={radius}
                        strokeOpacity={0.2}
                        fill="transparent"
                    />
                    <AnimatedCircle
                        ref={circleRef}
                        cx="50%"
                        cy="50%"
                        stroke={color}
                        strokeWidth={strokeWidth}
                        r={radius}
                        fill="transparent"
                        strokeDasharray={circleCircumference}
                        strokeDashoffset={circleCircumference}
                        strokeLinecap="round"
                    />
                </G>
            </Svg>
            <AnimatedInput
                ref={inputRef}
                underlineColorAndroid="transparent"
                editable={false}
                defaultValue="0"
                style={[
                    StyleSheet.absoluteFillObject,
                    { fontSize: radius / 2, color: textColor ?? color },
                    { fontWeight: 'bold', textAlign: 'center' },
                ]}
            />
        </View>
    );
}