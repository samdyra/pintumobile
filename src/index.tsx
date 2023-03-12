import React, { useEffect } from "react";
import useCoinData from "./Context/Hooks/useCoinData";
import { Context as CoinListContext } from "./Context/CryptoContext";
import { useContext } from "react";
import { Table, Layout, Header, Badge } from "./Components";

const MainScreen = () => {
  const { state, getAllCoin } = useContext(CoinListContext);

  const { data, isError, isLoading } = useCoinData();

  useEffect(() => {
    getAllCoin(data);
  }, [data]);

  return (
    <Layout>
      <Header />
      <Badge />
      <Table data={state} />
    </Layout>
  );
};

export default MainScreen;
