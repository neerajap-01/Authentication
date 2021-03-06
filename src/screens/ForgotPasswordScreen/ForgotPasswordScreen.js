import React, {useState} from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import {useForm} from "react-hook-form";

const ForgotPasswordScreen = () => {
    const {control, handleSubmit} = useForm();

    const onSendCodePressed = (data) => {
        console.log(data);
        navigation.navigate("NewPassword");
    }

    const onSignInPressed = () => {
        navigation.navigate("SignIn");
    }

    const navigation = useNavigation();

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Reset your password</Text>

                <CustomInput
                    name="username"
                    placeholder="Username"
                    control={control}
                    rules={{
                        required: 'Username is required',
                    }}
                />

                <CustomButton text="Send Code" onPress={handleSubmit(onSendCodePressed)}/>

                <CustomButton
                    text="Back to Sign In"
                    onPress={onSignInPressed}
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

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },

    text: {
        color: 'gray',
        marginVertical: 10,
    },

    link: {
        color: '#FDB075'
    },
});

export default ForgotPasswordScreen
