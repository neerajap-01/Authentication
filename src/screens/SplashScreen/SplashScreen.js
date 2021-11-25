import React from 'react';
import {View, Text, StyleSheet, useWindowDimensions, Image} from 'react-native';
import LottieView from 'lottie-react-native';
import {useNavigation, StackActions} from "@react-navigation/native";
import Logo from "../../../assets/images/rideit_splash.png";


const SplashScreen = () => {
    const navigation = useNavigation();
    const {height} = useWindowDimensions();
    return (
        <View style={styles.container}>
            <Image
                source={Logo}
                style={[styles.logo, {height: height * 0.3}]}
                resizeMode="contain"
            />

            <LottieView
                style={styles.lottie}
                source={require('../../../assets/splash.json')}
                autoPlay
                speed={1.3}
                loop={false}
                onAnimationFinish={()=>{
                    navigation.dispatch(
                        StackActions.replace('SignIn', {
                            user: null,
                        })
                    );
                }}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: '#ffffff',
    },
    logo: {
        width: '70%',
        top: '15%',
        maxWidth: 400,
        maxHeight: 300,
    },
    lottie: {
        width: '100%',
        top: '28%',
    },
});

export default SplashScreen;
