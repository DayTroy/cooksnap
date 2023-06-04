import React from 'react';
import { View, 
         ImageBackground, 
         StyleSheet, 
         Text, 
         Image, 
         Dimensions } from 'react-native';
import Color from '../assets/themes/Color';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';

const GettingStartedScreen = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground  
        source={require('../assets/images/background/started-background.png')}
        style={{ flex: 1 }}
    >
        <View style={styles.container}>
          <View style={styles.header}>
            <Image 
              source={require('../assets/images/icons/hat.svg')}
              style={styles.image}
            />
            <Text style={styles.figcaption}>100K+ Premium Recipe</Text>
          </View>

          <View style={styles.main}>
            <Text style={styles.title}>Get Cooking</Text>
            <Text style={styles.description}>Simple way to find Tasty Recipe</Text>
          </View>
          <CustomButton 
                  style={styles.button} 
                  onPress={() => navigation.navigate('SignIn')}
                  buttonText="Start Cooking"
          />
        </View>
    </ImageBackground>
  );
}

const { width } = Dimensions.get('window');
const buttonWidth = width - 120; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginTop: 0.1 * width, 
    alignItems: 'center',
  },
  main: {
    marginTop: 0.2 * width, 
    alignItems: 'center',
  },
  image: {
    width: 0.2 * width, 
    height: 0.2 * width, 
  },
  figcaption: {
    color: Color.White,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    marginTop: 14,
  },
  title: {
    maxWidth: 0.8 * width, 
    color: Color.White,
    fontFamily: 'Poppins-Semibold',
    fontSize: 0.1 * width, 
    textAlign: 'center',
  },
  description: {
    color: Color.White,
    fontFamily: 'Poppins-Regular',
    fontSize: 0.04 * width, 
    marginTop: 20,
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0.15 * width,
    width: buttonWidth,
    paddingVertical: 15,
  },
  icon: {
    marginLeft: 10,
  },
});

export default GettingStartedScreen;
