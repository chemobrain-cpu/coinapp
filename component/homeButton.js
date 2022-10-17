import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet} from "react-native"

const Button = ({text,pressHandler,children})=>{
    return <TouchableOpacity 
    style={styles.actionInnerContainer}
    onPress={()=>pressHandler(`${text}`)}>
    <View style={styles.action} >
        {children}

    </View>
    <Text style={styles.actionText}>{text}</Text>

</TouchableOpacity>
}

const styles = StyleSheet.create({
    actionInnerContainer: {
        display: 'flex',
        alignItems: 'center',
        paddingVertical: 10,
    },
    action: {
        width: 45,
        height: 45,
        borderRadius: 45,
        backgroundColor: '#1652f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    actionText: {
        fontSize: 14,
        fontFamily: 'ABeeZee',
    },

})

export default Button