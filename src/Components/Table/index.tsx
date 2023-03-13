import React, { useState, useMemo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";
import { Shimmer, TokenElement, ModalSort } from "../../Components";
import { SORT_TYPE } from "../../Constants/Miscs";
import { sortToken } from "../../Helpers/GlobalHelpers";

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
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [typeSort, setTypeSort] = useState<string>(
    SORT_TYPE.HIGHEST_PERFORMANCE
  );

  const sortedToken = useMemo(() => {
    const list = sortToken(props.data, typeSort);
    return list;
  }, [props.data, typeSort]);
  
  const RenderList = props.isLoading ? (
    <PlaceholderShimmer />
  ) : (
    <TokenElement
      data={sortedToken}
      isLoading={props.isLoading}
      refetch={props.refetch}
    />
  );

  const handleTypeSort = (type: string) => {
    setTypeSort(type);
  };

  const handleHidemodal = () => {
    setIsVisible(false);
  };

  const handleShowModal = () => {
    setIsVisible(true);
  };

  return (
    <React.Fragment>
      <ModalSort
        isVisible={isVisible}
        handleHideModal={handleHidemodal}
        handleTypeSort={handleTypeSort}
        typeSort={typeSort}
      />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>Sort By</Text>
          <TouchableOpacity onPress={handleShowModal}>
            <View style={styles.sort}>
              <Text style={styles.text}>{typeSort}</Text>
              <AntDesign name="down" size={18} color="black" />
            </View>
          </TouchableOpacity>
        </View>
        {RenderList}
      </View>
    </React.Fragment>
  );
};

const PlaceholderShimmer: React.FC = () => {
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
