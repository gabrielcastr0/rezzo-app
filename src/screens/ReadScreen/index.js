import React, {useState, useEffect} from 'react';
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

const ReadScreen = ({route, navigation}) => {
  const {theme} = useTheme();
  const {title, body} = route.params;

  const [loading, setLoading] = useState();
  const [prayers, setPrayers] = useState([]);
  const [favorite, setFavorite] = useState(false);

  const handleClickCancel = () => {
    navigation.navigate('About');
  };

  const handleClickFavorite = () => {
    setFavorite(true);
  };

  // useEffect(() => {
  //   const handleLoadingButton = async () => {
  //     setLoading(true);
  //     const req = await fetch('http://192.168.100.18:4000/api/prayers/', {
  //       method: 'GET',
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //     });

  //     const json = await req.json();

  //     if (json) {
  //       setPrayers(json.list);
  //       // alert(json.list[0].id);
  //     }

  //     setLoading(false);
  //   };

  //   handleLoadingButton();
  // }, []);

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
        <S.AreaTitle>
          <S.TextTitle>{title}</S.TextTitle>
        </S.AreaTitle>

        <S.AreaBody>
          <S.TextBody>{body}.</S.TextBody>
        </S.AreaBody>
      </S.AreaPrayer>

      {/* <S.BottomArea>
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
      </S.BottomArea> */}
    </S.Container>
  );
};

export default ReadScreen;
