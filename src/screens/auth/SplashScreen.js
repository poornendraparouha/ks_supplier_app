import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  StatusBar,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import ScreenWrapper from '../../components/common/ScreenWrapper';
import colors from '../../theme/colors';

const SplashScreen = ({ navigation }) => {
  return (
    <ScreenWrapper>
      <StatusBar
        backgroundColor="#F7F8F2"
        barStyle="dark-content"
      />

      <ImageBackground
        source={require('../../assets/images/splashBg.png')}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.overlay} />

        <View />

        {/* Logo + Tagline */}
        <View style={styles.centerContent}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logo}
          />

          <Text style={styles.tagline}>
            Smart Equipment. Stronger Farms.
          </Text>
        </View>

        {/* Buttons */}
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.primaryButton}
            onPress={() => navigation.navigate('Auth')}
          >
            <View style={styles.buttonContent}>
              <View style={styles.iconCircle}>
                <Ionicons
                  name="arrow-forward"
                  size={28}
                  color={colors.primary}
                />
              </View>

              <Text style={styles.primaryButtonText}>
                Get Started
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.secondaryButton}
          >
            <View style={styles.buttonContent}>
              <Ionicons
                name="globe-outline"
                size={30}
                color={colors.primary}
                style={styles.globeIcon}
              />

              <Text style={styles.secondaryButtonText}>
                Change Language
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScreenWrapper>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#F7F8F2',
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.15)',
  },

  centerContent: {
    alignItems: 'center',
    paddingHorizontal: 24,
  },

  logo: {
    width: 260,
    height: 180,
    resizeMode: 'contain',
  },

  tagline: {
    marginTop: -10,
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    letterSpacing: 0.4,
    fontWeight: '500',
  },

  bottomContainer: {
    paddingHorizontal: 24,
    paddingBottom: 35,
  },

  primaryButton: {
    backgroundColor: colors.primary,
    borderRadius: 22,
    paddingVertical: 18,
    paddingHorizontal: 22,
    marginBottom: 22,
  },

  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconCircle: {
    width: 52,
    height: 52,
    borderRadius: 50,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
  },

  primaryButtonText: {
    fontSize: 24,
    color: '#FFF',
    fontWeight: '700',
  },

  secondaryButton: {
    borderWidth: 1.5,
    borderColor: colors.primary,
    borderRadius: 22,
    paddingVertical: 18,
    paddingHorizontal: 22,
    backgroundColor: '#F2F2F2',
  },

  secondaryButtonText: {
    fontSize: 20,
    color: colors.primary,
    fontWeight: '700',
  },

  globeIcon: {
    position: 'absolute',
    left: 0,
  },
});