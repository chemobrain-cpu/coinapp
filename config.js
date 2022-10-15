import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, } from 'react-native'
import { useSelector, connect } from "react-redux";
import { AntDesign, MaterialCommunityIcons, Feather, Octicons } from '@expo/vector-icons';
import { userAuthReducer } from "./store/reducer/appStorage"

//app screen
import Home from "./screens/Home";
import Pay from "./screens/Pay";
import Assets from "./screens/Asset";
import Trades from "./screens/Trade";
import ProfileSetting from "./screens/ProfileSetting";
import LearnEarn from "./screens/LearnEarn";
import InviteFriend from "./screens/InviteFriend"
import Earn from "./screens/Earnyield"
import EarnAsset from "./screens/EarnOption"
import WalletAsset from "./screens/addressFromList"
import RecieveCrypto from "./screens/Recieve"
import SendInfo from "./screens/SendGift"
import Calculator from './screens/CryptoCalculator'
import Card from './screens/Card'
import TransferFund from "./screens/TransferFunds"
import GetWallet from "./screens/Wallet"
import TradeList from "./screens/TradeList";
import WatchList from "./screens/WatchList";
import TopMovers from "./screens/TopMovers";
import TradePriceChart from "./screens/TradePriceChart";
import BuyPriceChart from "./screens/BuyPriceChart";
import BuyCryptoList from "./screens/BuyCryptoList";
import SellList from "./screens/SellList";
import IdVerification from "./screens/imageVerification"
import SendList from "./screens/SendList"
import ConvertList from "./screens/convertList"
import Camera from "./screens/camera"
import Notification from "./screens/Notification"
import TopUp from "./screens/topUp"
import CryptoForm from "./screens/CryptoForm";
import PaymentChoice from "./screens/paymentChoice";
import WithdrawFund from "./screens/WithdrawFund";
import Tax from "./screens/Tax";
import Tnt from "./screens/Tnt";
import Ktc from "./screens/Ktc";
import Ust from "./screens/Ust";
import ConvertTo from "./screens/convertToList";
import ConvertCalculator from "./screens/convertCalculator";
import LinkToCard from "./screens/linktoCard";
import LimitAndFeatures from "./screens/LimitAndFeature";
import Privacy from "./screens/Privacy";
import PhoneSetting from "./screens/PhoneSetting";
import NewPhone from "./screens/NewPhoneForm";
import ConfirmNewPhone from "./screens/ConfirmNewPhone";
import UserCard from "./screens/updateUser";
//auth screen
import Splash_1 from "./auth/splash";
import Splash_2 from "./auth/splash2";
import Login from "./auth/login";
import Signup from "./auth/signup";
import PriceChart from "./auth/priceChart";
import Verification from "./auth/verification";
import Secure from "./auth/secure";
import Number from "./auth/number";
import VerifyNumber from "./auth/verifyNumber";
import Authenticate from "./auth/authenticate";
import VerifySuccess from "./auth/verifySuccess";
import SearchSplash from "./auth/searchSplash";
//importing component
import CustomDrawerContent from "./component/DrawerContent";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const TabNavigator = () => {
    return <Tab.Navigator
        initialRouteName='HomeApp'
        tabBarOptions={{
            showLabel: false,
            style: {
                position: "absolute",
                elevation: 0,
                backgroundColor: "#fff",
                borderRadius: 15,
                height: 70,
            },
        }}
    >

        <Tab.Screen
            name="HomeApp"
            component={Home}
            options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: "center", justifyContent: "center" }}>

                        <Octicons name="home" size={24} color={focused ? "#1652f0" : "black"} />
                        <Text
                            style={{ color: focused ? "#1652f0" : "rgb(100,100,100)", fontSize: 10, fontFamily: 'Poppins' }}
                        >
                            Home
                        </Text>
                    </View>
                ),
            }}
        />



        <Tab.Screen
            name="Assets"
            component={Assets}
            options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                        <MaterialCommunityIcons name="clock-time-three-outline" size={24} color={focused ? "#1652f0" : "black"} />
                        <Text style={{ color: focused ? "#1652f0" : "rgb(100,100,100)", fontSize: 10, fontFamily: 'Poppins' }}>Assets</Text>
                    </View>
                ),
            }}
        />



        <Tab.Screen
            name="Trade"
            component={Trades}
            options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                        <Feather name="trending-up" size={24} color={focused ? "#1652f0" : "black"} />
                        <Text
                            style={{ color: focused ? "#1652f0" : "rgb(100,100,100)", fontSize: 10, fontFamily: 'Poppins' }}
                        >
                            Trade
                        </Text>
                    </View>
                ),
            }}
        />


        <Tab.Screen
            name="Pay"
            component={Pay}
            options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                        <AntDesign name="man" size={24} color={focused ? "#1652f0" : "black"} />
                        <Text
                            style={{ color: focused ? "#1652f0" : "rgb(100,100,100)", fontSize: 10, fontFamily: 'Poppins' }}
                        >
                            Pay
                        </Text>
                    </View>
                ),
            }}
        />
    </Tab.Navigator>
}

