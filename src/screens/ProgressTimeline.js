import {View, Text, StyleSheet, PixelRatio} from 'react-native';
import React from 'react';
import {
  Colors,
  tintColorDark,
  tintColorLight,
  tintPrimary,
  tFareBtn,
} from '../utils/TimeLineColor';

const CircleIcon = ({name, size, color}) => {
  return (
    <View>
      <Image />
    </View>
  );
};
const heightPixel = height => {
  return height * PixelRatio.get();
};

const fontPixel = fontSize => {
  return fontSize * PixelRatio.get();
};

const pixelSizeVertical = size => {
  return size * PixelRatio.get();
};

function IF(props) {
  if (!!props.condition) {
    return props.children;
  }
  return null;
}

const ProgressTimeline = () => {
  return (
    <View style={styles.progress}>
      <View style={styles.timeline}>
        <Ionicons
          name="md-checkmark-circle"
          size={14}
          color={Colors.successTint}
        />
        <View
          style={[
            styles.borderView,
            {
              borderColor:
                theme === 'dark' ? Colors.dark.tFareBtn : Colors.light.tint,
            },
          ]}
        />
        <IF
          condition={
            responseData.result?.status === 'processing' || 'confirmed'
          }>
          <Ionicons
            name="md-checkmark-circle"
            size={14}
            color={Colors.successTint}
          />
        </IF>
        <IF condition={responseData.result?.status === 'submitted'}>
          <FontAwesome name="circle" size={12} color={Colors.secondary} />
        </IF>

        <View
          style={[
            styles.borderView,
            {
              borderColor:
                theme === 'dark' ? Colors.dark.tFareBtn : Colors.light.tint,
            },
          ]}
        />
        <IF condition={responseData.result?.status !== 'confirmed'}>
          <FontAwesome name="circle" size={12} color={Colors.secondary} />
        </IF>
        <IF condition={responseData.result?.status === 'confirmed'}>
          <Ionicons
            name="md-checkmark-circle"
            size={14}
            color={Colors.successTint}
          />
        </IF>
      </View>

      <View style={styles.details}>
        <View style={styles.timelineDetails}>
          <Text
            style={[
              styles.timelineTitle,
              {
                color: theme === 'dark' ? Colors.dark.text : Colors.light.text,
              },
            ]}>
            Withdrawal request submitted
          </Text>
          <Text
            style={[
              styles.smallText,
              {
                color:
                  theme === 'dark'
                    ? Colors.dark.tintTextColor
                    : Colors.light.tintTextColor,
              },
            ]}>
            "dateTimeSubmitted"
          </Text>
        </View>

        <View style={styles.timelineDetails}>
          <Text
            style={[
              styles.timelineTitle,
              {
                color: theme === 'dark' ? Colors.dark.text : Colors.light.text,
              },
            ]}>
            System processing
          </Text>
          <Text
            style={[
              styles.smallText,
              {
                color:
                  theme === 'dark'
                    ? Colors.dark.tintTextColor
                    : Colors.light.tintTextColor,
              },
            ]}></Text>
        </View>

        <View style={styles.timelineDetails}>
          <Text
            style={[
              styles.timelineTitle,
              {
                color: theme === 'dark' ? Colors.dark.text : Colors.light.text,
              },
            ]}>
            Withdrawal request successful
          </Text>
          <Text
            style={[
              styles.smallText,
              {
                color:
                  theme === 'dark'
                    ? Colors.dark.tintTextColor
                    : Colors.light.tintTextColor,
              },
            ]}>
            "dateTimeConfirmed"
          </Text>
          <Text
            style={[
              styles.smallText,
              {
                color:
                  theme === 'dark'
                    ? Colors.dark.tintTextColor
                    : Colors.light.tintTextColor,
              },
            ]}>
            You will receive notification on your device and also email once
            withdrawal is complete
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  progress: {
    height: heightPixel(250),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
  },
  timeline: {
    height: '100%',
    width: '5%',
    alignItems: 'center',
  },
  borderView: {
    borderWidth: 1,
    height: heightPixel(70),
  },
  details: {
    height: '100%',
    width: '90%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  smallText: {
    marginTop: 5,
    fontFamily: 'inter-regular',
    fontSize: fontPixel(12),
  },
  timelineDetails: {
    height: heightPixel(85),
    alignItems: 'flex-start',
  },
  timelineTitle: {
    fontFamily: 'inter-semi-bold',
    fontSize: fontPixel(16),
    lineHeight: 20,
  },
  otherInfo: {},
  horizontalLine: {
    marginVertical: pixelSizeVertical(10),
    borderWidth: 1,
    width: '100%',
  },
  rowWrap: {
    width: '100%',
    marginVertical: pixelSizeVertical(5),
    flexDirection: 'row',
    height: heightPixel(40),
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  rowText: {
    width: '25%',
    lineHeight: 18,
    fontFamily: 'inter-medium',
    fontSize: fontPixel(14),
  },
  rowRight: {
    textAlign: 'right',
    width: '70%',
    lineHeight: 18,
    fontFamily: 'inter-medium',
    fontSize: fontPixel(12),
  },
});

export default ProgressTimeline;
