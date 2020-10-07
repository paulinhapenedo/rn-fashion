import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AuthenticationNavigator from './navigator/onboarding';
import {ThemeProvider} from './theme';

const App = () => (
  <NavigationContainer>
    <ThemeProvider>
      <AuthenticationNavigator />
    </ThemeProvider>
  </NavigationContainer>
);

export default App;
