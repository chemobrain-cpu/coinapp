import React, { useEffect } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, ScrollView, Dimensions, } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { goToHome } from "../store/action/appStorage";
import { useDispatch } from "react-redux";
import * as Notifications from 'expo-notifications';
//push notification
Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
});


const VerifySuccess = ({ navigation }) => {
    let dispatch = useDispatch()
    const [expoPushToken, setExpoPushToken] = useState([]);
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();


    useEffect(() => {
        registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

        Notifications.addNotificationReceivedListener(notification => {
            setNotification(notification);
        })

        Notifications.addNotificationResponseReceivedListener(async(response) => {
            await dispatch(goToHome())
        })

        async function schedulePushNotification() {
            await Notifications.scheduleNotificationAsync({
                content: {
                    title: "Welcome! 📬",
                    body: 'welcome to coinbase.fund your account and start trading  any crypto assets of your choice',
                    data: { data: 'goes here' },
                },
                trigger: { seconds: 2 },
            });
        }

        schedulePushNotification()

        return () => {
            Notifications.removeNotificationSubscription(notificationListener.current);
            Notifications.removeNotificationSubscription(responseListener.current);
        }

    }, [])

    const registerForPushNotificationsAsync = async () => {
        let token;

        if (Platform.OS === 'android') {
            await Notifications.setNotificationChannelAsync('default', {
                name: 'default',
                importance: Notifications.AndroidImportance.MAX,
                vibrationPattern: [0, 250, 250, 250],
                lightColor: '#FF231F7C',
            });
        }


        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
        }
        token = (await Notifications.getExpoPushTokenAsync()).data;
        //save the token in users account


        console.log(token)
        return token;
    }


    const continueHandler = async () => {
        await dispatch(goToHome())
    }

    return (<SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={styles.container}>


            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.body}>
                <View style={styles.imageContainer}>
                    <View style={styles.fontContainer}>
                        <AntDesign name="check" size={30} color="#fff" style={{ fontWeight: 'bold' }} />

                    </View>

                </View>

                <Text style={styles.headerText}>You're verified!</Text>

                <Text style={styles.contentText}>Thanks for your help verifying your identity .Now you're all set to start trading crypto.</Text>



                <View>
                    <TouchableOpacity style={styles.button} onPress={continueHandler}>
                        <Text style={styles.buttonText}>
                            Done
                        </Text>

                    </TouchableOpacity>
                </View>

            </ScrollView>




        </View>

    </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        marginHorizontal: '5%',
        paddingTop: 60

    },

    body: {
        paddingTop: 30,
        display: 'flex',
        flexDirection: 'column'
    },
    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').height / 4,
        marginVertical: 20,
        marginBottom: 40,
    },
    fontContainer: {
        width: 150,
        height: 150,
        borderRadius: 150,
        backgroundColor: '#1652f0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },

    headerText: {
        fontSize: 20,
        fontFamily: 'Poppins',
        color: 'rgb(44, 44, 44)',
        alignSelf: 'center',
        marginBottom: 15
    },
    contentText: {
        fontSize: 16,
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: '600',
        fontFamily: 'ABeeZee',
        marginBottom: Dimensions.get('window').height / 4,
        lineHeight: 22

    },






    button: {
        width: '100%',
        paddingVertical: 15,
        borderRadius: 30,
        backgroundColor: '#1652f0',
        marginBottom: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    },
    buttonText: {
        color: '#fff',
        fontSize: 15,
        fontFamily: 'Poppins',
    }

});

export default VerifySuccess