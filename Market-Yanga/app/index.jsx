import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import ScreenWrapper from '../components/ScreenWrapper';

export default function Index() {
  const router = useRouter();

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to </Text>
        <Button title="Market Yanga" onPress={() => router.push('/welcome')} />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    marginBottom: 16,
    color: '#173f35',
    fontSize: 30,
    fontWeight: '700',
  },
});