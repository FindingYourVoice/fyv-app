import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Slide01 = () => {
  return (
    <View style={[styles.container, { backgroundColor: '#0970ac' }]}>
      {/* <Image style={styles.image} source={placeholder} /> */}
      <View style={styles.headline}>
        <Text style={styles.text}>Right to</Text>
        <Text style={styles.textBold}> KNOW</Text>
      </View>
      <Text style={styles.textDetail}>
        about the dangers of our jobs and how we are protected.
      </Text>
    </View>
  );
};

export const Slide02 = () => {
  return (
    <View style={[styles.container, { backgroundColor: '#abcc4c' }]}>
      {/* <Image style={styles.image} source={placeholder} /> */}
      <View style={styles.headline}>
        <Text style={styles.text}>Right to</Text>
        <Text style={styles.textBold}> PARTICIPATE</Text>
      </View>
      <Text style={styles.textDetail}>
        in activities affecting our Health and Safety.
      </Text>
    </View>
  );
};

export const Slide03 = () => {
  return (
    <View style={[styles.container, { backgroundColor: '#535996' }]}>
      {/* <Image style={styles.image} source={placeholder} /> */}
      <View style={styles.headline}>
        <Text style={styles.text}>Right to</Text>
        <Text style={styles.textBold}> REFUSE WORK</Text>
      </View>
      <Text style={styles.textDetail}>
        that may be dangerous to ourselves or others.
      </Text>
    </View>
  );
};

export const Slide04 = () => {
  return (
    <View style={[styles.container, { backgroundColor: '#69924f' }]}>
      {/* <Image style={styles.image} source={placeholder} /> */}
      <View style={styles.headlineLonger}>
        <Text style={styles.text}>Right to be</Text>
        <Text style={styles.textBold}>FREE FROM REPRISAL</Text>
      </View>
      <Text style={styles.textDetail}>
        for using our Health and Safety rights.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 5,
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    marginBottom: 48,
  },
  headline: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  headlineLonger: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  textBold: {
    color: 'rgba(255,255,255,1)',
    fontSize: 24,
    fontWeight: 'bold',
  },
  textDetail: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16,
    textAlign: 'center',
    width: '75%',
    marginTop: 20,
  },
  text: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 24,
  },
  image: {
    height: 120,
    resizeMode: 'contain',
  },
});