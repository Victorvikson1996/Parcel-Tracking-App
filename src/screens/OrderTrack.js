import {View, Text, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {COLORS} from '../utils';
import Input from '../components/Input';

const OrderTrack = () => {
  const [trackId, setTrackId] = React.useState('2745814581');
  return (
    <SafeAreaView
      style={{backgroundColor: COLORS.yellow, flex: 0.4, borderRadius: 40}}>
      <StatusBar barStyle="light-content" />
      <View style={styles.parcel}>
        <Text style={styles.textContainer}>Track Your Parcel </Text>
      </View>
      <View style={styles.trackbar}>
        <Input
          placeholder="Enter Your Order ID"
          onChangeText={text => setTrackId(text)}
          value={trackId}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // trackbar: {
  //   height: 40,
  //   width: '100%',
  //   backgroundColor: COLORS.white,
  //   borderRadius: 40,
  //   marginVertical: 10,
  //   marginHorizontal: 20,
  //   overflow: 'hidden',
  // },

  trackbar: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 10,
    width: '70%',
    height: 40,
    borderRadius: 5,
    overflow: 'hidden',
    alignSelf: 'center',
    paddingTop: 10,
  },
  textContainer: {
    color: COLORS.black,
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 20,
  },
  parcel: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
});
export default OrderTrack;
