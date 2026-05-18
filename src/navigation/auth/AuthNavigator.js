import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../../screens/auth/SplashScreen';
import AuthScreen from '../../screens/auth/AuthScreen';
import OTPVerificationScreen from '../../screens/auth/OTPVerificationScreen';
import BasicDetailsScreen from '../../screens/auth/BasicDetailsScreen';
import KYCUploadScreen from '../../screens/auth/KYCUploadScreen';
import ApprovalPendingScreen from '../../screens/auth/ApprovalPendingScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen
        name="OTPVerification"
        component={OTPVerificationScreen}
      />
      <Stack.Screen
        name="BasicDetails"
        component={BasicDetailsScreen}
      />
      <Stack.Screen
        name="KYCUpload"
        component={KYCUploadScreen}
      />
      <Stack.Screen
        name="ApprovalPending"
        component={ApprovalPendingScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;