import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

import S from './styles';

const Preload = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkTheme = async () => {
      const themeMode = await AsyncStorage.getItem('themeMode');

      if (themeMode) {
        navigation.navigate('TabNavigator');
      } else {
        navigation.navigate('ChooseTheme');
      }
    };

    checkTheme();
  }, [navigation]);

  return (
    <S.Container>
      <S.LoadingIcon size="large" color="#96cdd9" />
    </S.Container>
  );
};

export default Preload;
