import React from 'react';

import S from './styles';
import {useTheme} from '../../contexts/ThemeProvider';

import HomeIcon from '../../assets/home.svg';
import PrayIcon from '../../assets/pray.svg';
import ConfigIcon from '../../assets/config.svg';

const TabBar = ({state, navigation}) => {
  const {theme} = useTheme();

  const goTo = screenName => {
    navigation.navigate(screenName);
  };

  return (
    <S.Wrapper>
      <S.Container style={{backgroundColor: theme.nav.backgroundColor}}>
        <S.TabItem onPress={() => goTo('Home')}>
          <HomeIcon
            width="45"
            height="45"
            fill="#FFF"
            style={{opacity: state.index === 0 ? 1 : 0.5}}
          />
        </S.TabItem>

        <S.TabItem onPress={() => goTo('About')}>
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
