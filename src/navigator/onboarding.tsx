import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingScreen from '../screens/Onboarding';

const AuthenticationStack = createStackNavigator();

const AuthenticationNavigator = () => (
  <AuthenticationStack.Navigator headerMode="none">
    <AuthenticationStack.Screen
      name="Onboarding"
      component={OnboardingScreen}
    />
  </AuthenticationStack.Navigator>
);

export default AuthenticationNavigator;
