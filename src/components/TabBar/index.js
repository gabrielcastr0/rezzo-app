import React, { useState } from 'react';
import { View, Text } from 'react-native';

import S from './styles';
import Tab from './Tab';

const TabBar = ({state, navigation}) => {
  const [selected, setSelected] = useState('Home');
  const {routes} = state;
  
  // se a tab estiver selecionada
  const renderColor = (currentTab) => currentTab === selected ? '#00000022' : null;

  const handlePress = (activeTab, index) => {
    if(state.index !== index){
      setSelected(activeTab);
      navigation.navigate(activeTab);
    }
  }

  return (
    <S.Wrapper>
      <S.Container>
        {
          routes.map((route, index) => (
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
  )
}

export default TabBar;
