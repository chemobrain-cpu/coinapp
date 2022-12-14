import React from 'react'
import { View, StyleSheet} from 'react-native'
import CryptoCard from './currencyContainer'


const AssetList = ({ navigationHandler,coins }) => {
    
    return (
        <View style={styles.watchContainer}>
            <View>
                {coins.map((coin) => (
                    <CryptoCard key={coin.id} coin={coin}
                        navigationHandler={() => navigationHandler(coin)} />
                ))}
            </View>
        </View>
    )
}

let styles = StyleSheet.create({
    watchContainer: {
        height: 420,
        width: "100%",
    },
    coinName: {
        fontSize: 17,
        fontFamily: 'Poppins'
    },
    symbol: {
        fontSize: 20,
        color: "#5d616d",
        fontFamily: 'ABeeZee'
    },
    current_price: {
        fontSize: 20,
        fontFamily: 'ABeeZee',
        color: 'green'

    },
   
})

export default AssetList
