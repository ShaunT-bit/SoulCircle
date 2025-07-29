
import { loginstyle } from '@/styles/login-style';
import { Link, router } from "expo-router";
import React, { useEffect, useRef } from 'react';
import { Animated, Easing, ImageBackground, Text, TouchableOpacity, View, } from 'react-native';


export default function Starting() {
  const slideAnim1 = useRef(new Animated.Value(-500)).current;   //sliding animation
    useEffect(() => {
      Animated.timing(slideAnim1, {
        toValue: 0, // slide to original position
        duration: 800,
        delay: 0,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }).start();
    }, []);  
  const slideAnim2 = useRef(new Animated.Value(-500)).current;   //sliding animation
    useEffect(() => {
      Animated.timing(slideAnim2, {
        toValue: 0, // slide to original position
        duration: 800,
        delay: 300,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }).start();
    }, []);  
  const slideAnim3 = useRef(new Animated.Value(-500)).current;   //sliding animation
    useEffect(() => {
      Animated.timing(slideAnim3, {
        toValue: 0, // slide to original position
        duration: 800,
        delay: 600,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }).start();
    }, []);  




  
  return (
    <View style={{ flex:1}}>
      <ImageBackground 
        source={require("../assets/images/leaf.png")}
        style = {loginstyle.backgroundthing}
        resizeMode="cover"
        blurRadius={20}
        >
        <View style={loginstyle.overlay}>
          
          
          <View style={loginstyle.header}>
              <Animated.Text style={[loginstyle.heading, { transform: [{ translateX: slideAnim1 }] }]}>THE APP.</Animated.Text>
              <Animated.Text style={[loginstyle.heading, { transform: [{ translateX: slideAnim2 }] }]}>FOR YOUR</Animated.Text>
              <Animated.Text style={[loginstyle.heading, { transform: [{ translateX: slideAnim3 }] }]}>MENTAL HEALTH</Animated.Text>
          </View>
          
          <TouchableOpacity 
          onPress={() => router.push("/auth/login-screen")}
          style={loginstyle.box}>
            <Text style={loginstyle.buttonText}>Login</Text>
            

          </TouchableOpacity>

          <View>
            {<Link href="/auth/sign-screen"  style={loginstyle.sign}>Create an account</Link>
  }
          </View>
          

        </View>    
      
      
      </ImageBackground>
    </View>



  );
}







