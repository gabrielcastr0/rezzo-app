import React from 'react';
import S from './styles';
import {useTheme} from '../../contexts/ThemeProvider';
import CustomBackgroundImage from '../../components/CustomBackgroundImage';

const About = () => {
  const {theme} = useTheme();

  return (
    <S.Container style={{backgroundColor: theme.backgroundColor}}>
      <CustomBackgroundImage />
      <S.AreaBox>
        <S.AreaBoxTitle>
          <S.TextTitle>Lorem Ipsum</S.TextTitle>
        </S.AreaBoxTitle>
        <S.AreaBoxBody>
          <S.TextBody>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </S.TextBody>
        </S.AreaBoxBody>
      </S.AreaBox>
    </S.Container>
  );
};

export default About;
