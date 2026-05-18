import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ScreenWrapper from '../common/ScreenWrapper';

import colors from '../../theme/colors';
import typography from '../../theme/typography';

const SplashScreen = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.title}>
          KS Supplier 
        </Text>
      </View>
    </ScreenWrapper>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: typography.heading2,
    color: colors.primary,
    fontWeight: 'bold',
  },
});