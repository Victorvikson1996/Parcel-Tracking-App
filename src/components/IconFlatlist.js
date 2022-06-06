import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  PixelRatio,
} from 'react-native';
import React from 'react';
import {COLORS, Icons} from '../utils';
import {Features} from '../utils';

const {width, height} = Dimensions.get('window');

const IconFlatlist = ({item}) => {
  const [features, setFeatures] = React.useState(Features);
  const renderItem = ({item, index, label, Icons}) => {
    return (
      <TouchableOpacity style={styles.itemContainer}>
        <View style={styles.flContainer}>
          <Image
            source={item.Icons}
            style={styles.image}
            resizeMode="contain"
          />
          <View>
            <Text style={styles.text}>{item.label}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={features}
      renderItem={renderItem}
      numColumns={2}
      keyExtractor={item => `${item.id}`}
      columnWrapperStyle={{
        justifyContent: 'space-between',
      }}
      style={styles.flatlist}
    />
  );
};

const styles = StyleSheet.create({
  flatlist: {
    marginTop: 2,
    marginHorizontal: 30,
    flex: 1,
  },

  itemContainer: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemImage: {
    width: width * 0.3,
    height: width * 0.3,
    resizeMode: 'contain',
  },
  itemText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.black,
    marginTop: 10,
  },
  flContainer: {
    height: width * 0.3,
    width: width * 0.3,
    borderRadius: 8,
    // backgroundColor: item.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
  },
  image: {
    width: width * 0.1,
    height: width * 0.1,

    tintColor: COLORS.black,
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.black,
    marginTop: 10,
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});
export default IconFlatlist;
