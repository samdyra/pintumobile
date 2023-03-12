import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

const Header = () => {
  return (
    <View>
      <Text>Market</Text>
      <View>
        <MaterialIcons name="favorite-border" size={24} color="black" />
        <AntDesign name="search1" size={24} color="black" />
      </View>
    </View>
  );
};

export default Header;
