import React from 'react';
import S from './styles';
import { useTheme } from '../../contexts/ThemeProvider';

const About = () => {
  const {theme} = useTheme();

  return (
    <S.Container style={{backgroundColor: theme.backgroundColor}}>
      <S.AreaText style={{color: theme.textColor}}>AboutTab</S.AreaText>
    </S.Container>
  )
}

export default About;
