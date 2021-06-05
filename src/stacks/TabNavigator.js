import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CustomTabBar from '../components/CustomTabBar';

import Home from '../screens/Home';
import About from '../screens/About';
import Config from '../screens/Config';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} initialParams={{icon: 'home'}} />
      <Tab.Screen
        name="About"
        component={About}
        initialParams={{icon: 'star'}}
      />
      <Tab.Screen
        name="Config"
        component={Config}
        initialParams={{icon: 'gear'}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
