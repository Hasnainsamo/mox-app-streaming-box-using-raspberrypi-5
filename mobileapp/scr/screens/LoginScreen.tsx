import React from 'react';
import { View, Text, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const handleLogin = () => {
    // Authentication logic, e.g., check credentials
    navigation.navigate('DeviceConnect');
  };

  return (
    <View>
      <Text>Login Screen</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
