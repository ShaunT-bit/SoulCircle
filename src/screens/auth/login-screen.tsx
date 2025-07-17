import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const LoginScreen = () => {
    return (
      <View>
        <View>
            <Text>Login</Text>
        </View>
        <View>
            <Text>Username</Text>
            <TextInput placeholder="Enter username" placeholderTextColor="#000" />

            <Text>Password</Text>
            <TextInput placeholder="Enter password" placeholderTextColor="#000" /> 
        </View>
      </View>
    );

};

export default LoginScreen;

const styles = StyleSheet.create({});
