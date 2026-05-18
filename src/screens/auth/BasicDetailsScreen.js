import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

import ScreenWrapper from '../../components/common/ScreenWrapper';
import AppInput from '../../components/common/AppInput';
import AppButton from '../../components/common/AppButton';

import colors from '../../theme/colors';
import spacing from '../../theme/spacing';
import typography from '../../theme/typography';

const BasicDetailsScreen = ({
  navigation,
}) => {
  return (
    <ScreenWrapper>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>
          Basic Details
        </Text>

        <Text style={styles.subTitle}>
          Complete your profile information
        </Text>

        <View style={styles.formContainer}>
          <AppInput placeholder="Full Name" />

          <AppInput placeholder="Business Name" />

          <AppInput
            placeholder="Email Address"
            keyboardType="email-address"
          />

          <AppInput placeholder="Address" />

          <AppInput placeholder="City" />

          <AppButton
            title="Continue"
            style={styles.button}
            onPress={() =>
              navigation.navigate(
                'KYCUpload',
              )
            }
          />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default BasicDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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

  formContainer: {
    width: '100%',
  },

  button: {
    marginTop: spacing.md,
  },
});