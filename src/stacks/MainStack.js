import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from '../stacks/TabNavigator';
import ChooseTheme from '../screens/ChooseTheme';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator 
    initialRouteName="Preload"
    screenOptions={{
      headerShown: false
  }}>
      <Stack.Screen name="ChooseTheme" component={ChooseTheme}/>
      <Stack.Screen name="TabNavigator" component={TabNavigator}/>
    </Stack.Navigator>
  )
}

export default MainStack;
