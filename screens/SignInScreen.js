import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import InputField from "../components/InputField";
import CustomButton from "../components/CustomButton";
import Color from "../assets/themes/Color";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.replace("ProfileScreen");
      }
    });
    return unsubscribe;
  }, []);

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

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
        onChangeText={(text) => setEmail(text)}
      />
      <InputField
        style={styles.input}
        value={password}
        inputName="Password"
        inputPlaceholder="Enter Password"
        onChangeText={(password) => setPassword(password)}
      />
      <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}>
        <Text style={styles.new__account}>Don’t have an account? Sign up</Text>
      </TouchableOpacity>
      <CustomButton
        style={styles.button}
        buttonText="Sign In"
        onPress={handleSignIn}
      />
    </View>
  );
};

const { width } = Dimensions.get("window");
const buttonWidth = width - 60;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.White,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    marginBottom: 57,
    alignSelf: "center",
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
    textAlign: "center",
  },
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0.05 * width,
    width: buttonWidth,
    paddingVertical: 15,
  },
});

export default SignInScreen;
