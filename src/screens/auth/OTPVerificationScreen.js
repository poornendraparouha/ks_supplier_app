import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import ScreenWrapper from '../../components/common/ScreenWrapper';
import AppButton from '../../components/common/AppButton';

import colors from '../../theme/colors';
import spacing from '../../theme/spacing';
import typography from '../../theme/typography';

const OTPVerificationScreen = ({
  navigation,
}) => {
  const [otp, setOtp] = useState([
  '',
  '',
  '',
  '',
  '',
  '',
]);

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.title}>
          OTP Verification
        </Text>

        <Text style={styles.subTitle}>
          Enter the OTP sent to your mobile
          number
        </Text>

        {/* OTP Boxes */}

        <View style={styles.otpContainer}>
          {otp.map((item, index) => (
            <View
              key={index}
              style={styles.otpBox}
            >
              <Text style={styles.otpText}>
                
              </Text>
            </View>
          ))}
        </View>

        {/* Timer */}

        <Text style={styles.timerText}>
          Resend OTP in 00:30
        </Text>

        {/* Resend */}

        <TouchableOpacity>
          <Text style={styles.resendText}>
            Resend OTP
          </Text>
        </TouchableOpacity>

        {/* Button */}

        <AppButton
          title="Verify OTP"
          style={styles.button}
          onPress={() =>
            navigation.navigate(
              'BasicDetails',
            )
          }
        />
      </View>
    </ScreenWrapper>
  );
};

export default OTPVerificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
    justifyContent: 'center',
  },

  title: {
    fontSize: typography.heading2,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },

  subTitle: {
    fontSize: typography.body,
    color: colors.subText,
    textAlign: 'center',
    marginBottom: spacing.xl,
  },

  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.lg,
  },

    otpBox: {
    width: 50,
    height: 55,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    },

  otpText: {
    fontSize: typography.title,
    fontWeight: 'bold',
    color: colors.text,
  },

  timerText: {
    textAlign: 'center',
    color: colors.subText,
    marginBottom: spacing.md,
  },

  resendText: {
    textAlign: 'center',
    color: colors.primary,
    fontWeight: '600',
  },

  button: {
    marginTop: spacing.xl,
  },
});