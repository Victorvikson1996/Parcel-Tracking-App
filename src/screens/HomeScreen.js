import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Platform,
} from 'react-native';
import React from 'react';
import {COLORS} from '../utils';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  setTimeout(() => {
    navigation.navigate('OrderTrack');
  }, 3000);
  return (
    <SafeAreaView style={{backgroundColor: COLORS.yellow, flex: 1}}>
      <StatusBar barStyle="light-content" />
      <LottieView
        source={require('../assets/animations/5081-empty-box.json')}
        autoPlay
        speed={0.3}
        loop={false}
      />
      {/* <Text style={styles.textContainer}>
        Track Your Order Just In One Click
      </Text> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  LotieContainer: {
    height: 320,
    width: 220,
    backgroundColor: COLORS.white,
    borderRadius: 40,
    marginTop: 40,
    marginHorizontal: 20,
    overflow: 'hidden',
  },
  Lottie: {
    margin: 15,
    alignItems: 'center',
    height: '100%',
  },
  textContainer: {
    color: COLORS.white,
    fontSize: 25,
    fontWeight: 'bold',
    bottom: -670,
  },
});

export default HomeScreen;
