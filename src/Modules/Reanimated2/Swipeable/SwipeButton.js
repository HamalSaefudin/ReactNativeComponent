import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
    Extrapolate,
    interpolate,
    runOnJS,
    useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring,
} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const BUTTON_WIDTH = 350;
const BUTTON_HEIGHT = 100;
const BUTTON_PADDING = 10;
const SWIPEABLE_DIMENSIONS = BUTTON_HEIGHT - 2 * BUTTON_PADDING;

const H_WAVE_RANGE = SWIPEABLE_DIMENSIONS + 2 * BUTTON_PADDING;
const H_SWIPE_RANGE = BUTTON_WIDTH - 1 * BUTTON_PADDING - SWIPEABLE_DIMENSIONS;

const styles = StyleSheet.create({
    swipeCont: {
        height: BUTTON_HEIGHT,
        width: BUTTON_WIDTH,
        padding: BUTTON_PADDING,
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: BUTTON_HEIGHT / 2,
    },
    swipeable: {
        height: SWIPEABLE_DIMENSIONS,
        width: SWIPEABLE_DIMENSIONS,
        borderRadius: SWIPEABLE_DIMENSIONS / 2,
        backgroundColor: '#06d6a0',
        position: 'absolute',
        left: BUTTON_PADDING,
        zIndex: 3,
    },
    swipeText: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1b9aaa',
        zIndex: 2,
    },
    wave: {
        height: BUTTON_HEIGHT,
        width: BUTTON_HEIGHT,
        backgroundColor: '#ccc',
        position: 'absolute',
        left: 0,
        borderRadius: BUTTON_HEIGHT,
    },
});

const SwipeButton = ({ onToggle }) => {
    const [toggled, setToggled] = React.useState(false);
    const x = useSharedValue(0);
    const animatedGestureHandler = useAnimatedGestureHandler({
        onStart: (_, ctx) => {
            ctx.completed = toggled;
            console.log(ctx, 'CONTEX');
        },
        onActive: (e, ctx) => {
            let newValue;

            if (ctx.completed) {
                newValue = H_SWIPE_RANGE + e.translationX;
            } else {
                x.value = e.translationX;
            }
            if (newValue >= 0 && newValue <= H_SWIPE_RANGE) {
                x.value = newValue;
            }
        },
        onEnd: () => {
            if (x.value < BUTTON_WIDTH / 2 - SWIPEABLE_DIMENSIONS / 2) {
                x.value = withSpring(0);
                runOnJS(setToggled)(false);
            } else {
                x.value = withSpring(H_SWIPE_RANGE);

                runOnJS(setToggled)(true);
            }
        },
    });

    const InterpolateXInput = [0, H_SWIPE_RANGE];
    const AnimatedStyle = {
        animateWave: useAnimatedStyle(() => ({
                width: H_WAVE_RANGE + x.value,
                opacity: interpolate(x.value, InterpolateXInput, [0, 1]),
            })),
        swipeable: useAnimatedStyle(() => ({
                transform: [{ translateX: x.value }],
        })),
        swipeText: useAnimatedStyle(() => ({
            opacity: interpolate(
                x.value,
                InterpolateXInput,
                [0.8, 0],
                Extrapolate.CLAMP,
            ),
            transform: [{
                translateX: interpolate(
                    x.value,
                    InterpolateXInput,
                    [0, BUTTON_WIDTH / 2 - SWIPEABLE_DIMENSIONS, Extrapolate.CLAMP],
                ),
            }],
        })),
    };

    return (
        <View style={styles.swipeCont}>
            <AnimatedLinearGradient
                colors={['#06d6a0', '#1b9aaa']}
                start={{ x: 0.0, y: 0.5 }}
                end={{ x: 1.0, y: 0.5 }}
                style={[styles.wave, AnimatedStyle.animateWave]}
            />
            <PanGestureHandler onGestureEvent={animatedGestureHandler}>
                <Animated.View style={[styles.swipeable, AnimatedStyle.swipeable]} />
            </PanGestureHandler>
            <Animated.Text style={[styles.swipeText, AnimatedStyle.swipeText]}>
                Swipe Me
            </Animated.Text>
        </View>
    );
};
export default SwipeButton;