import React, { memo } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Market</Text>
      <View style={styles.image}>
        <TouchableOpacity>
          <MaterialIcons name="favorite-border" size={32} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="search1" size={32} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(Header);
