
import { loginstyle } from '@/styles/login-style';
import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';





export default function Starting() {
  return (
    <View style={{ flex:1}}>
      <ImageBackground 
        source={require("../assets/images/leaf.png")}
        style = {loginstyle.backgroundthing}
        resizeMode="cover"
        blurRadius={10}
        >
        <View style={loginstyle.overlay}>
          <TouchableOpacity style={loginstyle.box}>
            <Text style={loginstyle.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>    
      
      
      </ImageBackground>
    </View>



  );
}
