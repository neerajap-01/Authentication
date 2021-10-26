import React, {useState} from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const ConfirmEmailScreen = () => {  
   
    const [code, setCode]= useState('');
    
    const onConfirmPressed = () => {
        navigation.navigate("Home");
    }

    const onSignInPressed = () => {
        navigation.navigate("SignIn");
    }

    const onResendPressed = () => {
        console.warn('Code Resend');
    }

    const navigation = useNavigation();

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Confirm your email</Text>

                <CustomInput 
                    placeholder="Enter your confirmation code" 
                    value={code} 
                    setValue={setCode}
                />

                <CustomButton text="Confirm" onPress={onConfirmPressed}/>

                <CustomButton 
                    text="Resend Code" 
                    onPress={onResendPressed}
                    type="SECONDARY"
                />  
                
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

export default ConfirmEmailScreen