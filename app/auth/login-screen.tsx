import Wave from '@/components/Wave';
import { styles } from '@/styles/styles';
import React, { useState } from 'react';
import { Image, Text, TextInput, View } from 'react-native';




export default function Index() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

 /* const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      Alert.alert('Login Successful', `Welcome, ${username}!`);
    } else {
      Alert.alert('Login Failed', 'Invalid credentials');
    }
  };*/

  return (
    

    <>
      <View style={styles.container}>
        <View style={styles.colorSection} />
        <Text style={styles.title}>Login</Text>

        {/*<View style={{
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 8,
          paddingHorizontal: 10,
          paddingVertical: 8,
          marginLeft: 20, // 👈 Move the whole input with border
        }}>*/}

          <TextInput
            style={styles.input_username}
            placeholder="Username"
            placeholderTextColor={'#000000ff'}
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input_password}
            placeholder="Password"
            placeholderTextColor={'#000000ff'}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

        
        {/*</View>*/}


        <Image
        source={require("@/assets/images/leaf.png")}
        style={{
          position: "absolute",
          top: 0,
          width: "120%",
          height: 280,}}
          resizeMode="contain"
          blurRadius={5}
          />      
        <Wave />


      </View>
      
    </>
  );
}

