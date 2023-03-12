import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { styles } from "./styles";
import { Texts } from "../../Constants/Miscs";

const Badge: React.FC = () => {
  return (
    <View style={styles.container}>
      <FlatList 
      data={Texts}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => <Text style={styles.text}>{item}</Text>}
      />
    </View>
  );
};

export default Badge;
