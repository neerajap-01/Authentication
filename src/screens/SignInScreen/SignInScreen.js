import React, {useState} from "react";
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from "react-native";
import Logo from "../../../assets/images/rideit.png";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";

const SignInScreen = () => {  
    const [username, setUsername]= useState('');
    const [password, setPassword]= useState('');
    
    const onSignInPressed = () => {
        //validate user

        navigation.navigate('Home');
    }

    const onForgotPasswordPressed = () => {
        navigation.navigate("ForgotPassword");
    }

    const onSignUpPressed = () => {
        navigation.navigate("SignUp");
    }

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image 
                    source={Logo} 
                    style={[styles.logo, {height: height * 0.3}]} 
                    resizeMode="contain"
                />

                <CustomInput 
                    placeholder="Username" 
                    value={username} 
                    setValue={setUsername}
                />

                <CustomInput 
                    placeholder="Password" 
                    value={password} 
                    setValue={setPassword}
                    secureTextEntry
                />

                <CustomButton text="Sign In" onPress={onSignInPressed}/>

                <CustomButton 
                    text="Forgot Password?" 
                    onPress={onForgotPasswordPressed}
                    type="TERTIARY"
                />

                <SocialSignInButtons />

                <CustomButton 
                    text="Don't have an account? Create one" 
                    onPress={onSignUpPressed}
                    type="TERTIARY"
                />  

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 10,
    },

    logo: {
        width: '70%',
        maxWidth: 400,
        maxHeight: 300,
    },
});

export default SignInScreen