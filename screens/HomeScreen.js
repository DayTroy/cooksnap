import { View, Text } from "react-native";
import CustomButton from "../components/CustomButton";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("SignInScreen");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <View>
      <Text>Home</Text>
      <Text>Welcome back:{auth.currentUser?.email}</Text>
      <CustomButton buttonText="Sign Out" onPress={handleSignOut} />
    </View>
  );
};

export default HomeScreen;
