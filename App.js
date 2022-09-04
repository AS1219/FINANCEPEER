import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import BottomTab from './src/navigation/BottomTab/BottomTabNavigator';

import ThemeProvider from './src/contexts/ThemeProvider';
import ThemeWrapper from './src/components/ThemeWrapper';

const App = () => {
  return (
    <ThemeProvider>
      <ThemeWrapper>
        <NavigationContainer>
          <BottomTab />
        </NavigationContainer>
      </ThemeWrapper>
    </ThemeProvider>
  );
};

export default App;
