import {useTheme} from '../contexts/ThemeProvider';

const ThemeWrapper = ({children}) => {
  const {isThemeLoading} = useTheme();
  if (isThemeLoading) {
    return null;
  }
  return children;
};

export default ThemeWrapper;
