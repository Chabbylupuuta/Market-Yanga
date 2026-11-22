import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import Button from '../components/Button';
import ScreenWrapper from '../components/ScreenWrapper';

export default function Account() {
  const router = useRouter();

  return (
    <ScreenWrapper bg="#F7F9F5">
      <StatusBar style="dark" />
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.card}>
          <View style={styles.eyebrow}>
            <View style={styles.eyebrowDot} />
            <Text style={styles.eyebrowText}>MADE FOR ZAMBIA</Text>
          </View>
          <Text style={styles.title}>Good things grow</Text>
          <Text style={styles.titleAccent}>together.</Text>
          <Text style={styles.subtitle}>
            Log in or create an account to find local favorites and support
            businesses in your community.
          </Text>

          <View style={styles.actions}>
            <Button
              title="Log in"
              onPress={() => router.push('/Login')}
              hasShadow
              buttonStyle={styles.loginButton}
              textStyle={styles.loginButtonText}
            />
            <Button
              title="Create an account"
              onPress={() => router.push('/Signup')}
              buttonStyle={styles.signupButton}
              textStyle={styles.signupButtonText}
            />
          </View>
          <View style={styles.colorBar} accessibilityLabel="Zambian flag colors">
            <View style={[styles.colorSegment, styles.markOrange]} />
            <View style={[styles.colorSegment, styles.markBlack]} />
            <View style={[styles.colorSegment, styles.markRed]} />
          </View>
        </View>
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
    paddingVertical: 24,
  },
  card: {
    padding: 24,
    borderWidth: 1,
    borderColor: '#E7EDE4',
    borderRadius: 28,
    backgroundColor: '#FFFFFF',
    shadowColor: '#174A22',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.08,
    shadowRadius: 22,
    elevation: 4,
  },
  eyebrow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  eyebrowDot: {
    width: 8,
    height: 8,
    marginRight: 8,
    borderRadius: 4,
    backgroundColor: '#EF7D00',
  },
  eyebrowText: {
    color: '#748174',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.3,
  },
  title: {
    color: '#174A22',
    fontSize: 31,
    lineHeight: 37,
    fontWeight: '800',
  },
  titleAccent: {
    color: '#EF7D00',
    fontSize: 31,
    lineHeight: 37,
    fontWeight: '800',
  },
  subtitle: {
    marginTop: 10,
    color: '#5F6B60',
    fontSize: 16,
    lineHeight: 24,
  },
  actions: {
    gap: 14,
    marginTop: 32,
  },
  loginButton: {
    minHeight: 56,
    borderRadius: 28,
    backgroundColor: '#198A00',
  },
  loginButtonText: {
    fontSize: 17,
    fontWeight: '800',
  },
  signupButton: {
    minHeight: 56,
    borderWidth: 1,
    borderColor: '#D5E2D1',
    borderRadius: 28,
    backgroundColor: '#F6F9F4',
  },
  signupButtonText: {
    color: '#174A22',
    fontSize: 17,
    fontWeight: '800',
  },
  colorBar: {
    width: 56,
    height: 5,
    flexDirection: 'row',
    marginTop: 22,
    overflow: 'hidden',
    borderRadius: 3,
  },
  colorSegment: {
    flex: 1,
  },
  footer: {
    marginTop: 18,
    color: '#748174',
    fontSize: 12,
    textAlign: 'center',
  },
});
