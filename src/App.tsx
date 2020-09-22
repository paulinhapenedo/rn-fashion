import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AuthenticationNavigator from './navigator/onboarding';

const App = () => (
  <NavigationContainer>
    <AuthenticationNavigator />
  </NavigationContainer>
);

export default App;
