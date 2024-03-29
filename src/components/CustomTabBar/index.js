import React from 'react';

import S from './styles';
import {useTheme} from '../../contexts/ThemeProvider';
import {useKeyboard} from '@react-native-community/hooks';

import HomeIcon from '../../assets/iconsTabBar/home.svg';
import PrayIcon from '../../assets/iconsTabBar/pray.svg';
import ConfigIcon from '../../assets/iconsTabBar/config.svg';

const TabBar = ({state, navigation}) => {
  const {theme} = useTheme();
  const keyboard = useKeyboard();

  const goTo = screenName => {
    navigation.navigate(screenName);
  };

  return (
    <S.Wrapper style={{bottom: keyboard.keyboardShown ? -70 : 0}}>
      <S.Container style={{backgroundColor: theme.nav.backgroundColor}}>
        <S.TabItem onPress={() => goTo('Home')}>
          <HomeIcon
            width="45"
            height="45"
            fill="#FFF"
            style={{opacity: state.index === 0 ? 1 : 0.5}}
          />
        </S.TabItem>

        <S.TabItem onPress={() => goTo('PrayerList')}>
          <PrayIcon
            width="45"
            height="45"
            fill="#FFF"
            style={{opacity: state.index === 1 ? 1 : 0.5}}
          />
        </S.TabItem>

        <S.TabItem onPress={() => goTo('Config')}>
          <ConfigIcon
            width="45"
            height="45"
            fill="#FFF"
            style={{opacity: state.index === 2 ? 1 : 0.5}}
          />
        </S.TabItem>
      </S.Container>
    </S.Wrapper>
  );
};

export default TabBar;
