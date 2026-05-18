import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './auth/AuthNavigator';
import AppNavigator from './app/AppNavigator';

import useAuth from '../hooks/useAuth';

const MainNavigator = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <AppNavigator />
      ) : (
        <AuthNavigator />
      )}
    </NavigationContainer>
  );
};

export default MainNavigator;