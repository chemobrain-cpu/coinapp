import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    Image,
    Dimensions
} from "react-native";
import { Feather, AntDesign } from '@expo/vector-icons';

const SendInfo = ({ navigation }) => {
    // let { coins } = useSelector(state => state.userAuth)

    const navigateToAccount = () => {
        navigation.navigate('SendList')

    }
   
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView contentContainerStyle={styles.scrollContainer} stickyHeaderIndices={[0]}>
                <View style={{ display: 'flex', width: '100%' }}>
                    <View style={{ ...styles.headerContainer, backgroundColor: '#fff', }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>


                            <Feather name="arrow-left" size={25} color={"rgb(44,44,44)"} />


                        </TouchableOpacity>

                    </View>
                </View>

                <View style={styles.imageContainer}>
                    <Image
                        source={require('../assets/icons/sendImage.jpg')}
                        style={styles.image} />

                </View>

                <View style={styles.headingCon}>
                    <Text style={styles.headText}>Send crypto to your friends and family</Text>
                </View>

                <View style={styles.contentContainer}>
                    <View style={styles.contentIcon}>
                        <AntDesign name="check" size={20} color="black" />

                    </View>

                    <View style={styles.content}>
                        <Text style={styles.contentHeader}>Select a recipient</Text>
                        <Text style={styles.contentText}>You can send a crypto asset to anyone with an a wallet ID</Text>
                    </View>
                </View>

                <View style={styles.contentContainer}>
                    <View style={styles.contentIcon}>
                        <AntDesign name="check" size={20} color="black" />
                    </View>

                    <View style={styles.content}>
                        <Text style={styles.contentHeader}>Convert crypto</Text>
                        <Text style={styles.contentText}>Convert crypto to cash directly to your bank account</Text>

                    </View>


                </View>

                <View style={styles.contentContainer}>
                    <View style={styles.contentIcon}>
                        <AntDesign name="check" size={20} color="black" />
                    </View>

                    <View style={styles.content}>
                        <Text style={styles.contentHeader}>Gift crypto</Text>
                        <Text style={styles.contentText}>Gift crypto asset to anyone with an a wallet ID</Text>

                    </View>


                </View>

            </ScrollView>
            <View style={styles.footerButtonCon}>
                <TouchableOpacity style={styles.footerButton} onPress={navigateToAccount}>
                    <Text style={styles.footerButtonText}>Continue to send</Text>

                </TouchableOpacity>


            </View>
        </SafeAreaView>


    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        width: Dimensions.get('window').width,
        paddingHorizontal: 15,
    },
    headerContainer: {
        paddingTop: 50,
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        marginBottom: 45,
    },
    imageContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    image: {
        width: 180,
        height: 130,
        marginBottom: 35
    },
    headingCon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 45,
    },
    headText: {
        fontSize: 20,
        fontFamily: 'Poppins',
        textAlign: 'center'
    },
    contentContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 35,
        paddingLeft:4

    },
    contentIcon: {
        width: '10%',
        paddingTop:5

    },
    content: {
        width: '90%'

    },
    contentHeader: {
        fontSize: 18,
        fontFamily: 'Poppins'
    },
    contentText: {
        fontSize: 17,
        color: 'rgb(100,100,100)',
        fontFamily: 'ABeeZee',
        width:'97%'
    },
    footerButtonCon: {
        height: '13%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
        
    },
    footerButton:{
        width:'90%',
        backgroundColor:'#1652f0',
        paddingVertical:17,
        borderRadius:50,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    footerButtonText:{
        fontSize:15,
        color:'#fff',
        fontFamily: 'Poppins'
       
    }

})

export default SendInfo;