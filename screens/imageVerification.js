import React, { useState} from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, ScrollView, Dimensions, Image } from 'react-native';
import { useDispatch } from "react-redux";
import { useRoute } from "@react-navigation/native";

//importing modals
import AuthModal from '../modals/authModal'


const Verification = ({ navigation }) => {
    const [isAuthError, setIsAuthError] = useState(false)
  
    const [authInfo, setAuthInfo] = useState("")
    

    const route = useRoute()
    let dispatch = useDispatch()

   



    //getting email from previous page
    const email = "arierhiprecious"

    //this handler check if user email has been verified
    const gobackHandler = async () => {
        navigation.goBack()
        
    }

    const updateAuthError = () => {
        setIsAuthError(prev => !prev)
    }


    const takePictureHandler = () => {
        navigation.navigate('Camera')
    }





    return (<>
        {isAuthError && <AuthModal modalVisible={isAuthError} updateVisibility={updateAuthError} message={authInfo} />}<SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>


            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.body}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../assets/icons/secure.jpg')}
                        style={{ width: 350, height: 350, }} />

                </View>

                <View style={styles.verificationContainer}>
                    <Text style={styles.headerText}>
                        Identity Verification Required
                    </Text>
                    <Text style={styles.verificationText}>
                        Before making your first purchase,please verify your identity.Identity verification helps us ensure the safety and security of your crypto asset!
                    </Text>

                </View>
              



            </ScrollView>






            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.checkBtnContainer} onPress={takePictureHandler}>
                    <Text style={styles.check}>
                        Let's do it
                    </Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.resendBtnContainer} onPress={gobackHandler}>
                    <Text style={styles.resend}>Take me back</Text>

                </TouchableOpacity>


            </View>

        </SafeAreaView>
    </>
    )




}

const styles = StyleSheet.create({
    container: {
        width:  Dimensions.get('window').width,
        
    },

    body: {
        paddingTop: 100,
        display: 'flex',
        alignItems: 'center',
        zIndex: 1,
        marginHorizontal:10,
    },
    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').height / 4,
        marginVertical: 20,
        marginBottom: 50,
    },
    verificationContainer: {
        display: 'flex',
        alignItems: 'center',
        marginHorizontal:10
    },

    headerText: {
        fontSize: 22,
        marginBottom: 10,
        textAlign: 'center',
        fontFamily: 'Poppins',
        color: 'rgb(44, 44, 44)',
    },
    verificationText: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: '200',
        color: 'rgb(100,100,100)',
        fontSize: 19,
        fontFamily: 'ABeeZee'
    },
    email: {
        color: 'rgb(44, 44, 44)',
        fontWeight: '600'
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: Dimensions.get('window').width,
        bottom: '0%',
        height: 180,
        paddingTop: 20,
        zIndex: 5,
        backgrounColor: '#fff',

    },
    checkBtnContainer: {
        width: '85%',
        alignSelf: 'center',
        paddingVertical: 15,
        borderRadius: 30,
        backgroundColor: '#1652f0',
        marginBottom: 25,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    resendBtnContainer: {
        width: '85%',
        alignSelf: 'center',
        paddingVertical: 15,
        borderRadius: 30,
        backgroundColor: 'rgb(240,240,240)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    check: {
        color: '#fff',
        fontSize: 15,
        fontFamily: 'Poppins',
    },
    resend: {
        fontSize: 15,
        fontFamily: 'Poppins',

    }

});




export default Verification