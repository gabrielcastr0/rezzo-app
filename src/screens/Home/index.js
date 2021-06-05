import React from 'react';
import S from './styles';
import { useTheme } from '../../contexts/ThemeProvider';
import CustomBackgroundImage from '../../components/CustomBackgroundImage';

const Home = () => {
  const { theme } = useTheme();

  return (
    <S.Container style={{backgroundColor: theme.backgroundColor}}>
      <CustomBackgroundImage />
      <S.AreaText style={{color: theme.textColor}}>Tela Inicial</S.AreaText>
    </S.Container>
  )
}

export default Home;
