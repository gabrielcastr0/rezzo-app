import React from 'react';
import S from './styles';
import { useTheme } from '../../contexts/ThemeProvider';

import { Button } from 'react-native';

const Home = () => {
  const { theme } = useTheme();

  return (
    <S.Container style={{backgroundColor: theme.backgroundColor}}>
      <S.AreaText style={{color: theme.textColor}}>Tela Inicial</S.AreaText>
    </S.Container>
  )
}

export default Home;
