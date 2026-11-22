import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Button from '../components/Button';

export default function Index() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={require('../assets/images/Wallpaper2.jpg')}
        resizeMode="cover"
        style={styles.backgroundImage}
      />
      <View style={styles.overlay} />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[
          styles.content,
          {
            paddingTop: Math.max(insets.top + 16, 40),
            paddingBottom: Math.max(insets.bottom + 24, 34),
          },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View style={styles.brandMark} accessibilityElementsHidden>
            <View style={[styles.markBar, styles.markGreen]} />
            <View style={[styles.markBar, styles.markOrange]} />
            <View style={[styles.markBar, styles.markRed]} />
          </View>
          <View>
            <Text style={styles.brandName}>Market Yanga</Text>
            <Text style={styles.brandCaption}>ZAMBIA, IN EVERY WAY</Text>
          </View>
        </View>

        <View style={styles.hero}>
          <View style={styles.eyebrow}>
            <View style={styles.eyebrowDot} />
            <Text style={styles.eyebrowText}>LOCAL FINDS. BIG IMPACT.</Text>
          </View>
          <Text style={styles.title}>
            Discover{'\n'}what’s growing{'\n'}
            <Text style={styles.titleAccent}>near you.</Text>
          </Text>
          <Text style={styles.subtitle}>
            Shop proudly Zambian. Find the people and products making our
            communities thrive.
          </Text>
        </View>

        <View style={styles.footer}>
          <Button
            title="Explore the market"
            onPress={() => router.push('/welcome')}
            hasShadow
            buttonStyle={styles.welcomeButton}
            textStyle={styles.welcomeText}
          />
          <View style={styles.colorBar} accessibilityLabel="Zambian flag colors">
            <View style={[styles.colorSegment, styles.markGreen]} />
            <View style={[styles.colorSegment, styles.markOrange]} />
            <View style={[styles.colorSegment, styles.markRed]} />
            <View style={[styles.colorSegment, styles.markBlack]} />
          </View>
          <Text style={styles.footerText}>Proudly local. Made for everyone.</Text>
        </View>
      </ScrollView>
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
    backgroundColor: 'rgba(8, 36, 20, 0.66)',
  },
  scroll: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 28,
  },
  header: {
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
    marginRight: 12,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
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
  markBlack: {
    backgroundColor: '#171717',
  },
  brandName: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: 0.2,
  },
  brandCaption: {
    marginTop: 3,
    color: 'rgba(255,255,255,0.74)',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.8,
  },
  hero: {
    width: '100%',
    marginTop: 24,
  },
  eyebrow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  eyebrowDot: {
    width: 8,
    height: 8,
    marginRight: 9,
    borderRadius: 4,
    backgroundColor: '#EF7D00',
  },
  eyebrowText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.8,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 44,
    lineHeight: 49,
    fontWeight: '900',
    letterSpacing: -1.4,
  },
  titleAccent: {
    color: '#FF9A2E',
  },
  subtitle: {
    maxWidth: 330,
    marginTop: 16,
    color: 'rgba(255,255,255,0.84)',
    fontSize: 16,
    lineHeight: 25,
  },
  footer: {
    alignItems: 'center',
  },
  welcomeButton: {
    width: '100%',
    height: 60,
    borderRadius: 30,
    backgroundColor: '#198A00',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 8,
  },
  welcomeText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
  colorBar: {
    width: 68,
    height: 5,
    flexDirection: 'row',
    marginTop: 18,
    overflow: 'hidden',
    borderRadius: 3,
  },
  colorSegment: {
    flex: 1,
  },
  footerText: {
    marginTop: 10,
    color: 'rgba(255,255,255,0.7)',
    fontSize: 12,
    letterSpacing: 0.2,
  },
});