import React, { useState } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from "react-native";
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import Color from '../assets/themes/Color';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header__title}>Hello,</Text>
        <Text style={styles.header__subtitle}>Welcome back!</Text>
      </View>
      <InputField 
        style={styles.input}
        value={email}
        inputName="Email"
        inputPlaceholder="Enter Email"
        onChangeText={text => setEmail(text)}
      />
      <InputField 
        style={styles.input}
        value={password}
        inputName="Password"
        inputPlaceholder="Enter Password"
        onChangeText={password => setPassword(password)}
      />
      <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
        <Text style={styles.new__account}>Don’t have an account? Sign up</Text>
      </TouchableOpacity>
      <CustomButton 
        style={styles.button}
        buttonText="Sign In"
      />
    </View>
  );
}

const { width } = Dimensions.get('window');
const buttonWidth = width - 120; 

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingLeft: 30,
    paddingRight: 30,
  },
  header: {
    marginBottom: 57,
  },
  header__title: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 30,
  },
  header__subtitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 20,
  },
  new__account: {
    color: Color.Black,
    fontFamily: "Poppins-Regular",
    fontSize: 11,
    marginTop: 20,
    marginBottom: 20, // Добавлен отступ между InputField и текстом
  },
  button:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0.15 * width,
    width: buttonWidth,
    paddingVertical: 15,
  }
});

export default SignInScreen;
