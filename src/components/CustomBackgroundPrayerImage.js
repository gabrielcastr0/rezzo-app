import React from 'react';
import {useTheme} from '../contexts/ThemeProvider';
import {View, Image, Dimensions} from 'react-native';

import oneLirioImg from '../assets/readScreenImgs/oneLirioImg.png';
import oneFlorImg from '../assets/readScreenImgs/oneFlorImg.png';
import oneNuvemImg from '../assets/readScreenImgs/oneNuvemImg.png';
import oneComunhaoImg from '../assets/readScreenImgs/oneComunhaoImg.png';

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
      imgBackground = oneNuvemImg;
      break;

    case 'jesus':
      imgBackground = oneComunhaoImg;
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
