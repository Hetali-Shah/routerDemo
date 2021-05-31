import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux'


const Login = () => {
  return (
    <TouchableOpacity onPress={() => Actions.home()}>
    <Text>Hello Login</Text>
    </TouchableOpacity>
  )
}

export default Login;
