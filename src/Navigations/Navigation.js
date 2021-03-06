import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  OrderTrack,
  ConfirmationScreen,
  HomeScreen,
  TimeLineScreen,
  ProgressTimeline,
} from '../screens';
import TimelineIndicator from '../components/TimelineIndicator';

const Stack = createStackNavigator();

const ScreenOptions = {
  headerShown: false,
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={ScreenOptions}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="OrderTrack" component={OrderTrack} />
        <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
        <Stack.Screen name="TimeLine" component={TimeLineScreen} />
        <Stack.Screen name="Time" component={TimelineIndicator} />
        <Stack.Screen name="Progress" component={ProgressTimeline} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
