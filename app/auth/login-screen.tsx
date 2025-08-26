import Wave from '@/components/Wave';
import { shapestyle } from '@/styles/shapes-style';
import { styles } from '@/styles/styles';
import { Link, router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';




export default function Index() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);

  return (


    <>
      <View style={styles.container}>
        <View style={styles.colorSection} />
        <Text style={styles.title}>Login</Text>

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




        <Link href="/auth/forgot-screen" style={styles.forgot}>
          Forgot password?
        </Link>

        <TouchableOpacity
          onPress={() => {
            if (username === 'admin' && password === 'password') {
        router.push("/tabs/home");
      } else {
        Alert.alert('Login Failed', 'Invalid credentials');
      }

          }}
          style={styles.box}>
            <Text style={styles.login2buttonText}>Login</Text>


        </TouchableOpacity>


      <View style = {{flexDirection:"row"  }}>
        <TouchableOpacity onPress={() => setChecked(!checked)}>
          <View style={[shapestyle.checkbox, checked && shapestyle.checked]}>
            <Text style={shapestyle.checkmark}>✓</Text>
          </View>
          <Text style={shapestyle.label}>Remember me</Text>
        </TouchableOpacity>
      </View>









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
      <View style= {styles.welcomecontainer}>
        <Text style={styles.welcome}>Welcome Back</Text>
        <Text style={styles.welcomelog}>Login to your account</Text>
      </View>

    </>
  );
}