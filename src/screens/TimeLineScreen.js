import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React from 'react';
import {TimelineView} from '../components/Timeline';
import {COLORS} from '../utils';

const {height, width} = Dimensions.get('screen');

import Timeline from 'react-native-beautiful-timeline';

const data = [
  {
    data: {
      trackings: [
        {
          tracker: {
            trackerId: '26148317-7502-d3ac-44a9-546d240ac0dd',
            trackingNumber: 'S24DEMO456393',
          },
          shipment: {
            shipmentId: 'f4f888d7-d140-423f-9a48-e0689d27e098',
            originCountryCode: 'CN',
            destinationCountryCode: 'US',
            trackingNumbers: [
              {
                tn: 'S24DEMO169411',
              },
              {
                tn: 'S24DEMO456393',
              },
            ],
            delivery: {
              estimatedDeliveryDate: '2021-03-04T17:00:00.000Z',
              service: 'Parcel Post',
            },
          },
          events: [
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
          ],
        },
      ],
    },
  },
];

const timeLineCard = data => {
  return (
    <View style={styles.timeLineCard}>
      <Text style={styles.timeLineCardTitle}>{data.title}</Text>
      <Text style={styles.timeLineCardSubTitle}>{data.subTitle}</Text>
    </View>
  );
};

const TimeLineScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <View>
        <Timeline data={data} />
        <Text>Hello</Text>
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
});
export default TimeLineScreen;
