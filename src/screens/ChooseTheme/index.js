import React from 'react';
import { View, Text, Button, Image } from 'react-native';

import { useTheme } from '../../contexts/ThemeProvider';
import { StatusBar } from 'react-native';

import S from './styles';

import iconSaoJose from '../../assets/iconSaoJose.png';
import iconNossaSenhora from '../../assets/iconNossaSenhora.png';
import iconAnjo from '../../assets/iconAnjo.png';
import iconJesus from '../../assets/iconJesus.png';

const ChooseTheme = ({navigation}) => {
  const {theme, updateTheme} = useTheme();

  const changeTheme = (themeValue) => {
    updateTheme(themeValue);
    navigation.navigate('TabNavigator');
  };

  return (
    <S.Container>
      {/* <StatusBar backgroundColor='#C0D7DC'/> */}
      <S.TitleArea>
        <S.Title>REZZO</S.Title>
        <S.TitleBack>REZZO</S.TitleBack>
      </S.TitleArea>

      <S.BoxArea>
        <S.BoxTitle>Escolha sua interface:</S.BoxTitle>
      </S.BoxArea>

      <S.CardAreaMain>
        <S.CardAreaSecond>
          <S.FirstCard>
            <S.CardBtn onPress={()=>{changeTheme('saoJose')}} activeOpacity={0.5}>
              <S.CardImg source={iconSaoJose}/>
            </S.CardBtn>
          </S.FirstCard>

          <S.SecondCard>
            <S.CardBtn onPress={()=>{changeTheme('nossaSenhora')}} activeOpacity={0.5}>
              <S.CardImg source={iconNossaSenhora}/>
            </S.CardBtn>
          </S.SecondCard>

          <S.ThirdCard>
            <S.CardBtn onPress={()=>{changeTheme('santoAnjo')}} activeOpacity={0.5}>
              <S.CardImg source={iconAnjo}/>
            </S.CardBtn>
          </S.ThirdCard>

          <S.FourthCard>
            <S.CardBtn onPress={()=>{changeTheme('jesus')}} activeOpacity={0.5}>
              <S.CardImg source={iconJesus}/>
            </S.CardBtn>
          </S.FourthCard>
        </S.CardAreaSecond>
      </S.CardAreaMain>
    </S.Container>
  )
}

export default ChooseTheme;

