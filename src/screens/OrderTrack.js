import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Dimensions,
  PixelRatio,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {COLORS, Items} from '../utils';
import {Searchbar} from 'react-native-paper';
import LottieView from 'lottie-react-native';
import {ParcelCard, Input, Button, IconFlatlist} from '../components';
import axios from 'axios';
import fetchTrack from '../api/fetchTrack';

const {width, height} = Dimensions.get('window');

const Card = () => {
  const [itemIcon, setItemIcon] = React.useState(Items);

  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>Track Your Order Just In One Click</Text>
      <LottieView
        source={require('../assets/animations/33318-parcel-delivery-tracking.json')}
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

const PromoCard = () => {
  return (
    <View style={styles.promocontainer}>
      <LottieView
        source={require('../assets/animations/36289-super-sale.json')}
        autoPlay
        speed={0.3}
        loop={true}
      />
    </View>
  );
};

const OrderTrack = ({onPress, navigation}) => {
  const [trackId, setTrackId] = React.useState('');

  const fetchTrackData = async () => {
    const response = await fetchTrack(trackId);
    console.log(response);
  };

  // React.useEffect(() => {
  //   fetchTrackData();
  // }, [trackId]);

  const active = () => {
    if (trackId.length > 0) {
      return (
        <Button label="Track" onPress={() => navigation.navigate('TimeLine')} />
      );
    } else {
      return <Button label="Track" disabled />;
    }
  };

  const keyboardType = () => {
    if (trackId.length > 0) {
      return 'default';
    } else {
      return 'numeric';
    }
  };

  return (
    <SafeAreaView style={styles.SafeAreaView} nestedScrollEnabled={true}>
      <ScrollView>
        <StatusBar barStyle="light-content" />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Track Your Parcel</Text>
        </View>
        <View style={styles.containerBox}>
          <View style={styles.inputContainer}>
            <Input
              placeholder="Enter Your Track ID"
              style={styles.textInput}
              value={trackId}
              onChangeText={text => setTrackId(text)}
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.buttonContainer}>{active()}</View>
        </View>
        <View>
          <PromoCard />
        </View>

        <View style={{alignItems: 'center'}}>
          <Card />
        </View>
        <View style={styles.parcelContainer}>
          <IconFlatlist />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerBox: {
    flexDirection: 'row',
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
    backgroundColor: COLORS.white,
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
    height: height * 0.25,
    width: '90%',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardText: {
    color: COLORS.black,
    fontSize: 14,
    fontWeight: 'bold',
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
    width: width * 0.6,
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    backgroundColor: COLORS.black,
    color: COLORS.white,
    borderRadius: 12,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '600',
  },
  promocontainer: {
    backgroundColor: COLORS.yellow,
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
    height: height * 0.16,
    width: '90%',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageContainer: {},
});
export default OrderTrack;
