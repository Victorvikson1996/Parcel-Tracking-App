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
// import {TimelineView} from '../components/Timeline';
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
    date: 1574342522000,
    data: [
      {
        title: 'React Native Beautiful Timeline',
        subtitle: 'Sed at justo eros. Phasellus.',
        date: 1274342522000,
      },
      {
        title: 'React Native',
        subtitle: 'Sed viverra. Nam sagittis.',
        date: 1574342501000,
      },
    ],
  },
  {
    date: 1574248261000,
    data: [
      {
        title: 'Timeline',
        subtitle: 'Morbi magna orci, consequat in.',
        date: 1574248261000,
      },
    ],
  },
  {
    date: 1574125621000,
    data: [
      {
        title: 'Beauty Timeline',
        subtitle: 'Nulla a eleifend urna. Morbi. Praesent.',
        date: 1574125621000,
      },
    ],
  },
  {
    date: 1574125621000,
    data: [
      {
        title: 'Timeline Title',
        subtitle: 'Ut viverra. Nunc interdum.',
        date: 1574125621000,
      },
    ],
  },
  {
    date: 1574125621000,
    data: [
      {
        title: 'In imperdiet.',
        subtitle:
          'Etiam at libero eu lacus.Proin pellentesque tempus neque, quis.',
        date: 1574125621000,
      },
    ],
  },
];

const DummyData2 = [
  {
    time: '09:00',
    title: 'Archery Training',
    description:
      'The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ',
    circleColor: '#009688',
    lineColor: '#009688',
  },

  {
    time: '10:45',
    title: 'Play Badminton',
    description:
      'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.',
  },

  {
    time: '14:00',
    title: 'Watch Soccer',
    description:
      'Team sport played between two teams of eleven players with a spherical ball. ',
    lineColor: '#009688',
  },
  {
    time: '16:30',
    title: 'Go to Fitness center',
    description: 'Look out for the Best Gym & Fitness Centers around me :)',
    circleColor: '#009688',
  },
  {
    time: '18:00',
    title: 'Dinner',
    description: 'Lunch is served in the restaurant. ',
    circleColor: '#009688',
  },
  {
    time: '19:30',
    title: 'Go to the Cinema',
    description:
      'Cinema is a theater with projection facilities, usually a multiplex of several cinemas.',
    circleColor: '#009688',
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

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Timeline</Text>
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
        <Timeline data={data} style={styles.timeline} />
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
