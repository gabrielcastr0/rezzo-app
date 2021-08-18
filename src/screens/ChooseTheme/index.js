import React, {useState} from 'react';
import {Modal, Text} from 'react-native';

import {useTheme} from '../../contexts/ThemeProvider';
import S from './styles';

import BackgroundSaoJose from '../../assets/backgroundSaoJose.svg';
import BackgroundNossaSenhora from '../../assets/backgroundNossaSenhora.svg';
import BackgroundSantoAnjo from '../../assets/backgroundSantoAnjo.svg';
import BackgroundJesus from '../../assets/backgroundJesus.svg';

const ChooseTheme = ({navigation}) => {
  const {updateTheme} = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState('');
  const [theme, setTheme] = useState('');

  const changeTheme = themeValue => {
    updateTheme(themeValue);
    navigation.navigate('TabNavigator');
  };

  return (
    <S.Container>
      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}>
        <S.Box>
          <S.BoxBody>
            <Text>{selectedTheme}</Text>
          </S.BoxBody>
          <S.AreaQuestion>
            <S.QuestionText>Deseja escolher esta interface?</S.QuestionText>
          </S.AreaQuestion>

          <S.AreaBtn>
            <S.BtnYes onPress={() => changeTheme(theme)}>
              <S.BtnText>Sim</S.BtnText>
            </S.BtnYes>
            <S.BtnNo onPress={() => setModalVisible(false)}>
              <S.BtnText>Não</S.BtnText>
            </S.BtnNo>
          </S.AreaBtn>
        </S.Box>
      </Modal>

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
            <S.CardBtn
              onPress={() => {
                setSelectedTheme(
                  <BackgroundSaoJose width="175" height="310" />,
                );
                setTheme('saoJose');
                setModalVisible(true);
              }}
              activeOpacity={0.5}>
              <BackgroundSaoJose width="110" height="170" />
            </S.CardBtn>
          </S.FirstCard>

          <S.SecondCard>
            <S.CardBtn
              onPress={() => {
                setSelectedTheme(
                  <BackgroundNossaSenhora width="175" height="310" />,
                );
                setTheme('nossaSenhora');
                setModalVisible(true);
              }}
              activeOpacity={0.5}>
              <BackgroundNossaSenhora width="110" height="170" />
            </S.CardBtn>
          </S.SecondCard>

          <S.ThirdCard>
            <S.CardBtn
              onPress={() => {
                setSelectedTheme(
                  <BackgroundSantoAnjo width="175" height="310" />,
                );
                setTheme('santoAnjo');
                setModalVisible(true);
              }}
              activeOpacity={0.5}>
              <BackgroundSantoAnjo width="110" height="170" />
            </S.CardBtn>
          </S.ThirdCard>

          <S.FourthCard>
            <S.CardBtn
              onPress={() => {
                setSelectedTheme(<BackgroundJesus width="175" height="310" />);
                setTheme('jesus');
                setModalVisible(true);
              }}
              activeOpacity={0.5}>
              <BackgroundJesus width="110" height="170" />
            </S.CardBtn>
          </S.FourthCard>
        </S.CardAreaSecond>
      </S.CardAreaMain>
    </S.Container>
  );
};

export default ChooseTheme;
