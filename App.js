import React, { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen';
import GettingStartedScreen from './screens/GettingStartedScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
const Stack = createNativeStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
  });

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setShowSplash(false);
    }, 5000);

    return () => clearTimeout(delay);
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {showSplash ? (
          <Stack.Screen 
            name="Splash" 
            component={SplashScreen} 
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <Stack.Screen 
              name="GettingStarted" 
              component={GettingStartedScreen} 
              options={{ headerShown: false }}
            />
            <Stack.Screen 
              name="SignInScreen" 
              component={SignInScreen} 
              options={{ headerShown: false }}
            />
            <Stack.Screen 
              name="SignUpScreen" 
              component={SignUpScreen} 
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
