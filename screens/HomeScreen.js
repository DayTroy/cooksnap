import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecipeListScreen from "./RecipeListScreen";
import ProfileScreen from "./ProfileScreen";
import Color from '../assets/themes/Color';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Color.Primary100,
        tabBarInactiveTintColor: Color.Black,
        tabBarLabelStyle: { fontSize: 16, fontFamily: 'Poppins-Regular' },
        tabBarStyle: { backgroundColor: Color.White },
        tabBarItemStyle: { padding: 10 },
        tabBarIcon: () => null,
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
              source={require('../assets/images/icons/tab-home.svg')}
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
              source={require('../assets/images/icons/tab-profile.svg')}
              style={{ tintColor: color, width: size, height: size }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
