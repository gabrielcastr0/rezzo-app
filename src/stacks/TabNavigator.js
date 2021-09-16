import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CustomTabBar from '../components/CustomTabBar';

import Home from '../screens/Home';
import PrayerList from '../screens/PrayerList';
import Config from '../screens/Config';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="PrayerList" component={PrayerList} />
      <Tab.Screen name="Config" component={Config} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
