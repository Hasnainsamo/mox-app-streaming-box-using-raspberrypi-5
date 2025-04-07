import React from 'react';
import { View, Text, Button } from 'react-native';

const DeviceConnectScreen = ({ navigation }) => {
  const handleConnect = () => {
    // Connect to the MOX device via WiFi
    navigation.navigate('UrlInput');
  };

  return (
    <View>
      <Text>Device Connection Screen</Text>
      <Button title="Connect to MOX" onPress={handleConnect} />
    </View>
  );
};

export default DeviceConnectScreen;
