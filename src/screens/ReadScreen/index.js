import React, {useState} from 'react';
import S from './styled';
import {useTheme} from '../../contexts/ThemeProvider';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';

import CustomBackgroundPrayerImage from '../../components/CustomBackgroundPrayerImage';
import Cancel from '../../assets/iconsReadScreen/cancel.svg';
import List from '../../assets/iconsReadScreen/list.svg';

import Star from '../../assets/iconsReadScreen/star.svg';
import StarFull from '../../assets/iconsReadScreen/star_full.svg';
import ArrowRight from '../../assets/iconsReadScreen/arrow_right.svg';
import ArrowLeft from '../../assets/iconsReadScreen/arrow_left.svg';

const ReadScreen = () => {
  const {theme} = useTheme();
  const navigation = useNavigation();

  const [favorite, setFavorite] = useState(false);

  const handleClickCancel = () => {
    navigation.navigate('About');
  };

  const handleClickFavorite = () => {
    setFavorite(true);
  };

  return (
    <S.Container style={{backgroundColor: theme.backgroundColor}}>
      <CustomBackgroundPrayerImage />
      <S.TopArea>
        <TouchableOpacity onPress={handleClickCancel}>
          <Cancel />
        </TouchableOpacity>

        <S.TopTitle style={{color: theme.textColor}}>TÍTULO AQUI</S.TopTitle>

        <TouchableOpacity>
          <List />
        </TouchableOpacity>
      </S.TopArea>

      <S.AreaPrayer>
        <S.AreaTitle>
          <S.TextTitle>Título Oração</S.TextTitle>
        </S.AreaTitle>

        <S.AreaBody>
          <S.TextBody>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </S.TextBody>
        </S.AreaBody>
      </S.AreaPrayer>

      <S.BottomArea>
        <TouchableOpacity>
          <ArrowLeft />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleClickFavorite}>
          {favorite === false && <Star />}
          {favorite === true && <StarFull />}
        </TouchableOpacity>

        <TouchableOpacity>
          <ArrowRight />
        </TouchableOpacity>
      </S.BottomArea>
    </S.Container>
  );
};

export default ReadScreen;
