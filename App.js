import React, { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import SplashScreen from './screens/SplashScreen';
import GettingStartedScreen from './screens/GettingStartedScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import ProfileScreen from './screens/ProfileScreen';
import RecipeListScreen from './screens/RecipeListScreen';

import { auth } from './firebase';
import { onAuthStateChanged } from "firebase/auth";
import Color from './assets/themes/Color';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
  });

  const [showSplash, setShowSplash] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setShowSplash(false);
    }, 5000);

    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true)
      } else {
        setIsAuthenticated(false)
      }
    });
    return unsubscribe;
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      {showSplash ? (
        <Stack.Navigator>
          <Stack.Screen 
            name="Splash" 
            component={SplashScreen} 
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : !isAuthenticated ? (
        <Stack.Navigator>
          <Stack.Screen 
            name="GettingStarted" 
            component={GettingStartedScreen} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="SignIn" 
            component={SignInScreen} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="SignUp" 
            component={SignUpScreen} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="RecipeList" 
            component={RecipeListScreen} 
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : (
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: Color.Primary100,
            tabBarInactiveTintColor: Color.Black,
            tabBarLabelStyle: { fontSize: 16, fontFamily: 'Poppins-Regular' },
            tabBarStyle: { backgroundColor: Color.White },
            tabBarItemStyle: { padding: 10 },
            tabBarIcon: () => null
          }}
        >
          <Tab.Screen 
            name="RecipeList" 
            component={RecipeListScreen} 
            options={{
              headerShown: false,
              tabBarLabel: '',
              tabBarIcon: ({ color, size }) => (
                <Image
                  source={require('./assets/images/icons/tab-home.svg')}
                  style={{ tintColor: color, width: size, height: size }}
                />
              ),
            }}
          />
          <Tab.Screen 
            name="Profile" 
            component={ProfileScreen} 
            options={{
              headerShown: false,
              tabBarLabel: '',
              tabBarIcon: ({ color, size }) => (
                <Image
                  source={require('./assets/images/icons/tab-profile.svg')}
                  style={{ tintColor: color, width: size, height: size }}
                />
              ),
            }}
          />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;