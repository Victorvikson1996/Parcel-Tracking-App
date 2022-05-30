import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const OrderTrack = () => {
  return (
    <View style={styles.container}>
      <Text>OrderTrack</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default OrderTrack;
