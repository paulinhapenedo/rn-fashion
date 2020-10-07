import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import OnboardingScreen from '../screens/Onboarding';
import WelcomeScreen from '../screens/Welcome';

const AuthenticationStack = createStackNavigator();

const AuthenticationNavigator = () => (
  <AuthenticationStack.Navigator headerMode="none">
    <AuthenticationStack.Screen
      name="Onboarding"
      component={OnboardingScreen}
    />
    <AuthenticationStack.Screen name="Welcome" component={WelcomeScreen} />
  </AuthenticationStack.Navigator>
);

export default AuthenticationNavigator;
