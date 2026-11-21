import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import ScreenWrapper from '../components/ScreenWrapper';

export default function Welcome() {
  const router = useRouter();

  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        <View style={styles.imageCard}>
          <View style={styles.decorativeCircle} />
          <Image
            source={require('../assets/icon.png')}
            style={styles.heroImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.copy}>
          <Text style={styles.eyebrow}>MARKET YANGA</Text>
          <Text style={styles.title}>Shop local.{"\n"}Live better.</Text>
          <Text style={styles.subtitle}>
            Discover trusted local businesses and find great products close to home.
          </Text>
        </View>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Get started"
          onPress={() => router.replace('/')}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.buttonText}>Get Started</Text>
          <Text style={styles.buttonArrow}>→</Text>
        </Pressable>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 24,
    backgroundColor: '#fff',
  },
  imageCard: {
    width: '100%',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 32,
    backgroundColor: '#eaf4ef',
  },
  decorativeCircle: {
    position: 'absolute',
    width: 230,
    height: 230,
    borderRadius: 115,
    backgroundColor: '#d2e8dc',
  },
  heroImage: {
    width: 220,
    height: 220,
  },
  copy: {
    width: '100%',
    alignItems: 'center',
  },
  eyebrow: {
    marginBottom: 10,
    color: '#4f806d',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 2,
  },
  title: {
    color: '#173f35',
    fontSize: 30,
    lineHeight: 38,
    fontWeight: '800',
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 12,
    maxWidth: 340,
    color: '#58665f',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    minHeight: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 28,
    backgroundColor: '#173f35',
  },
  buttonPressed: {
    opacity: 0.85,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
  },
  buttonArrow: {
    position: 'absolute',
    right: 22,
    color: '#fff',
    fontSize: 22,
  },
});
