import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../../screens/home/HomeScreen';
import EquipmentListScreen from '../../screens/equipment/EquipmentListScreen';
import BookingRequestScreen from '../../components/booking/BookingRequestScreen';
import WalletScreen from '../../screens/wallet/WalletScreen';
import ProfileScreen from '../../screens/profile/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Equipment" component={EquipmentListScreen} />
      <Tab.Screen name="Bookings" component={BookingRequestScreen} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;