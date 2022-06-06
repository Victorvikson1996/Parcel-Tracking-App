import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import React from 'react';
import {COLORS, Items} from '../utils';
import {Searchbar} from 'react-native-paper';
import LottieView from 'lottie-react-native';
import {ParcelCard, Button, Input, IconFlatlist} from '../components';

const {width, height} = Dimensions.get('window');

const renderItem = ({item, index}) => {
  return <ParcelCard item={item} index={index} />;
};

const Card = () => {
  const [itemIcon, setItemIcon] = React.useState(Items);
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>Track Your Order Just In One Click</Text>
      <LottieView
        source={require('../assets/animations/50158-delivery-cart-box.json')}
        autoPlay
        speed={0.3}
        loop={true}
      />
      <View style={styles.inputContainer}></View>
    </View>
  );
};

{
  /* <View style={styles.buttonContainer}>
  <Button label="Track Parcel" />
</View>; */
}

const OrderTrack = props => {
  const [trackIcon, setTrackIcon] = React.useState('');
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <StatusBar barStyle="light-content" />

      <View style={styles.textContainer}>
        <Text style={styles.text}>Track Your Parcel</Text>
      </View>
      <View style={styles.inputContainer}>
        <Input placeholder="Enter Your Track ID" style={styles.textInput} />
      </View>
      <View style={{alignItems: 'center'}}>
        <Card />
      </View>
      <View style={styles.parcelContainer}>
        <IconFlatlist />
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

  textContainer: {
    padding: 20,
    flexDirection: 'row',
    marginRight: 20,
    top: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  card: {
    backgroundColor: COLORS.yellow,
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
    height: height * 0.25,
    width: '90%',
  },
  cardText: {
    color: COLORS.black,
    fontSize: 14,
    fontWeight: '600',
  },

  textInput: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    height: 50,
    paddingHorizontal: 10,
    borderColor: COLORS.grey,
    borderWidth: 1,
    width: '80%',
  },
  textInput2: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    height: 50,
    paddingHorizontal: 10,
  },
  inputContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  buttonContainer: {},
  SafeAreaView: {
    backgroundColor: COLORS.white,
    width: width,
    height: height,
  },
  parcelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginHorizontal: 20,
    // marginVertical: 20,
  },
});
export default OrderTrack;
