import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const UrlInputScreen = () => {
  const [url, setUrl] = useState('');

  const handleSubmit = () => {
    // Save the URL to Firebase
    console.log('URL submitted:', url);
  };

  return (
    <View>
      <Text>Enter URL for RFID:</Text>
      <TextInput
        value={url}
        onChangeText={setUrl}
        placeholder="Enter URL"
      />
      <Button title="Submit URL" onPress={handleSubmit} />
    </View>
  );
};

export default UrlInputScreen;
