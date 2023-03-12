import React, { memo } from "react";
import { Text, FlatList, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";
import { SvgUri } from "react-native-svg";
import { performanceGetter, groupingFormat } from "../../Helpers/GlobalHelpers";

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

const Table: React.FC<Props> = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Sort By</Text>
        <View style={styles.sort}>
          <Text style={styles.text}>Default</Text>
          <AntDesign name="down" size={18} color="black" />
        </View>
      </View>
      <FlatList
        data={props.data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => {
          const performance = performanceGetter(item?.day);
          const latestPrice = `Rp${groupingFormat(
            parseFloat(item?.latestPrice)
          )}`;
          const performanceStyle = parseFloat(item?.day) > 0 ? styles.descTokenPerformance : styles.descTokenPerformanceMinus
          return (
            <View style={styles.listContainer}>
              <View style={styles.descTokenContainer}>
                <SvgUri
                  width="38"
                  height="38"
                  uri={item?.logo}
                  color={item?.color}
                />
                <View style={styles.descToken}>
                  <Text style={styles.descTokenTextName}>{item?.name}</Text>
                  <Text style={styles.descTokenText}>
                    {item?.currencyGroup}
                  </Text>
                </View>
              </View>
              <View style={styles.priceToken}>
                <Text style={styles.descTokenPrice}>{latestPrice}</Text>
                <Text style={performanceStyle}>{performance}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default memo(Table);
