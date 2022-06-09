import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';

import {Query} from 'react-query';
import axios from 'axios';
import {COLORS} from '../utils';

const {height, width} = Dimensions.get('screen');

const data = [
  {
    id: 'S24DEMO456393',
    status: 'Intransit',
    date: '2020-01-01',
    time: '12:00',
    location: 'Kigali',
    description: 'Parcel is in transit',
    icon: 'md-car',
  },
  {
    id: 'S24DEMO456393',
    status: 'Delivered',
    date: '2020-01-01',
    time: '12:00',
    location: 'Kigali, Rwanda',
    description: 'Parcel delivered to recipient',
    icon: 'check',
  },
  {
    id: 'S24DEMO456393',
    status: 'Delivered',
    date: '2020-01-01',
    time: '12:00',
    location: 'Kigali, Rwanda',
    description: 'Parcel delivered to recipient',
    icon: 'check',
  },
];

export const TimelineView = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.flatListContainer}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View style={styles.item}>
              <Text style={styles.title}>{item.status}</Text>
              <Text style={styles.date}>{item.date}</Text>
              <Text style={styles.time}>{item.time}</Text>
              <Text style={styles.location}>{item.location}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </ScrollView>
  );
};

const Timeline = () => {
  return <TimelineView />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 20,
  },
  item: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  date: {
    fontSize: 14,
    color: '#000',
  },
  time: {
    fontSize: 14,
    color: '#000',
  },
  location: {
    fontSize: 14,
    color: '#000',
  },
  description: {
    fontSize: 14,
    color: '#000',
  },
  textInput: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    height: 50,
    paddingHorizontal: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    width: width * 0.6,
  },
  flatListContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 20,
  },
});

export default Timeline;
