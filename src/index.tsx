import React, { useEffect } from "react";
import useCoinData from "./Context/Hooks/useCoinData";
import { Context as CoinListContext } from "./Context/CryptoContext";
import { useContext } from "react";
import { Table, Layout, Header, Badge } from "./Components";
import { Text } from "react-native";

const MainScreen = () => {
  const { state, getAllCoin } = useContext(CoinListContext);

  const { data, isError, isLoading, refetch } = useCoinData();
  
  useEffect(() => {
    getAllCoin(data);
  }, [data]);

  return (
    <Layout>
      <Header />
      <Text onPress={refetch}>REFRESH</Text>
      <Badge />
      <Table data={state} isLoading={isLoading} />
    </Layout>
  );
};

export default MainScreen;
