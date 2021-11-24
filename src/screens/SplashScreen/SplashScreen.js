import React from 'react';
import {View, Text} from 'react-native';
import LottieView from 'lottie-react-native';
import {useNavigation} from "@react-navigation/native";


const SplashScreen = () => {
const navigation = useNavigation();
  return (
    <View style={{
        flex:1,
        backgroundColor: '#ffffff',
    }}>
        <LottieView
            source={require('../../../assets/splash.json')}
            autoPlay
            loop={false}
            onAnimationFinish={()=>{
                navigation.navigate('SignIn')
            }}
        />
    </View>
  );
};

export default SplashScreen;
