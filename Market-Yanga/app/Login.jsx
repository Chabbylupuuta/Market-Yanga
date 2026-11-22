import React from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import Button from '../components/Button';
import ScreenWrapper from '../components/ScreenWrapper';
import { HugeiconsIcon } from '@hugeicons/react-native';
import {
  ArrowRight01Icon,
  LockKeyholeIcon,
  Mail01Icon,
  Login01Icon,
} from '@hugeicons/core-free-icons';

export default function Login() {
  const router = useRouter();

  return (
    <ScreenWrapper bg="#F7F9F5">
      <StatusBar style="dark" />
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.intro}>
          <View style={styles.eyebrow}>
            <View style={styles.eyebrowIcon}>
              <HugeiconsIcon
                icon={Login01Icon}
                size={16}
                color="#EF7D00"
                strokeWidth={1.8}
              />
            </View>
            <Text style={styles.eyebrowText}>YOUR LOCAL MARKET AWAITS</Text>
          </View>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.titleAccent}>back.</Text>
          <Text style={styles.subtitle}>Log in to pick up where you left off.</Text>
        </View>

        <View style={styles.formCard}>
          <Text style={styles.formHeading}>Log in to your account</Text>
          <Text style={styles.formHint}>Your community is just a step away.</Text>
          <View style={styles.form}>
            <View style={styles.inputRow}>
              <HugeiconsIcon icon={Mail01Icon} size={20} color="#748174" strokeWidth={1.8} />
              <TextInput
                accessibilityLabel="Email address"
                autoCapitalize="none"
                keyboardType="email-address"
                placeholder="Email address"
                placeholderTextColor="#7A857D"
                style={styles.input}
              />
            </View>
            <View style={styles.inputRow}>
              <HugeiconsIcon icon={LockKeyholeIcon} size={20} color="#748174" strokeWidth={1.8} />
              <TextInput
                accessibilityLabel="Password"
                placeholder="Password"
                placeholderTextColor="#7A857D"
                secureTextEntry
                style={styles.input}
              />
            </View>
            <Button
              title="Log in"
              onPress={() =>
                Alert.alert('Coming soon', 'Login is not connected yet.')
              }
              hasShadow
              buttonStyle={styles.submitButton}
              textStyle={styles.submitButtonText}
              icon={
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  size={20}
                  color="#FFFFFF"
                  strokeWidth={2}
                />
              }
            />
          </View>
        </View>

        <Text style={styles.switchPrompt}>
          New to Market Yanga?{' '}
          <Text
            accessibilityRole="link"
            onPress={() => router.push('/Signup')}
            style={styles.link}
          >
            Sign up
          </Text>
        </Text>
        <Text style={styles.footer}>Proudly local. Made for everyone.</Text>
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  intro: {
    marginBottom: 24,
  },
  eyebrow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  eyebrowDot: {
    width: 8,
    height: 8,
    marginRight: 8,
    borderRadius: 4,
    backgroundColor: '#EF7D00',
  },
  eyebrowIcon: {
    width: 28,
    height: 28,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    backgroundColor: '#FFF1DF',
  },
  eyebrowText: {
    color: '#748174',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.3,
  },
  title: {
    color: '#174A22',
    fontSize: 36,
    lineHeight: 40,
    fontWeight: '800',
  },
  titleAccent: {
    color: '#EF7D00',
    fontSize: 36,
    lineHeight: 40,
    fontWeight: '800',
  },
  subtitle: {
    marginTop: 10,
    color: '#5F6B60',
    fontSize: 16,
  },
  formCard: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#E7EDE4',
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    shadowColor: '#174A22',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.07,
    shadowRadius: 18,
    elevation: 3,
  },
  formHeading: {
    color: '#174A22',
    fontSize: 17,
    fontWeight: '800',
  },
  formHint: {
    marginTop: 5,
    color: '#748174',
    fontSize: 13,
  },
  form: {
    gap: 14,
    marginTop: 20,
  },
  inputRow: {
    minHeight: 54,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E1E9DD',
    borderRadius: 15,
    backgroundColor: '#F8FAF7',
  },
  input: {
    flex: 1,
    minHeight: 52,
    paddingHorizontal: 12,
    color: '#174A22',
    fontSize: 16,
  },
  submitButton: {
    minHeight: 56,
    marginTop: 6,
    borderRadius: 28,
    backgroundColor: '#198A00',
  },
  submitButtonText: {
    fontSize: 17,
    fontWeight: '800',
  },
  switchPrompt: {
    marginTop: 22,
    color: '#5F6B60',
    fontSize: 15,
    textAlign: 'center',
  },
  link: {
    color: '#198A00',
    fontWeight: '800',
  },
  footer: {
    marginTop: 24,
    color: '#748174',
    fontSize: 12,
    textAlign: 'center',
  },
});
