import React from "react";
import { View, FlatList, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { performanceGetter, groupingFormat } from "../../Helpers/GlobalHelpers";
import { SvgUri } from "react-native-svg";

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
}

const TokenElement:React.FC<Props> = (props: Props) => {
  return (
    <FlatList
      data={props.data}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => {
        const performance = performanceGetter(item?.day);
        const latestPrice = `Rp${groupingFormat(
          parseFloat(item?.latestPrice)
        )}`;
        const performanceStyle =
          parseFloat(item?.day) > 0
            ? styles.descTokenPerformance
            : styles.descTokenPerformanceMinus;

        return (
          <TouchableOpacity style={styles.listContainer}>
            <View style={styles.descTokenContainer}>
              <SvgUri
                width="38"
                height="38"
                uri={item?.logo}
                color={item?.color}
              />
              <View style={styles.descToken}>
                <Text style={styles.descTokenTextName}>{item?.name}</Text>
                <Text style={styles.descTokenText}>{item?.currencyGroup}</Text>
              </View>
            </View>
            <View style={styles.priceToken}>
              <Text style={styles.descTokenPrice}>{latestPrice}</Text>
              <Text style={performanceStyle}>{performance}</Text>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default TokenElement;
