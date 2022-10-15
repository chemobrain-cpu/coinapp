import React, { useState,useEffect } from 'react'
import { View, Text, SafeAreaView, ScrollView, Pressable, StyleSheet, Image, Switch } from 'react-native'
import { Feather, AntDesign } from '@expo/vector-icons';
import { Card } from "react-native-shadow-cards"
import { useDispatch,useSelector  } from "react-redux";
import { logout } from "../store/action/appStorage";
import SettingModal from '../modals/profileSettingModal';
import * as WebBrowser from 'expo-web-browser';
import {truncate} from "../utils/util"

const ProfileSetting = ({ navigation }) => {
    useEffect(()=>{

    },[])

    
    const [header, setHeader] = useState(false);
    let { user } = useSelector(state => state.userAuth)
    let dispatch = useDispatch()
    const [modalVisible, setModalVisible] = useState(false)

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const scrollHandler = (e) => {
        if (e.nativeEvent.contentOffset.y > 5) {
            setHeader(true)
        } else {
            setHeader(false)

        }
    }
   

    const signoutHandler = async () => {
        dispatch(logout())
    }
    const navigateToPayment = () => {
        navigation.navigate('LinkToCard')
    }
    let updateVisibility = () => {
        navigation.navigate('UserCard')
        setModalVisible(false)
    }

    let navigateHandler = () => {
        navigation.removeListener('beforeRemove')
        setModalVisible(false)
        setTimeout(() => { navigation.goBack() }, 1000)
    }

    const changeInfo = () => {
        setModalVisible(true)
    }

    const limits = () => {
        navigation.navigate('LimitAndFeatures')

    }

    const goToPrivacy = () => {
        navigation.navigate('Privacy')

    }

    const changePhone = () => {
        navigation.navigate('PhoneSetting')

    }

    const supportHandler = async() => {
        //navigating to the browser
         //navigate to password reset page
         await WebBrowser.openBrowserAsync('http://192.168.42.227:8080')


    }







    return (<>
        <SettingModal modalVisible={modalVisible}
            updateVisibility={updateVisibility} navigateHandler={navigateHandler} />
        <SafeAreaView style={styles.screen}>
            <View style={{ ...styles.navigationHeader, position: header ? "absolute" : 'static', top: header ? 0 : 0, borderBottomWidth: header ? .5 : 0, borderBottomColor:'rgb(200,200,200)' }}>
                <Pressable onPress={() => navigation.goBack()} >
                    <Feather name="arrow-left" size={24} color="rgb(44, 44, 44)" />
                </Pressable>

                <Text style={{ ...styles.headerName, display: header ? 'flex' : 'none' }}>{truncate(user.firstName, 8)} {truncate(user.lastName, 8)}</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollviewContainer}
                onScroll={scrollHandler}>

                <Text style={{ ...styles.email, marginTop: header ? 100 : 0 }}>{user.email}</Text>

                <Text style={styles.username}>{truncate(user.firstName, 8)} {truncate(user.lastName, 8)}</Text>


                <Card style=
                    {styles.card}>
                    <Text style={styles.cardText}>
                        share your love of crypto and get $100.000 of free bitcoin

                    </Text>
                    <Image
                        source={require('../assets/icons/box.jpeg')}
                        style={{ width: 70, height: 70 }} />
                </Card>

                <Text style={styles.paymentText}>Payments methods</Text>

                <Pressable style={styles.button} onPress={navigateToPayment}>
                    <Text style={styles.buttonText}>Add a payment method</Text>
                </Pressable>

                <Text style={styles.paymentText}>Account</Text>

                <Pressable style={styles.settingContainer} onPress={limits}>
                    <View>
                        <Text style={styles.settingText}>Limits and features</Text>
                    </View>
                    <AntDesign name="right" size={18} color="rgb(44, 44, 44)" />

                </Pressable>




                <Pressable style={styles.settingContainer} onPress={changeInfo}>
                    <View>
                        <Text style={styles.settingText}>Change Info</Text>
                    </View>
                    <AntDesign name="right" size={18} color="rgb(44, 44, 44)" />

                </Pressable>



                <Pressable style={styles.settingContainer} onPress={goToPrivacy}>
                    <View>
                        <Text style={styles.settingText}>Privacy</Text>
                    </View>
                    <AntDesign name="right" size={18} color="rgb(44, 44, 44)" />

                </Pressable>

                <Pressable style={styles.settingContainer} onPress={changePhone}>
                    <View>
                        <Text style={styles.settingText}>Phone Numbers</Text>
                    </View>
                    <AntDesign name="right" size={18} color="rgb(44, 44, 44)" />

                </Pressable>



                <Text style={styles.paymentText}>General</Text>

                <Pressable style={styles.settingContainer}>
                    <View>
                        <Text style={styles.settingText}>Appearance</Text>
                    </View>
                    <AntDesign name="right" size={18} color="rgb(44, 44, 44)" />

                </Pressable>






                <Pressable style={styles.settingContainer} onPress={supportHandler}>
                    <View>
                        <Text style={styles.settingText}>Support</Text>
                    </View>
                    <AntDesign name="right" size={18} color="rgb(44, 44, 44)" />

                </Pressable>

                <Pressable style={styles.signoutbutton} onPress={signoutHandler}>
                    <Text style={styles.signoutbuttonText}>Sign out</Text>
                </Pressable>

                <Text style={styles.footerText}>App Version:10.26.4(10260004),</Text>
                <Text style={styles.footerText}>production</Text>




            </ScrollView>
        </SafeAreaView>
    </>

    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#fff",



    },
    navigationHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingTop: 50,
        paddingBottom: 10,
        backgroundColor: '#fff',
        zIndex: 10,
        width: '100%',
        paddingHorizontal: 10,

    },
    headerName: {
        marginLeft: '25%',
        fontFamily: 'Poppins',
        fontSize: 17

    },
    scrollviewContainer: {
        width: '100%',
        paddingHorizontal: 15,
    },
    email: {
        color: 'rgb(80, 80, 80)',
        fontFamily: 'Poppins',
        fontSize: 16,
    },
    username: {
        color: "black",
        fontSize: 23,
        fontFamily: 'Poppins',
        marginBottom: 30
    },
    card: {
        width: '90%',
        borderRadius: 8,
        padding: 12,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderBottomWidth: 2,
        borderColor: 'rgb(223, 223, 223)',
        marginBottom: 40,
        marginRight: '5%',
        marginLeft: '5%'
    },
    cardText: {
        fontSize: 17,
        width: '60%',
        fontFamily: 'ABeeZee',
        fontWeight: '100',
        color: 'rgb(27, 27, 27)'
    },
    paymentText: {
        fontSize: 21,
        fontFamily: 'Poppins',
        marginBottom: 30

    },

    button: {
        width: '90%',
        paddingVertical: 18,
        backgroundColor: 'rgb(240,240,240)',
        borderColor: 'rgb(230,230,230)',
        borderRadius: 35,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
        marginRight: '5%',
        marginLeft: '5%',
        borderWidth: 1,
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'ABeeZee'

    },
    settingContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 50

    },
    settingText: {
        fontSize: 17,
        fontFamily: 'ABeeZee'
    },
    switchContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 10

    },


    signoutbutton: {
        width: '100%',
        paddingVertical: 18,
        borderColor: 'rgb(230,230,230)',
        borderRadius: 35,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
        borderWidth: 1,
        backgroundColor: 'rgb(240,240,240)',
    },
    signoutbuttonText: {
        color: 'red',
        fontSize: 15,
        fontFamily: 'Poppins'

    },
    footerText: {
        fontSize: 15,
        fontFamily: 'ABeeZee',
        width: '100%',
        color: 'rgb(100,100,100)'

    }

})


export default ProfileSetting