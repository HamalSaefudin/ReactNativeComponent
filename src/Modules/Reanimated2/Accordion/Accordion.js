import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Animated, {
  measure,
  runOnUI,
  useAnimatedRef,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Chevron from './Chevron';
import ListItem from './ListItem';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  items: {
    overflow: 'hidden',
  },
});

const Accordion = ({ list }) => {
  const aref = useAnimatedRef();
  const open = useSharedValue(false);
  const transition = useDerivedValue(() => (open.value ? withSpring(1) : withTiming(0)));
  const height = useSharedValue(0);
  const headerStyle = useAnimatedStyle(() => ({
    borderBottomLeftRadius: !open === 0 ? 8 : 0,
    borderBottomRightRadius: !open === 0 ? 8 : 0,
  }));
  const style = useAnimatedStyle(() => ({
    height: 1 + transition.value * height.value,
    opacity: transition.value === 0 ? 0 : 1,
  }));
  return (
    <View style={{ padding: 5 }}>
      <TouchableWithoutFeedback onPress={() => {
        if (height.value === 0) {
          runOnUI(() => {
            'worklet';

            height.value = measure(aref).height;
          })();
        }
        open.value = !open.value;
      }}
      >
        <Animated.View
          style={[
            styles.container,
           headerStyle,
          ]}
        >
          <Text style={styles.title}>Total Points</Text>
          <Chevron transition={transition} />
        </Animated.View>
      </TouchableWithoutFeedback>
      <Animated.View style={[styles.items, style]}>
      <View
          ref={aref}
          onLayout={({
            nativeEvent: {
              layout: { height: h },
            },
          }) => console.log({ h })}
      >
          {list?.items?.map((item, key) => (
            <ListItem
              key={key.toString()}
              isLast={key === list?.items.length - 1}
              {...{ item }}
            />
          ))}
      </View>
      </Animated.View>
    </View>
  );
};
export default Accordion;
