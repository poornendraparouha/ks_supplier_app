import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import ScreenWrapper from '../../components/common/ScreenWrapper';
import AppButton from '../../components/common/AppButton';

import colors from '../../theme/colors';
import spacing from '../../theme/spacing';
import typography from '../../theme/typography';

const UploadBox = ({ title }) => {
  return (
    <TouchableOpacity style={styles.uploadBox}>
      <Text style={styles.uploadTitle}>
        {title}
      </Text>

      <Text style={styles.uploadText}>
        Tap to Upload
      </Text>
    </TouchableOpacity>
  );
};

const KYCUploadScreen = ({
  navigation,
}) => {
  return (
    <ScreenWrapper>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>
          KYC Upload
        </Text>

        <Text style={styles.subTitle}>
          Upload your verification documents
        </Text>

        <View style={styles.formContainer}>
          <UploadBox title="Upload Aadhaar Card" />

          <UploadBox title="Upload PAN Card" />

          <UploadBox title="Upload Driving License" />

          <AppButton
            title="Submit Documents"
            style={styles.button}
            onPress={() =>
              navigation.navigate(
                'ApprovalPending',
              )
            }
          />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default KYCUploadScreen;

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
    textAlign: 'center',
    marginBottom: spacing.sm,
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

  uploadBox: {
    height: 120,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: colors.border,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    marginBottom: spacing.lg,
  },

  uploadTitle: {
    fontSize: typography.body,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.sm,
  },

  uploadText: {
    color: colors.primary,
    fontWeight: '500',
  },

  button: {
    marginTop: spacing.md,
  },
});

