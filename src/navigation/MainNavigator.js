import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './auth/AuthNavigator';
// import AppNavigator from './app/AppNavigator';

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />

      {/* Later */}
      {/* <AppNavigator /> */}
    </NavigationContainer>
  );
};

export default MainNavigator;