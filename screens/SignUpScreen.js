import React, { useState } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from "react-native";
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import Color from '../assets/themes/Color';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"; 


const SignInScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const navigation = useNavigation();
  
  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log(user.email);
        })
        .catch(error => alert(error.message))
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header__title}>Create an account</Text>
        <Text style={styles.header__subtitle}>Let’s help you set up your account, it won’t take long.</Text>
      </View>
      <InputField 
        style={styles.input}
        value={name}
        inputName="Name"
        inputPlaceholder="Enter Name"
        onChangeText={text => setName(text)}
      />
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
      <InputField 
        style={styles.input}
        value={confirmedPassword}
        inputName="Confirmed Password"
        inputPlaceholder="Retype Password"
        onChangeText={password => setConfirmedPassword(password)}
      />
      <CustomButton 
        style={styles.button}
        buttonText="Sign Up"
        onPress={handleSignUp}
      />
      <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
        <Text style={styles.new__account}>Already a member? Sign In</Text>
      </TouchableOpacity>
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
    marginBottom: 20,
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
