import React, {createContext, useState, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  defaultTheme,
  saoJoseTheme,
  nossaSenhoraTheme,
  santoAnjoTheme,
  jesusTheme,
} from '../helper/theme';

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(defaultTheme);
  const [isLoadingTheme, setIsLoadingTheme] = useState(true);

  const findOldTheme = async () => {
    const themeMode = await AsyncStorage.getItem('themeMode');

    switch (themeMode) {
      case 'saoJose':
        setTheme(saoJoseTheme);
        setIsLoadingTheme(false);
        break;

      case 'nossaSenhora':
        setTheme(nossaSenhoraTheme);
        setIsLoadingTheme(false);
        break;

      case 'santoAnjo':
        setTheme(santoAnjoTheme);
        setIsLoadingTheme(false);
        break;

      case 'jesus':
        setTheme(jesusTheme);
        setIsLoadingTheme(false);
        break;

      default:
        setTheme(defaultTheme);
        setIsLoadingTheme(false);
        break;
    }

    setIsLoadingTheme(false);
  };

  useEffect(() => {
    findOldTheme();
  }, []);

  const updateTheme = themeValue => {
    // AsyncStorage.clear();

    let newTheme = '';

    switch (themeValue) {
      case 'saoJose':
        newTheme = saoJoseTheme;
        break;

      case 'nossaSenhora':
        newTheme = nossaSenhoraTheme;
        break;

      case 'santoAnjo':
        newTheme = santoAnjoTheme;
        break;

      case 'jesus':
        newTheme = jesusTheme;
        break;

      default:
        newTheme = defaultTheme;
        break;
    }

    setTheme(newTheme);
    AsyncStorage.setItem('themeMode', newTheme.themeMode);
  };

  return (
    <ThemeContext.Provider value={{theme, isLoadingTheme, updateTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
