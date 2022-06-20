import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  PixelRatio,
} from 'react-native';
import React, {useEffect} from 'react';
import moment from 'moment';
import {COLORS} from '../utils';
import {Timeline} from 'react-native-just-timeline';

const {height, width} = Dimensions.get('screen');
const heightPixel = height => {
  return height * PixelRatio.get();
};

const widthPixel = width => {
  return width * PixelRatio.get();
};

const data = [
  {
    title: ({styles}) => (
      <View>
        <Text style={{fontSize: 10, color: '#999', marginBottom: 7}}>
          {moment().format('lll')}
        </Text>
        <Text style={[styles, {marginBottom: 0, color: '#00b48b'}]}>
          Parcel out for Delivery
        </Text>
      </View>
    ),
    description: {
      content: 'Parcel Left Ghandi International Airport New Delhi',
    },
    time: {
      content: moment().format('ll'),
      style: {
        paddingTop: 8,
      },
    },
    icon: {
      content: 'check',
      style: {
        width: 35,
        height: 35,
        backgroundColor: '#00b48b',
        color: '#FFF',
        borderColor: '#FFF',
        fontSize: 16,
        paddingTop: 6,
        borderRadius: 18,
      },
    },
  },
  {
    title: ({styles}) => (
      <View>
        <Text style={{fontSize: 10, color: '#999', marginBottom: 7}}>
          {moment().format('lll')}
        </Text>
        <Text style={[styles, {marginBottom: 0, color: '#fccd05'}]}>
          Parcel In Transit
        </Text>
      </View>
    ),
    description: {
      content: 'Parcel arrive at Doha International Airport Doha',
    },
    time: {
      content: moment().format('ll'),
      style: {
        paddingTop: 8,
      },
    },
    icon: {
      content: 'clock-o',
      style: {
        width: 35,
        height: 35,
        backgroundColor: '#fccd05',
        color: '#FFF',
        borderColor: '#FFF',
        fontSize: 16,
        paddingTop: 6,
        borderRadius: 18,
      },
    },
  },
  {
    title: ({styles}) => (
      <View>
        <Text style={{fontSize: 10, color: '#999', marginBottom: 7}}>
          {moment().format('lll')}
        </Text>
        <Text style={[styles, {marginBottom: 0, color: '#fccd05'}]}>
          Parcel In Transit
        </Text>
      </View>
    ),
    description: {
      content: 'Parcel left Doha International Airport Doha',
    },
    time: {
      content: moment().format('ll'),
      style: {
        paddingTop: 8,
      },
    },
    icon: {
      content: 'clock-o',
      style: {
        width: 35,
        height: 35,
        backgroundColor: '#fccd05',
        color: '#FFF',
        borderColor: '#FFF',
        fontSize: 16,
        paddingTop: 6,
        borderRadius: 18,
      },
    },
  },
  {
    title: ({styles}) => (
      <View>
        <Text style={{fontSize: 10, color: '#999', marginBottom: 7}}>
          {moment().format('lll')}
        </Text>
        <Text style={[styles, {marginBottom: 0, color: '#fccd05'}]}>
          Parcel In Transit
        </Text>
      </View>
    ),
    description: {
      content: 'Parcel arrive Nnamdi Azikiwe International Airport Abuja',
    },

    time: {
      content: moment().format('ll'),
      style: {
        paddingTop: 8,
      },
    },
    icon: {
      content: 'clock-o',
      style: {
        width: 35,
        height: 35,
        backgroundColor: '#fccd05',
        color: '#FFF',
        borderColor: '#FFF',
        fontSize: 16,
        paddingTop: 6,
        borderRadius: 18,
      },
    },
  },
  {
    title: ({styles}) => (
      <View>
        <Text style={{fontSize: 10, color: '#999', marginBottom: 7}}>
          {moment().format('lll')}
        </Text>
        <Text style={[styles, {marginBottom: 0, color: '#fccd05'}]}>
          Parcel In Transit
        </Text>
      </View>
    ),
    description: {
      content: 'Parcel arrived at  local delivery outlet in Kubwa',
    },
    time: {
      content: moment().format('ll'),
      style: {
        paddingTop: 8,
      },
    },
    icon: {
      content: 'clock-o',
      style: {
        width: 35,
        height: 35,
        backgroundColor: '#fccd05',
        color: '#FFF',
        borderColor: '#FFF',
        fontSize: 16,
        paddingTop: 6,
        borderRadius: 18,
      },
    },
  },
  {
    title: ({styles}) => (
      <View>
        <Text style={{fontSize: 10, color: '#999', marginBottom: 7}}>
          {moment().subtract(10, 'days').calendar()}
        </Text>
        <Text style={[styles, {marginBottom: 0, color: '#d2584b'}]}>
          Parcel Delayed
        </Text>
      </View>
    ),
    description: {
      content: 'Parcel delayed due to heavy rain',
      date: moment().add(3, 'days').calendar(),
    },
    time: {
      content: moment().format('ll'),
      style: {
        paddingTop: 8,
      },
    },
    icon: {
      content: 'check',
      style: {
        width: 35,
        height: 35,
        backgroundColor: '#d2584b',
        color: '#FFF',
        borderColor: '#FFF',
        fontSize: 16,
        paddingTop: 6,
        borderRadius: 18,
      },
    },
  },
  {
    title: ({styles}) => (
      <View>
        <Text style={{fontSize: 10, color: '#999', marginBottom: 7}}>
          {moment().format('lll')}
        </Text>
        <Text style={[styles, {marginBottom: 0, color: '#00b48b'}]}>
          Parcel Delivered
        </Text>
      </View>
    ),
    description: {
      content: 'Parcel delivered to customer',
    },
    time: {
      content: moment().format('ll'),
      style: {
        paddingTop: 8,
      },
    },
    icon: {
      content: 'check',
      style: {
        width: 35,
        height: 35,
        backgroundColor: '#00b48b',
        color: '#FFF',
        borderColor: '#FFF',
        fontSize: 16,
        paddingTop: 6,
        borderRadius: 18,
      },
    },
  },
];

const TimeLineCard = ({label}) => {
  return <Text style={styles.text}>{label}</Text>;
};

const Datarender = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{data.title}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>{data.subtitle}</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>{data.date}</Text>
      </View>
    </View>
  );
};

const BackNavigation = ({onPress, navigation}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.backNavigation}>
      <Image
        source={require('../assets/Icons/left-arrow.png')}
        style={{
          width: widthPixel(10),
          height: heightPixel(10),
          tintColor: COLORS.black,
          marginLeft: widthPixel(2),
          flexDirection: 'row',
        }}
      />
    </TouchableOpacity>
  );
};
const TimeLineScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar backgroundColor={COLORS.white} barStyle="light-content" />
      <View
        style={{
          backgroundColor: COLORS.white,
          top: -10,
          height: heightPixel(10),
          width: widthPixel(100),
        }}>
        <BackNavigation onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.timelineContainer}>
        <Timeline data={data} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  timelineContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 10,
  },
  list: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  timeline: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  header: {
    backgroundColor: COLORS.primary,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  headerText: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  backNavigation: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  icon: {
    width: width * 0.08,
    height: height * 0.05,
    padding: 10,
  },
  navigationContainer: {},
  height: {
    height: height * 0.1,
  },
  headerText: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default TimeLineScreen;
