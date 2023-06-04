import React from "react";
import { StyleSheet, View, TextInput, Image } from "react-native";
import Color from "../assets/themes/Color";

const CustomSearchBar = ({
  placeholder,
  value,
  onChangeText,
  onSubmitEditing,
  style,
}) => {
  return (
    <View style={[styles.search, style]}>
      <Image
        source={require("../assets/images/icons/search.svg")}
        style={styles.iconSearch}
      />
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: Color.Gray4,
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  iconSearch: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: Color.Gray4,
    fontFamily: 'Poppins-Regular',
  },
});

export default CustomSearchBar;