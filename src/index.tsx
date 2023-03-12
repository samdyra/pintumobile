import React, { useEffect } from 'react'
import useCoinData from './Context/Hooks/useCoinData';
import { Context as CoinListContext } from './Context/CryptoContext';
import { useContext } from 'react';
import { Text, FlatList, View } from "react-native";
import Table from './Components/Table';

const MainScreen = () => {
    const { state, getAllCoin } = useContext(CoinListContext);

    const {
        data, isError, isLoading
    } = useCoinData()

    useEffect(() => {
        getAllCoin(data)
    }, [data])
    
    return (
        <Table data={state}/>
    )
}

export default MainScreen