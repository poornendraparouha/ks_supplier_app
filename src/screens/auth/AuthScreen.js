import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import ScreenWrapper from '../../components/common/ScreenWrapper';
import AppInput from '../../components/common/AppInput';
import AppButton from '../../components/common/AppButton';

import colors from '../../theme/colors';
import spacing from '../../theme/spacing';
import typography from '../../theme/typography';
// import useAuth from '../../hooks/useAuth';

const AuthScreen = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState('login');
//   const { login } = useAuth();

  return (
    <ScreenWrapper>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}

        <View style={styles.headerContainer}>
          <Text style={styles.title}>
            KS Supplier App
          </Text>

          <Text style={styles.subTitle}>
            Agriculture Equipment Provider Platform
          </Text>
        </View>

        {/* Toggle Buttons */}

        <View style={styles.toggleContainer}>
          <TouchableOpacity
            style={[
              styles.toggleButton,
              selectedTab === 'login' &&
                styles.activeTab,
            ]}
            onPress={() => setSelectedTab('login')}
          >
            <Text
              style={[
                styles.toggleText,
                selectedTab === 'login' &&
                  styles.activeText,
              ]}
            >
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.toggleButton,
              selectedTab === 'register' &&
                styles.activeTab,
            ]}
            onPress={() => setSelectedTab('register')}
          >
            <Text
              style={[
                styles.toggleText,
                selectedTab === 'register' &&
                  styles.activeText,
              ]}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>

        {/* Form */}

        <View style={styles.formContainer}>
          {selectedTab === 'register' && (
            <>
              <AppInput placeholder="Full Name" />

              <AppInput placeholder="Email Address" />
            </>
          )}

          <AppInput
            placeholder="Mobile Number"
            keyboardType="phone-pad"
          />

          <AppInput
            placeholder="Password"
            secureTextEntry
          />

          {selectedTab === 'register' && (
            <AppInput
              placeholder="Confirm Password"
              secureTextEntry
            />
          )}

          <AppButton
            title={
                selectedTab === 'login'
                ? 'Login'
                : 'Register'
            }
            onPress={() =>
                navigation.navigate(
                'OTPVerification',
                )
            }
            />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: spacing.lg,
    justifyContent: 'center',
  },

  headerContainer: {
    marginBottom: spacing.xl,
    alignItems: 'center',
  },

  title: {
    fontSize: typography.heading2,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: spacing.sm,
  },

  subTitle: {
    fontSize: typography.body,
    color: colors.subText,
    textAlign: 'center',
  },

  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 12,
    marginBottom: spacing.xl,
    overflow: 'hidden',
  },

  toggleButton: {
    flex: 1,
    paddingVertical: spacing.md,
    alignItems: 'center',
  },

  activeTab: {
    backgroundColor: colors.primary,
  },

  toggleText: {
    fontSize: typography.body,
    color: colors.text,
    fontWeight: '600',
  },

  activeText: {
    color: colors.white,
  },

  formContainer: {
    width: '100%',
  },
});