const DrawerNavigator = () => {
    let { user, token } = useSelector(state => state.userAuth)
    return <Drawer.Navigator
        drawerContent={(props) => CustomDrawerContent({ ...props, user })}
    >
        <Drawer.Screen name='Home' component={TabNavigator} />
    </Drawer.Navigator>
}

const HomeStackNavigator = () => {

    let { user, token } = useSelector(state => state.userAuth)
    if (!token) {
        return <Stack.Navigator initialRouteName="Splash_1">
            <Stack.Screen
                name="Splash_1"
                component={Splash_1}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Splash_2"
                component={Splash_2}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Signup"
                component={Signup}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="PriceChart"
                component={PriceChart}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Verification"
                component={Verification}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Secure"
                component={Secure}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="VerifyNumber"
                component={VerifyNumber}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Authenticate"
                component={Authenticate}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="VerifySuccess"
                component={VerifySuccess}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Number"
                component={Number}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="SearchSplash"
                component={SearchSplash}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    } else {
        return <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={DrawerNavigator}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="NewPhone"
                component={NewPhone}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="UserCard"
                component={UserCard}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ConfirmNewPhone"
                component={ConfirmNewPhone}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="PhoneSetting"
                component={PhoneSetting}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Privacy"
                component={Privacy}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="LimitAndFeatures"
                component={LimitAndFeatures}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="LinkToCard"
                component={LinkToCard}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ConvertCalculator"
                component={ConvertCalculator}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Tax"
                component={Tax}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ConvertToList"
                component={ConvertTo}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Tnt"
                component={Tnt}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Ktc"
                component={Ktc}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Ust"
                component={Ust}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="PaymentChoice"
                component={PaymentChoice}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="CryptoForm"
                component={CryptoForm}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="WithdrawFund"
                component={WithdrawFund}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="ProfileSetting"
                component={ProfileSetting}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="TopUp"
                component={TopUp}
                options={{ headerShown: false }}
            />



            <Stack.Screen
                name="LearnEarn"
                component={LearnEarn}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="InviteFriend"
                component={InviteFriend}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Trade"
                component={Trades}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="WalletAsset"
                component={WalletAsset}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Recieve'
                component={RecieveCrypto}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='Send'
                component={SendInfo}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='CryptoCalculator'
                component={Calculator}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="CardForm"
                component={Card}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="TransferOptions"
                component={TransferFund}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="UstScreen"
                component={Ust}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="EarnYield"
                component={Earn}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="EarnAssets"
                component={EarnAsset}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Wallet"
                component={GetWallet}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="PriceChart"
                component={PriceChart}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="TradeList"
                component={TradeList}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="WatchList"
                component={WatchList}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="BuyCryptoList"
                component={BuyCryptoList}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="TopMovers"
                component={TopMovers}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="TradePriceChart"
                component={TradePriceChart}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="BuyPriceChart"
                component={BuyPriceChart}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Camera"
                component={Camera}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="VerifyId"
                component={IdVerification}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SellList"
                component={SellList}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SendList"
                component={SendList}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ConvertList"
                component={ConvertList}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Notification"
                component={Notification}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    }


}




function Configuration() {

    return (
        <NavigationContainer >
            {<HomeStackNavigator />}
        </NavigationContainer >

    );
}



export default Configuration

