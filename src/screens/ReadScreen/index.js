import React from 'react';
import S from './styled';
import {useTheme} from '../../contexts/ThemeProvider';

import CustomBackgroundPrayerImage from '../../components/CustomBackgroundPrayerImage';

const ReadScreen = () => {
  const {theme} = useTheme();

  return (
    <S.Container style={{backgroundColor: theme.backgroundColor}}>
      <CustomBackgroundPrayerImage />
    </S.Container>
  );
};

export default ReadScreen;
