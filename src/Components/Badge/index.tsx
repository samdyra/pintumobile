import React, { memo } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Texts } from "../../Constants/Miscs";

const Badge: React.FC = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={Texts}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Text style={styles.text}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default memo(Badge);
