import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import CustomizeListView from '../Modules/CustomizeListView';
import MainScreen from '../Modules/MainScreen';
import { navigation } from './Routes';

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
          name="Custom List View"
          component={CustomizeListView}
          options={NoHeaderOption}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

export default ApplicationStack;