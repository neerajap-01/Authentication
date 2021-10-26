import React, {useState} from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const NewPasswordScreen = () => {  
   
    const [code, setCode]= useState('');
    const [newPassword, setNewPassword]= useState('');
    
    const onSubmitPressed = () => {
        navigation.navigate("Home");
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
                    placeholder="Enter your confirmation code" 
                    value={code} 
                    setValue={setCode}
                />

                <CustomInput 
                    placeholder="Enter your new password" 
                    value={newPassword} 
                    setValue={setNewPassword}
                />

                <CustomButton text="Submit" onPress={onSubmitPressed}/>

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

export default NewPasswordScreen