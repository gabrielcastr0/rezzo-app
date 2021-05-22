import React, {useContext} from 'react';
import S from './styles';
import { useTheme } from '../../contexts/ThemeProvider';

import { Button } from 'react-native';

const Home = () => {
  const {theme, updateTheme} = useTheme();

  const changeTheme = () => updateTheme(theme.themeMode);

  return (
    <S.Container style={{backgroundColor: theme.backgroundColor}}>
      <S.AreaText style={{color: theme.textColor}}>HomeTab</S.AreaText>
      <Button title='Mude o tema' onPress={changeTheme} color={theme.nav.backgroundColor} />
    </S.Container>
  )
}

export default Home;
