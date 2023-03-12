import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
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
  refetch: () => void;
  isError: boolean;
}

const Table: React.FC<Props> = (props: Props) => {
  const RenderList = props.isLoading ? (
    <PlaceholderShimmer />
  ) : (
    <TokenElement
      data={props.data}
      isLoading={props.isLoading}
      refetch={props.refetch}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Sort By</Text>
        <TouchableOpacity>
          <View style={styles.sort}>
            <Text style={styles.text}>Default</Text>
            <AntDesign name="down" size={18} color="black" />
          </View>
        </TouchableOpacity>
      </View>
      {RenderList}
    </View>
  );
};

const PlaceholderShimmer:React.FC = () => {
  return (
    <View style={styles.shimmer}>
      <Shimmer width="90%" height={50} />
      <Shimmer width="90%" height={50} />
      <Shimmer width="90%" height={50} />
      <Shimmer width="90%" height={50} />
      <Shimmer width="90%" height={50} />
      <Shimmer width="90%" height={50} />
      <Shimmer width="90%" height={50} />
      <Shimmer width="90%" height={50} />
    </View>
  );
};

export default Table;
