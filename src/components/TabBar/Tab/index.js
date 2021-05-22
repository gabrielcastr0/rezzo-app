import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import S from './styles';

const Tab = ({color, tab, onPress, icon}) => {
  return (
    <S.Container onPress={onPress}>
      {icon && <Icon name={icon} size={50} color="white" style={{backgroundColor: color, borderRadius: 5, paddingLeft: 5, paddingRight: 5, paddingTop: 5, paddingBottom: 5}}/>}
    </S.Container>
  )
}

export default Tab;
