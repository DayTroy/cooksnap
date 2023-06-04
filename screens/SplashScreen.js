import { StyleSheet, 
         Text, 
         View, 
         Image, 
         ActivityIndicator, } from 'react-native';
import Color from '../assets/themes/Color';

const SplashScreen = () => {
    return (
      <View style={styles.container}>
        <Image 
            source={require('../assets/images/logos/main-logo.png')}
            style={styles.image}
        />
        <Text style={styles.title}>CookSnap</Text>
        <Text style={styles.description}>A Better Way to Organize Your Recipe</Text>
        <ActivityIndicator 
          size="large" 
          color="#000000" 
          style= {{marginTop: "20%"}}
        />
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
      marginTop: '15%',
    },
    description: {
        color: Color.Gray1,
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
    },
    image: {
      width: '30%',
      aspectRatio: 1,
      marginTop: "25%",
      
    },
  });

  export default SplashScreen;