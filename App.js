import React, { useEffect, useState } from 'react'
//import {Navig} from '@react-navigation/native'
import { View, Text, StyleSheet, Dimensions, SafeAreaView } from 'react-native'
import * as Font from 'expo-font';
//redux config
//configuring redux store
import ReduxThunk from "redux-thunk"
import { combineReducers, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux"
import { userAuthReducer } from "./store/reducer/appStorage"



//importing component
import Screen from "./config";





export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  //redux store setup
  const rootReducer = combineReducers({
    userAuth: userAuthReducer,
  })
  //creating store
  const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

  

  useEffect(() => {
    let isSuscribe = true
    let loadFonts = async () => {
    try {
      await Font.loadAsync({
        'ABeeZee': require('./assets/fonts/ABeeZee-Regular.ttf'),
        'Poppins': require('./assets/fonts/Poppins-Medium.ttf'),
      });
      if(isSuscribe){
        setIsLoading(false)

      }

    } catch (err) {
      console.log(err)
    }
  }

    loadFonts()
    return ()=>{
      isSuscribe = false
    }
  }, [loadFonts])

 

  if (isLoading) {

    return (<View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.logo}>coinbases</Text>
      </View></View>)
  }
  return (
    <Provider store={store}>

      <Screen />

    </Provider >

  );
}


let styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#1652f0",
    zIndex: 10
  },
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    color: '#fff',
    fontSize: 35,

  }


})
