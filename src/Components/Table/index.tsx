import React, { memo } from "react";
import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";
import { Shimmer, TokenElement } from "../../Components";

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
    color: string;
  }[];
  isLoading: boolean;
}

const Table: React.FC<Props> = (props: Props) => {
  const RenderList = props.isLoading ? (
    <Shimmer width={300} height={200} />
  ) : (
    <TokenElement data={props.data} />
  );
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Sort By</Text>
        <View style={styles.sort}>
          <Text style={styles.text}>Default</Text>
          <AntDesign name="down" size={18} color="black" />
        </View>
      </View>
      {RenderList}
    </View>
  );
};

export default memo(Table);
