import React, { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import SplashScreen from './components/SplashScreen';
import GettingStartedScreen from './components/GettingStartedScreen';

const App = () => {
  const [fontsLoaded] = useFonts({
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
  });

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setShowSplash(false);
    }, 0);

    return () => clearTimeout(delay);
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      {showSplash ? <SplashScreen /> : <GettingStartedScreen />}
    </>
  );
};

export default App;
