import React, {createContext, useState, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { defaultTheme, saoJoseTheme, } from '../helper/theme';

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(defaultTheme);
  const [isLoadingTheme, setIsLoadingTheme] = useState(true);

  const findOldTheme = async () => {
    const themeMode = await AsyncStorage.getItem('themeMode');

    if(themeMode !== null){
      themeMode === 'default' ? setTheme(defaultTheme) : setTheme(saoJoseTheme);
      setIsLoadingTheme(false);
    }

    setIsLoadingTheme(false);
  }

  useEffect(() => {
    findOldTheme();
  }, []);

  const updateTheme = (currentThemeMode) => {
    // AsyncStorage.clear();
    const newTheme = currentThemeMode === 'default' ? saoJoseTheme : defaultTheme;
    setTheme(newTheme);
    AsyncStorage.setItem('themeMode', newTheme.themeMode);
  }

  return (
    <ThemeContext.Provider value={{theme, isLoadingTheme, updateTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
