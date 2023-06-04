import React, { useState } from "react";
import { StyleSheet, View, TextInput, Image } from "react-native";
import Color from "../assets/themes/Color";

const CustomSearchBar = ({
  placeholder,
  value,
  onChangeText,
  onSubmitEditing,
  style,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

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
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={[
          styles.input,
          isFocused && styles.input__textFocused,
        ]}
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
  input: {
    flex: 1,
    fontSize: 15,
    color: Color.Gray4,
    fontFamily: "Poppins-Regular",
    outlineWidth: 0,
  },
  input__textFocused: {
    color: "black", 
  },
  iconSearch: {
    width: 18,
    height: 18,
    marginRight: 15,
  },
});

export default CustomSearchBar;
