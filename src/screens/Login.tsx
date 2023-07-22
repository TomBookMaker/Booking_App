/* eslint-disable prettier/prettier */
import { View, Text, StatusBar } from 'react-native';
import React from 'react';

const Login = () => {
  return (
    <View style={{flex:1, backgroundColor:'black'}}>
        <StatusBar hidden />
      <Text>Login</Text>
    </View>
  );
};

export default Login;