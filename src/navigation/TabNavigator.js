import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../components/Home';
import About from '../components/About';
import Config from '../components/Config';
import TabBar from '../components/TabBar';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} initialParams={{icon: 'home'}}/>
      <Tab.Screen name="About" component={About} initialParams={{icon: 'home'}}/>
      <Tab.Screen name="Config" component={Config} initialParams={{icon: 'gear'}}/>
    </Tab.Navigator>
  )
}

export default TabNavigator;
