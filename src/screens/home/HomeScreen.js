import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import ScreenWrapper from '../../components/common/ScreenWrapper';

import colors from '../../theme/colors';
import spacing from '../../theme/spacing';
import typography from '../../theme/typography';
import shadows from '../../theme/shadows';

const StatCard = ({ title, value }) => {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statValue}>
        {value}
      </Text>

      <Text style={styles.statTitle}>
        {title}
      </Text>
    </View>
  );
};

const QuickAction = ({ title }) => {
  return (
    <TouchableOpacity style={styles.quickAction}>
      <Text style={styles.quickActionText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const ActivityCard = ({
  title,
  amount,
}) => {
  return (
    <View style={styles.activityCard}>
      <View>
        <Text style={styles.activityTitle}>
          {title}
        </Text>

        <Text style={styles.activitySubTitle}>
          Completed Successfully
        </Text>
      </View>

      <Text style={styles.amount}>
        ₹ {amount}
      </Text>
    </View>
  );
};

const HomeScreen = () => {
  return (
    <ScreenWrapper>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {/* Header */}

        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>
              Welcome Back 👋
            </Text>

            <Text style={styles.userName}>
              KS Supplier
            </Text>
          </View>

          <View style={styles.profileImage}>
            <Text style={styles.profileText}>
              KS
            </Text>
          </View>
        </View>

        {/* Stats */}

        <View style={styles.statsContainer}>
          <StatCard
            title="Total Earnings"
            value="₹ 25K"
          />

          <StatCard
            title="Bookings"
            value="18"
          />
        </View>

        <View style={styles.statsContainer}>
          <StatCard
            title="Equipment"
            value="12"
          />

          <StatCard
            title="Pending"
            value="4"
          />
        </View>

        {/* Quick Actions */}

        <Text style={styles.sectionTitle}>
          Quick Actions
        </Text>

        <View style={styles.quickActionsContainer}>
          <QuickAction title="Add Equipment" />

          <QuickAction title="Bookings" />

          <QuickAction title="Availability" />

          <QuickAction title="Wallet" />
        </View>

        {/* Recent Activity */}

        <Text style={styles.sectionTitle}>
          Recent Activity
        </Text>

        <ActivityCard
          title="Tractor Booking"
          amount="4500"
        />

        <ActivityCard
          title="Harvester Service"
          amount="7000"
        />

        <ActivityCard
          title="Rotavator Booking"
          amount="3200"
        />
      </ScrollView>
    </ScreenWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
    paddingBottom: spacing.xxl,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xl,
  },

  greeting: {
    fontSize: typography.body,
    color: colors.subText,
  },

  userName: {
    fontSize: typography.heading3,
    fontWeight: 'bold',
    color: colors.text,
    marginTop: spacing.xs,
  },

  profileImage: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: typography.body,
  },

  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },

  statCard: {
    width: '48%',
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: spacing.lg,
    ...shadows.light,
  },

  statValue: {
    fontSize: typography.heading3,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: spacing.sm,
  },

  statTitle: {
    fontSize: typography.caption,
    color: colors.subText,
  },

  sectionTitle: {
    fontSize: typography.title,
    fontWeight: 'bold',
    color: colors.text,
    marginTop: spacing.xl,
    marginBottom: spacing.md,
  },

  quickActionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  quickAction: {
    width: '48%',
    backgroundColor: colors.primary,
    paddingVertical: spacing.lg,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: spacing.md,
  },

  quickActionText: {
    color: colors.white,
    fontWeight: '600',
    fontSize: typography.body,
  },

  activityCard: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: spacing.lg,
    marginBottom: spacing.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...shadows.light,
  },

  activityTitle: {
    fontSize: typography.body,
    fontWeight: '600',
    color: colors.text,
  },

  activitySubTitle: {
    color: colors.subText,
    marginTop: spacing.xs,
  },

  amount: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: typography.body,
  },
});