import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import CustomButton from "../components/CustomButton";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";
import Color from "../assets/themes/Color";

const ProfileScreen = () => {
  const navigation = useNavigation();
  
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("SignInScreen");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <View style={styles.container}>
      <Text style={[styles.profile__text, {fontSize: 30}]}>Profile</Text>
      <Image 
            style={styles.profile__image}
            source={require('../assets/images/background/started-background.png')}

      />
      <Text style={styles.profile__text}>{auth.currentUser?.displayName}</Text>
      <Text style={styles.profile__text}>{auth.currentUser?.email}</Text>
      <CustomButton 
            buttonText="Sign Out" 
            onPress={handleSignOut} 
            style={styles.profile__button}        
    />
    </View>
  );
};

const { width } = Dimensions.get('window');
const buttonWidth = width - 120; 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.White,
    },
    profile__image:{
        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop: 30,
    },
    profile__text: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
        marginTop: 30,
        textAlign: 'center',
        maxWidth: buttonWidth,
    },
    profile__button: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0.15 * width,
        width: buttonWidth,
        paddingVertical: 15,
    }
})

export default ProfileScreen;
