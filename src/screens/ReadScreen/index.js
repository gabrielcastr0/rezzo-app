import React from 'react';
import S from './styled';
import {useTheme} from '../../contexts/ThemeProvider';
import {TouchableOpacity, ScrollView} from 'react-native';

import CustomBackgroundPrayerImage from '../../components/CustomBackgroundPrayerImage';
import Cancel from '../../assets/iconsReadScreen/cancel.svg';
import List from '../../assets/iconsReadScreen/list.svg';

const ReadScreen = ({route, navigation}) => {
  const {theme} = useTheme();
  const {title, body} = route.params;

  const handleClickCancel = () => {
    navigation.navigate('Home');
  };

  return (
    <S.Container style={{backgroundColor: theme.backgroundColor}}>
      <CustomBackgroundPrayerImage />
      <S.TopArea>
        <TouchableOpacity onPress={handleClickCancel}>
          <Cancel />
        </TouchableOpacity>

        <S.TopTitle style={{color: theme.textColor}}>ORAÇÕES</S.TopTitle>

        <TouchableOpacity>
          <List style={{opacity: 0}} />
        </TouchableOpacity>
      </S.TopArea>

      <S.AreaPrayer>
        <S.AreaTitle style={{backgroundColor: theme.textColor}}>
          <S.TextTitle>{title}</S.TextTitle>
        </S.AreaTitle>

        <S.AreaBody>
          <ScrollView>
            <S.TextBody style={{color: theme.textColor}}>{body}</S.TextBody>
          </ScrollView>
        </S.AreaBody>
      </S.AreaPrayer>
    </S.Container>
  );
};

export default ReadScreen;
