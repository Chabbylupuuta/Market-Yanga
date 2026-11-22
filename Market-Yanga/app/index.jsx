import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import Button from '../components/Button';

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={require('../assets/images/Wallpaper2.jpg')}
        resizeMode="cover"
        style={styles.backgroundImage}
      />
      <View style={styles.overlay} />

      <View style={styles.center}>
        <Button
          title="Welcome"
          onPress={() => router.push('/welcome')}
          hasShadow
          buttonStyle={styles.welcomeButton}
          textStyle={styles.welcomeText}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#173f35',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(10, 28, 20, 0.28)',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  welcomeButton: {
    minWidth: 190,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    borderRadius: 29,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.72)',
    backgroundColor: 'rgba(255, 255, 255, 0.94)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.22,
    shadowRadius: 16,
    elevation: 8,
  },
  welcomeText: {
    color: '#173f35',
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: 0.6,
  },
});