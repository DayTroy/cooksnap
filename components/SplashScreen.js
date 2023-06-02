import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View, Image } from 'react-native';
import Color from '../assets/themes/Color';

export default function SplashScreen() {
    return (
      <View style={styles.container}>
        <Image 
            source={require('../assets/logos/main-logo.png')}
            style={styles.image}
        />
        <Text style={styles.title}>CookSnap</Text>
        <Text style={styles.description}>A Better Way to Organize Your Recipe</Text>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: Color.Gray1,
      fontSize: 50,
      fontFamily: 'Poppins-SemiBold',
    },
    description: {
        color: Color.Gray1,
        fontSize: 16,
        fontFamily: 'Poppins-Regular'
    },
    image: {
        width: 91,
        height: 91,
    }
  });