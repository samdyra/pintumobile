import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Market</Text>
      <View style={styles.image}>
        <MaterialIcons name="favorite-border" size={32} color="black" />
        <AntDesign name="search1" size={32} color="black" />
      </View>
    </View>
  );
};

export default Header;
