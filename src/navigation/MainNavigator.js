import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './auth/AuthNavigator';
import AppNavigator from './app/AppNavigator';

import useAuth from '../hooks/useAuth';

const MainNavigator = () => {
  const { isLoggedIn } = useAuth();
    console.log(isLoggedIn);
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