import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Reanimated2 from '../Modules/Reanimated2';
import Biometric from '../Modules/Biometric/Biometric';
import CustomizeListView from '../Modules/CustomizeListView/CustomizeListView';
import MainScreen from '../Modules/MainScreen';
import ZaraCarousel from '../Modules/ZaraCarousel/ZaraCarousel';
import Route, { navigation } from './Routes';

const Stack = createStackNavigator();

const NoHeaderOption = {
  headerShown: false,
  gestureEnabled: false,
};

const ApplicationStack = () => (
    <NavigationContainer
    ref={navigation}
    >
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MainScreen}
          options={NoHeaderOption}
        />
        <Stack.Screen
          name={Route.CListView}
          component={CustomizeListView}
          options={NoHeaderOption}
        />
        <Stack.Screen
          name={Route.ZaraCarousel}
          component={ZaraCarousel}
          options={NoHeaderOption}
        />
        <Stack.Screen
          name={Route.Biometric}
          component={Biometric}
          options={NoHeaderOption}
        />
        <Stack.Screen
          name={Route.Reanimated2}
          component={Reanimated2}
          options={NoHeaderOption}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

// export { default } from '../../storybook';
export default ApplicationStack;