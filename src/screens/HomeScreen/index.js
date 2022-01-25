import React from "react";
import {View, Text, Pressable} from "react-native";
import {Auth} from "aws-amplify";

const HomeScreen = () => {

    const signOut = () => {
        Auth.signOut();
    };
    return (
        <View>
            <Text style={{fontSize:24, alignItems: 'center'}}>Home, Sweet Home</Text>
            <Pressable onPress={signOut}>
                <Text
                    style={{
                        width: '100%',
                        textAlign: "center",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 200,
                        color: 'red',
                        marginVertical: 20,
                        fontSize: 20,
                    }}>Sign Out</Text>
            </Pressable>
        </View>
    );
};


export default HomeScreen;
