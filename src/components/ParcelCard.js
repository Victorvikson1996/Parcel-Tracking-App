import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import {COLORS} from '../utils';

const {width, height} = Dimensions.get('window');

const ParcelCard = ({icon, label}) => {
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image source={icon} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: width / 1.1,
    alignSelf: 'center',
    backgroundColor: '#e3e3e3',
    marginVertical: 10,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  image: {
    width: width / 4,
    height: width / 4,
  },
});

export default ParcelCard;
