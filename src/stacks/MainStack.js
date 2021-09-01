import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from '../contexts/ThemeProvider';

import Preload from '../screens/Preload';
import TabNavigator from '../stacks/TabNavigator';
import ChooseTheme from '../screens/ChooseTheme';
import ReadScreen from '../screens/ReadScreen';

import iconHeaderSaoJose from '../assets/iconHeaderSaoJose.png';
import iconHeaderNossaSenhora from '../assets/iconHeaderNossaSenhora.png';
import iconHeaderSantoAnjo from '../assets/iconHeaderSantoAnjo.png';
import iconHeaderJesus from '../assets/iconHeaderJesus.png';

import {Image, StyleSheet, View} from 'react-native';

const Stack = createStackNavigator();

const MainStack = () => {
  const {theme} = useTheme();
  console.log(theme.themeMode);

  const Icon = () => {
    let headerIcon = '';

    switch (theme.themeMode) {
      case 'saoJose':
        headerIcon = iconHeaderSaoJose;
        break;

      case 'nossaSenhora':
        headerIcon = iconHeaderNossaSenhora;
        break;

      case 'santoAnjo':
        headerIcon = iconHeaderSantoAnjo;
        break;

      case 'jesus':
        headerIcon = iconHeaderJesus;
        break;

      default:
        headerIcon = null;
    }

    return (
      <View style={styles.container}>
        <Image source={headerIcon} style={styles.icon} />
      </View>
    );
  };

  return (
    <Stack.Navigator initialRouteName="Preload">
      <Stack.Screen
        name="Preload"
        component={Preload}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ChooseTheme"
        component={ChooseTheme}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{
          headerShown: true,
          headerTitle: <Icon />,
          headerLeft: null,
          headerTitleAlign: 'center',
          headerStyle: {
            height: 80,
            backgroundColor: theme.header.backgroundColor,
            borderBottomColor: theme.header.borderColor,
            borderBottomWidth: 5,
          },
        }}
      />
      <Stack.Screen
        name="ReadScreen"
        component={ReadScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    height: 85,
    width: 85,
  },
});

export default MainStack;
