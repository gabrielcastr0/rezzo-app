import React from 'react';
import {useTheme} from '../../contexts/ThemeProvider';
import {useNavigation} from '@react-navigation/native';
import CustomBackgroundImage from '../../components/CustomBackgroundImage';

import S from './styles';

const Config = () => {
  const {theme} = useTheme();
  const navigation = useNavigation();

  const resetTheme = async () => {
    navigation.navigate('ChooseTheme');
  };

  return (
    <S.Container style={{backgroundColor: theme.backgroundColor}}>
      <CustomBackgroundImage />
      <S.BoxButton>
        <S.ButtonReset
          style={{backgroundColor: theme.textColor}}
          onPress={resetTheme}>
          <S.ButtonText style={{color: theme.backgroundColor}}>
            Resetar Configurações
          </S.ButtonText>
        </S.ButtonReset>
      </S.BoxButton>
    </S.Container>
  );
};

export default Config;
