import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import ScreenWrapper from '../../components/common/ScreenWrapper';
import AppButton from '../../components/common/AppButton';

import colors from '../../theme/colors';
import spacing from '../../theme/spacing';
import typography from '../../theme/typography';

const ApprovalPendingScreen = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.icon}>
          ⏳
        </Text>

        <Text style={styles.title}>
          Verification Pending
        </Text>

        <Text style={styles.subTitle}>
          Your documents have been submitted
          successfully.
        </Text>

        <Text style={styles.description}>
          Our admin team will review your
          profile and approve your account
          shortly.
        </Text>

        <AppButton
          title="Okay"
          style={styles.button}
        />
      </View>
    </ScreenWrapper>
  );
};

export default ApprovalPendingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
  },

  icon: {
    fontSize: 70,
    marginBottom: spacing.lg,
  },

  title: {
    fontSize: typography.heading2,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: spacing.md,
    textAlign: 'center',
  },

  subTitle: {
    fontSize: typography.body,
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.md,
  },

  description: {
    fontSize: typography.caption,
    color: colors.subText,
    textAlign: 'center',
    lineHeight: 22,
  },

  button: {
    width: '100%',
    marginTop: spacing.xl,
  },
});

