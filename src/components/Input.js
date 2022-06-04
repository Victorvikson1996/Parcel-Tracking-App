import {View, Text, TextInput, StyleSheet, Dimensions} from 'react-native';
import React from 'react';

const {height, width} = Dimensions.get('screen');

const InputText = props => {
  return (
    <TextInput
      style={props.style}
      onChangeText={props.onChangeText}
      value={props.value}
      placeholder={props.placeholder}
    />
  );
};

const Input = props => {
  return (
    <TextInput
      style={props.style}
      onChangeText={props.onChangeText}
      value={props.value}
      placeholder={props.placeholder}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    width: width / 1.1,
    alignSelf: 'center',
    backgroundColor: '#e3e3e3',
    marginVertical: 10,
  },

  input: {
    padding: 15,
  },

  inputText: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default Input;
