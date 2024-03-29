import React, { useState } from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import Color from '../assets/themes/Color';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';

const SignUpScreen = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);

  const navigation = useNavigation();

  const handlePasswordMatch = () => {
    setPasswordMatch(password === confirmedPassword);
  };

  const handleSignUp = () => {
    handlePasswordMatch();

    if (!passwordMatch) {
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        updateProfile(user, {
          displayName: userName,
        });
        navigation.replace('Home');
      })
      .catch((error) => alert(error.message));
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.header__title}>Create an account</Text>
          <Text style={styles.header__subtitle}>
            Let’s help you set up your account, it won’t take long.
          </Text>
        </View>
        <InputField
          style={[styles.input, styles.firstInput]}
          value={userName}
          inputName="Name"
          inputPlaceholder="Enter Name"
          onChangeText={(text) => setUserName(text)}
        />
        <InputField
          style={styles.input}
          value={email}
          inputName="Email"
          inputPlaceholder="Enter Email"
          onChangeText={(text) => setEmail(text)}
        />
        <InputField
          style={styles.input}
          value={password}
          secureTextEntry={true}
          inputName="Password"
          inputPlaceholder="Enter Password"
          onChangeText={(password) => setPassword(password)}
        />
        <InputField
          style={styles.input}
          value={confirmedPassword}
          secureTextEntry={true}
          inputName="Confirmed Password"
          inputPlaceholder="Retype Password"
          onChangeText={(password) => setConfirmedPassword(password)}
        />
        {!passwordMatch && (
          <Text style={styles.errorText}>Passwords do not match</Text>
        )}
        <CustomButton
          style={styles.button}
          buttonText="Sign Up"
          onPress={handleSignUp}
        />
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.new__account}>Already a member? Sign In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const { width } = Dimensions.get('window');
const buttonWidth = width - 60;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.White,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    alignItems: 'center',
  },
  header__title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 30,
    marginTop: 30,
  },
  header__subtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    marginTop: 10,
    textAlign: 'center',
    marginBottom: 20,
  },
  new__account: {
    color: Color.Black,
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    maxWidth: 250,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0.05 * width,
    width: buttonWidth,
    paddingVertical: 15,
  },
  errorText: {
    color: 'red',
    marginTop: 5,
    textAlign: 'center',
  },
});

export default SignUpScreen;
