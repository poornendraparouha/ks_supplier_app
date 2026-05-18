import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native';

import colors from '../../theme/colors';
import spacing from '../../theme/spacing';

const AppInput = props => {
  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        style={styles.input}
        placeholderTextColor={colors.subText}
      />
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.md,
  },

  input: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    fontSize: 16,
    color: colors.text,
  },
});