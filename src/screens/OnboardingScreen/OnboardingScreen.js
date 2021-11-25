import React from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import {useNavigation} from "@react-navigation/native";


const Done = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal: 8, marginRight: 15}}
        {...props}
    ><Text style={{fontSize: 16, fontWeight: "600"}}>Done</Text></TouchableOpacity>
);
const OnboardingScreen = props => {
    const navigation = useNavigation();
  return (
      <Onboarding
          DoneButtonComponent={Done}
          onSkip={()=> navigation.navigate("SignIn")}
          onDone={()=> navigation.navigate("SignIn")}
          pages={[
              {
                  backgroundColor: '#ffffff',
                  image: (
                      <LottieView
                          style={{ height: 500}}
                          autoSize={false}
                          autoPlay
                          loop
                          source={require('../../../assets/lottieFiles/rideConfirm.json')}
                      />
                  ),
                  title: 'Confirm Your Ride',
                  subtitle: 'Choose from the variety of vehicles options available within the application',
              },{
                  backgroundColor: '#ffffff',
                  image: (
                      <LottieView
                          style={{ height: 500}}
                          autoSize={false}
                          autoPlay
                          loop
                          source={require('../../../assets/lottieFiles/pickUp.json')}
                      />
                  ),
                  title: 'Hope In Your Ride',
                  subtitle: 'Get the ride nearest to your location with your chosen driver and vehicle',
              },{
                  backgroundColor: '#ffffff',
                  image: (
                      <LottieView
                          style={{ height: 500}}
                          autoSize={false}
                          autoPlay
                          loop
                          source={require('../../../assets/lottieFiles/dropOff.json')}
                      />
                  ),
                  title: 'Enjoy The Ride',
                  subtitle: 'Finally enjoy the ride to your desired destination',
              },
          ]}
          transitionAnimationDuration={300}
      />
  );
};
const styles = StyleSheet.create({
    lottie: {
        height: 200,
    },
});

export default OnboardingScreen;
