import React from 'react';
import {useTheme} from '../contexts/ThemeProvider';
import {View, Image, Dimensions} from 'react-native';

import lirioSaoJose from '../assets/backgroundImgs/lirioSaoJose.png';
import florImg from '../assets/backgroundImgs/florImg.png';
import nuvemImg from '../assets/backgroundImgs/nuvemImg.png';
import comunhaoImg from '../assets/backgroundImgs/comunhaoImg.png';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const CustomBackgroundImage = () => {
  const {theme} = useTheme();

  let imgBackground = '';

  switch (theme.themeMode) {
    case 'saoJose':
      imgBackground = lirioSaoJose;
      break;

    case 'nossaSenhora':
      imgBackground = florImg;
      break;

    case 'santoAnjo':
      imgBackground = nuvemImg;
      break;

    case 'jesus':
      imgBackground = comunhaoImg;
      break;

    default:
      imgBackground = null;
  }

  return (
    <View>
      <Image source={imgBackground} style={{width, height}} />
    </View>
  );
};

export default CustomBackgroundImage;
