import React from 'react';
import S from './styles';
import { useTheme } from '../../contexts/ThemeProvider';

import { Button } from 'react-native';

const Home = () => {
  const {theme, updateTheme} = useTheme();

  const changeTheme = (themeValue) => {
    updateTheme(themeValue);
  };

  return (
    <S.Container style={{backgroundColor: theme.backgroundColor}}>
      <S.AreaText style={{color: theme.textColor}}>HomeTab</S.AreaText>
      <Button title='Seleciona o tema verde' onPress={()=>{changeTheme('saoJose')}} color={theme.nav.backgroundColor}/>
      <Button title='Seleciona o tema rosa' onPress={()=>{changeTheme('nossaSenhora')}} color={theme.nav.backgroundColor}/>
    </S.Container>
  )
}

export default Home;
