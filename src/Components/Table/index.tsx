import React from "react";
import { Text, FlatList, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";
interface Props {
  data: {
    currencyGroup: string;
    name: string;
    logo: string;
    latestPrice: string;
    day: string;
    week: string;
    month: string;
    year: string;
  }[];
}

const Table: React.FC<Props> = (props: Props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Sort By</Text>
        <View>
          <Text>Default</Text>
          <AntDesign name="caretdown" size={24} color="black" />
        </View>
      </View>
      <FlatList
        data={props.data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <React.Fragment>
              <Text>{item?.name}</Text>
              <Text>{item?.currencyGroup}</Text>
            </React.Fragment>
          );
        }}
      />
    </View>
  );
};

export default Table;
