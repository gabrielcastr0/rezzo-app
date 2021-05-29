import React from 'react';
import { View, Text, Button, Image } from 'react-native';

import { useTheme } from '../../contexts/ThemeProvider';
import { StatusBar } from 'react-native';

import S from './styles';

import iconSaoJose from '../../assets/iconSaoJose.png';
import iconNossaSenhora from '../../assets/iconNossaSenhora.png';

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
            <S.FirstCardBtn onPress={()=>{changeTheme('saoJose')}} activeOpacity={0.5}>
              <S.FirstCardImg source={iconSaoJose}/>
            </S.FirstCardBtn>
          </S.FirstCard>

          <S.SecondCard>
            <S.FirstCardBtn onPress={()=>{changeTheme('nossaSenhora')}} activeOpacity={0.5}>
              <S.FirstCardImg source={iconNossaSenhora}/>
            </S.FirstCardBtn>
          </S.SecondCard>

          <S.ThirdCard></S.ThirdCard>

          <S.FourthCard></S.FourthCard>
        </S.CardAreaSecond>
      </S.CardAreaMain>
    </S.Container>
  )
}

export default ChooseTheme;

