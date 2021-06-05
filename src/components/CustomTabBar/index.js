import React, {useState} from 'react';

import S from './styles';
import Tab from './Tab';
import {useTheme} from '../../contexts/ThemeProvider';

const TabBar = ({state, navigation}) => {
  const {theme} = useTheme();
  const [selected, setSelected] = useState('Home');
  const {routes} = state;

  // se a tab estiver selecionada
  const renderColor = currentTab =>
    currentTab === selected ? theme.nav.active : null;

  const handlePress = (activeTab, index) => {
    if (state.index !== index) {
      setSelected(activeTab);
      navigation.navigate(activeTab);
    }
  };

  return (
    <S.Wrapper>
      <S.Container style={{backgroundColor: theme.nav.backgroundColor}}>
        {routes.map((route, index) => (
          <Tab
            tab={route}
            icon={route.params.icon}
            onPress={() => handlePress(route.name, index)}
            color={renderColor(route.name)}
            key={route.key}
          />
        ))}
      </S.Container>
    </S.Wrapper>
  );
};

export default TabBar;
