import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/stacks/TabNavigator';
import ThemeProvider from './src/contexts/ThemeProvider';
import ThemeWrapper from './src/components/ThemeWrapper';
import CustomStatusBar from './src/components/CustomStatusBar';
import MainStack from './src/stacks/MainStack';

const App = () => {
  return(
    <ThemeProvider>
      <ThemeWrapper>
        <CustomStatusBar />
          <NavigationContainer>
            <MainStack />
          </NavigationContainer>
      </ThemeWrapper>
    </ThemeProvider>
  )
}

export default App;