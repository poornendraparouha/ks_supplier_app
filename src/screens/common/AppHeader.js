import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import colors from '../../theme/colors';
import typography from '../../theme/typography';
import spacing from '../../theme/spacing';

const AppHeader = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing.md,
  },

  title: {
    fontSize: typography.title,
    fontWeight: 'bold',
    color: colors.text,
  },
});