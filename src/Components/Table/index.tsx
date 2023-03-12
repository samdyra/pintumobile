import React from 'react'
import { Text, FlatList, View } from "react-native";

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
    }[]
}


const Table: React.FC<Props> = (props: Props) => {

    return (
        <View>
            <FlatList
                data={props.data}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item, index }) => {
                    return (
                        <React.Fragment>
                            <Text>{item?.name}</Text>
                            <Text>{item?.currencyGroup}</Text>
                        </React.Fragment>
                    )
                }}
            />
        </View>
    )
}

export default Table