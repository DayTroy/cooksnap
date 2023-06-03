import React from 'react';
import { StyleSheet, TextInput, Text, View, Dimensions } from 'react-native';
import Color from '../assets/themes/Color';

const InputField = ({ inputName, inputPlaceholder }) => {
  const { width } = Dimensions.get('window');
  const inputWidth = width - 60; // Уменьшаем ширину поля на 60 пикселей для отступов

  return (
    <View style={styles.container}>
      <Text style={styles.input__name}>{inputName}</Text>
      <TextInput
        style={[styles.input__placeholder, { width: inputWidth }]}
        placeholder={inputPlaceholder}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input__name: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    textAlign: 'left',
    color: Color.Black,
  },
  input__placeholder: {
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
    color: Color.Gray4,
    borderWidth: 1.5,
    borderColor: Color.Gray4,
    borderRadius: 10,
    padding: 15,
  },
});

export default InputField;