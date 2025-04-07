import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import DeviceConnectScreen from './src/screens/DeviceConnectScreen';
import UrlInputScreen from './src/screens/UrlInputScreen';
import AdminPanelScreen from './src/screens/AdminPanelScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="DeviceConnect" component={DeviceConnectScreen} />
        <Stack.Screen name="UrlInput" component={UrlInputScreen} />
        <Stack.Screen name="AdminPanel" component={AdminPanelScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
