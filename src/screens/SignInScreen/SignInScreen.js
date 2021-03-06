import React, {useState} from "react";
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TextInput} from "react-native";
import Logo from "../../../assets/images/rideit.png";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

const SignInScreen = () => {
    const {control, handleSubmit, formState: {errors}} = useForm();

    const onSignInPressed = (data) => {
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
                    name="username"
                    placeholder="Username"
                    control={control}
                    rules={{
                        required: 'Username is required',
                        minLength: {
                            value: 5,
                            message: 'Username should be minimum 5 characters long',
                        },
                        maxLength: {
                            value: 24,
                            message: 'Username should be maximum 24 characters long',
                        },
                    }}
                />

                <CustomInput
                    name="password"
                    placeholder="Password"
                    control={control}
                    secureTextEntry
                    rules={{
                        required: 'Password is required',
                    }}
                />

                <CustomButton text="Sign In" onPress={handleSubmit(onSignInPressed)}/>

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
