import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React, {useEffect} from 'react';
// import {TimelineView} from '../components/Timeline';
import {COLORS} from '../utils';

const {height, width} = Dimensions.get('screen');

import Timeline from 'react-native-timeline-flatlist';
const data = [
  {
    date: 1574342522000,
    data: [
      {
        trackingNumber: 'S24DEMO169411',
        eventTrackingNumber: 'S24DEMO169411',
        status: 'Delivered to the addressee',
        statusCategory: 'delivery',
        statusCode: 'delivery_delivered',
        date: 1574342522000,
        hasNoTime: false,
        order: null,
        utcOffset: null,
        location: 'SAN RAFAEL, CA 94901',
        courierCode: 'usps-tracking',
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

const DummyData = [
  {
    trackingNumber: 'S24DEMO169411',
    eventTrackingNumber: 'S24DEMO169411',
    status: 'Delivered to the addressee',
    statusCategory: 'delivery',
    statusCode: 'delivery_delivered',
    datetime: '2021-03-04T17:12:57.000Z',
    hasNoTime: false,
    order: null,
    utcOffset: null,
    location: 'SAN RAFAEL, CA 94901',
    courierCode: 'usps-tracking',
  },

  {
    trackingNumber: 'S24DEMO169411',
    eventTrackingNumber: 'S24DEMO169411',
    status: 'Out for Delivery',
    statusCategory: 'delivery',
    statusCode: 'delivery_out_for_delivery',
    datetime: '2021-03-04T10:12:57.000Z',
    hasNoTime: false,
    order: null,
    utcOffset: null,
    location: 'SAN RAFAEL, CA 94901',
    courierCode: 'usps-tracking',
  },
  {
    trackingNumber: 'S24DEMO169411',
    eventTrackingNumber: 'S24DEMO169411',
    status: 'Arrived at Hub, Your item arrived at the hub.',
    datetime: '2021-03-04T06:12:57.000Z',
    hasNoTime: false,
    order: null,
    utcOffset: null,
    location: 'SAN RAFAEL, CA 94901',
    courierCode: 'usps-tracking',
  },
  {
    trackingNumber: 'S24DEMO169411',
    eventTrackingNumber: 'S24DEMO169411',
    status: 'Processed Through Regional Facility',
    datetime: '2021-03-03T17:12:57.000Z',
    hasNoTime: false,
    order: null,
    utcOffset: null,
    location: 'LOS ANGELES CA INTERNATIONAL DISTRIBUTION CENTER',
    courierCode: 'usps-tracking',
  },
  {
    trackingNumber: 'S24DEMO169411',
    eventTrackingNumber: 'S24DEMO169411',
    status: 'Arrived at Regional Facility',
    datetime: '2021-03-03T15:38:57.000Z',
    hasNoTime: false,
    order: null,
    utcOffset: null,
    location: 'LOS ANGELES CA INTERNATIONAL DISTRIBUTION CENTER',
    courierCode: 'usps-tracking',
  },
  {
    trackingNumber: 'S24DEMO169411',
    eventTrackingNumber: 'S24DEMO456393',
    status: 'Flight Departure',
    datetime: '2021-03-02T23:24:50.000Z',
    hasNoTime: false,
    order: null,
    utcOffset: null,
    location: 'Beijing airport',
    courierCode: null,
  },
  {
    trackingNumber: 'S24DEMO169411',
    eventTrackingNumber: 'S24DEMO456393',
    status: 'Dispatched from Office of Exchange',
    datetime: '2021-03-02T22:23:41.000Z',
    hasNoTime: false,
    order: null,
    utcOffset: null,
    location: 'Beijing',
    courierCode: null,
  },
  {
    trackingNumber: 'S24DEMO169411',
    eventTrackingNumber: 'S24DEMO456393',
    status: 'Depature from Local Sorting Center',
    datetime: '2021-03-02T19:24:57.000Z',
    hasNoTime: false,
    order: null,
    utcOffset: null,
    location: 'Beijing',
    courierCode: null,
  },
  {
    trackingNumber: 'S24DEMO169411',
    eventTrackingNumber: 'S24DEMO456393',
    status: 'Package Received',
    datetime: '2021-03-02T15:38:57.000Z',
    hasNoTime: false,
    order: null,
    utcOffset: null,
    location: 'Beijing',
    courierCode: null,
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

const TimeLineScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <View style={styles.timelineContainer}>
        <Timeline data={DummyData2} style={styles.list} />
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
});
export default TimeLineScreen;
