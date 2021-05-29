import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

import S from './styles';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import ChooseTheme from '../ChooseTheme';

const Preload = () => {
  const navigation = useNavigation();

  useEffect(()=>{
    const checkTheme = async () => {
      const themeMode = await AsyncStorage.getItem('themeMode');

      if(themeMode){
        navigation.navigate('TabNavigator');
      }else{
        navigation.navigate('ChooseTheme');
      }
    }

    checkTheme();
  }, [])

  return (
    <S.Container>
      <S.LoadingIcon size="large" color="#96cdd9"></S.LoadingIcon>
    </S.Container>
  )
}

export default Preload;
