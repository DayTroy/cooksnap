import { View, Text } from "react-native";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Home</Text>
      <Text>Welcome back:{auth.currentUser?.email}</Text>
    </View>
  );
};

export default HomeScreen;
