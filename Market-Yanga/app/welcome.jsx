import React from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import ScreenWrapper from '../components/ScreenWrapper';

export default function Welcome() {
  const router = useRouter();

  return (
    <ScreenWrapper bg="#F7F9F5">
      <StatusBar style="dark" />
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View style={styles.logoSlot} accessibilityLabel="Logo placeholder">
            <Text style={styles.logoSlotText}>LOGO</Text>
          </View>
          <View style={styles.brand}>
            <Text style={styles.brandName}>Market Yanga</Text>
            <View style={styles.brandUnderline} />
          </View>
        </View>

        <View style={styles.heroCard}>
          <Image
            source={require('../assets/images/Wallpaer3.jpg')}
            style={styles.heroImage}
            resizeMode="cover"
          />
          <View style={styles.heroOverlay} />
          <View style={styles.heroBadge}>
            <View style={styles.badgeDot} />
            <Text style={styles.badgeText}>MADE FOR ZAMBIA</Text>
          </View>
        </View>

        <View style={styles.copy}>
          <Text style={styles.title}>Buy local.</Text>
          <Text style={styles.titleAccent}>Grow together.</Text>
          <Text style={styles.subtitle}>
            Discover trusted Zambian products and support local businesses in your community.
          </Text>
        </View>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Explore Market Yanga"
          onPress={() => router.replace('/')}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.buttonText}>Explore the market</Text>
          <View style={styles.arrowCircle}>
            <Text style={styles.buttonArrow}>→</Text>
          </View>
        </Pressable>

        <View style={styles.zambianAccent} />
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 18,
    backgroundColor: '#F7F9F5',
  },
  header: {
    width: '100%',
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoSlot: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#8A9B86',
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
  },
  logoSlotText: {
    color: '#8A9B86',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 1,
  },
  brand: {
    marginLeft: 12,
  },
  brandName: {
    color: '#174A22',
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '800',
  },
  brandUnderline: {
    width: 34,
    height: 3,
    marginTop: 3,
    borderRadius: 2,
    backgroundColor: '#EF7D00',
  },
  heroCard: {
    width: '100%',
    height: 300,
    marginTop: 8,
    overflow: 'hidden',
    borderRadius: 28,
    backgroundColor: '#DDE8D8',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 110,
    backgroundColor: 'rgba(23,74,34,0.18)',
  },
  heroBadge: {
    position: 'absolute',
    left: 16,
    bottom: 16,
    height: 34,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderRadius: 17,
    backgroundColor: '#FFFFFF',
  },
  badgeDot: {
    width: 8,
    height: 8,
    marginRight: 7,
    borderRadius: 4,
    backgroundColor: '#DE2010',
  },
  badgeText: {
    color: '#174A22',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
  },
  copy: {
    width: '100%',
    marginTop: 24,
    alignItems: 'flex-start',
  },
  title: {
    color: '#174A22',
    fontSize: 34,
    lineHeight: 40,
    fontWeight: '800',
  },
  titleAccent: {
    color: '#EF7D00',
    fontSize: 34,
    lineHeight: 40,
    fontWeight: '800',
  },
  subtitle: {
    marginTop: 10,
    maxWidth: 360,
    color: '#5F6B60',
    fontSize: 16,
    lineHeight: 25,
  },
  button: {
    width: '100%',
    height: 60,
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 22,
    paddingRight: 8,
    borderRadius: 30,
    backgroundColor: '#198A00',
  },
  buttonPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.99 }],
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '800',
  },
  arrowCircle: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
  },
  buttonArrow: {
    color: '#174A22',
    fontSize: 24,
    lineHeight: 28,
  },
  zambianAccent: {
    width: 72,
    height: 5,
    marginTop: 16,
    borderRadius: 3,
    backgroundColor: '#DE2010',
  },
});
