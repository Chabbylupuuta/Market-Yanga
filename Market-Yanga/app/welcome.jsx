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
          <View style={styles.brandMark} accessibilityElementsHidden>
            <View style={[styles.markBar, styles.markGreen]} />
            <View style={[styles.markBar, styles.markOrange]} />
            <View style={[styles.markBar, styles.markRed]} />
          </View>
          <View style={styles.brand}>
            <Text style={styles.brandName}>Market Yanga</Text>
            <Text style={styles.brandCaption}>ZAMBIA, IN EVERY WAY</Text>
          </View>
          <View style={styles.headerBadge}>
            <Text style={styles.headerBadgeText}>LOCAL</Text>
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
          accessibilityLabel="Get started with Market Yanga"
          onPress={() => router.push('/account')}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.buttonText}>Get started</Text>
          <View style={styles.arrowCircle}>
            <Text style={styles.buttonArrow}>→</Text>
          </View>
        </Pressable>

        <View style={styles.zambianAccent} />
        <Text style={styles.footer}>Good things grow when we shop local.</Text>
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
    backgroundColor: 'transparent',
  },
  header: {
    width: '100%',
    minHeight: 72,
    flexDirection: 'row',
    alignItems: 'center',
  },
  brandMark: {
    width: 42,
    height: 42,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: 9,
    borderRadius: 14,
    backgroundColor: '#174A22',
  },
  markBar: {
    width: 5,
    marginHorizontal: 2,
    borderRadius: 3,
  },
  markGreen: {
    height: 13,
    backgroundColor: '#198A00',
  },
  markOrange: {
    height: 20,
    backgroundColor: '#EF7D00',
  },
  markRed: {
    height: 16,
    backgroundColor: '#DE2010',
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
  brandCaption: {
    marginTop: 3,
    color: '#748174',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.4,
  },
  headerBadge: {
    marginLeft: 'auto',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 14,
    backgroundColor: '#E8F1E5',
  },
  headerBadgeText: {
    color: '#198A00',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
  },
  heroCard: {
    width: '100%',
    height: 280,
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
    backgroundColor: '#174A22',
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
    width: 68,
    height: 5,
    marginTop: 16,
    borderRadius: 3,
    backgroundColor: '#EF7D00',
  },
  footer: {
    marginTop: 14,
    color: '#5F6B60',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
});
