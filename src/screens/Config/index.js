import React from 'react';
import { Button } from 'react-native';
import { useTheme } from '../../contexts/ThemeProvider';
import { useNavigation } from '@react-navigation/native';

import S from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Config = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();

  const resetTheme = async () => {
    navigation.navigate('ChooseTheme');
  }

  return (
    <S.Container style={{backgroundColor: theme.backgroundColor}}>
      <S.AreaText style={{color: theme.textColor}}>Tela de Configuração</S.AreaText>
      <Button title="Resetar configurações" onPress={resetTheme}/>
    </S.Container>
  )
}

export default Config;
