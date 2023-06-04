import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View, Dimensions } from 'react-native';
import Color from '../assets/themes/Color';

const InputField = ({ inputName, inputPlaceholder, onChangeText }) => {
  const { width } = Dimensions.get('window');
  const inputWidth = width - 60;
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.input__name}>{inputName}</Text>
      <TextInput
        style={[
          styles.input__placeholder,
          { width: inputWidth, maxWidth: 250 },
          isFocused && styles.input__textFocused,
        ]}
        placeholder={inputPlaceholder}
        onChangeText={onChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
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
  input__textFocused: {
    color: Color.Black,
  },
});

export default InputField;
