import { useFonts } from 'expo-font';
import SplashScreen from './components/SplashScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <SplashScreen />
  );
}

