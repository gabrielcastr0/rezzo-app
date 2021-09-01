import React from 'react';
import {useTheme} from '../contexts/ThemeProvider';
import {View, Image, Dimensions} from 'react-native';

import oneLirioImg from '../assets/oneLirioImg.png';
import oneFlorImg from '../assets/oneFlorImg.png';
import nuvemImg from '../assets/nuvemImg.png';
import comunhaoImg from '../assets/comunhaoImg.png';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const CustomBackgroundImage = () => {
  const {theme} = useTheme();

  let imgBackground = '';

  switch (theme.themeMode) {
    case 'saoJose':
      imgBackground = oneLirioImg;
      break;

    case 'nossaSenhora':
      imgBackground = oneFlorImg;
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
