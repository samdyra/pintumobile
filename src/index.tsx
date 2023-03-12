import React, { useEffect } from "react";
import useCoinData from "./Context/Hooks/useCoinData";
import { Context as CoinListContext } from "./Context/CryptoContext";
import { useContext } from "react";
import { Table, Layout, Header, Badge } from "./Components";

const MainScreen = () => {
  const { state, getAllCoin } = useContext(CoinListContext);

  const { data, isError, isLoading, refetch } = useCoinData();
  
  useEffect(() => {
    getAllCoin(data);
  }, [data]);

  return (
    <Layout>
      <Header />
      <Badge />
      <Table data={state} isLoading={isLoading} refetch={refetch} isError={isError}/>
    </Layout>
  );
};

export default MainScreen;
