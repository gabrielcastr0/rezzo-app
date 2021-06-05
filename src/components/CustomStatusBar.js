import React from 'react';
import {StatusBar} from 'react-native';
import {useTheme} from '../contexts/ThemeProvider';

const CustomStatusBar = () => {
  const {theme} = useTheme();
  // const statusBarStyle = theme.themeMode === 'default' ? 'dark-content' : 'light-content';
  const statusBarStyle = 'dark-content';

  return (
    <StatusBar
      backgroundColor={theme.backgroundColor}
      barStyle={statusBarStyle}
    />
  );
};

export default CustomStatusBar;
