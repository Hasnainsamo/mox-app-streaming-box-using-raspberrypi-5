import React from 'react';
import { View, Text, Button } from 'react-native';

const AdminPanelScreen = () => {
  const handleResetTimer = () => {
    // Reset Timer Logic
  };

  return (
    <View>
      <Text>Admin Panel</Text>
      <Button title="Reset Timer" onPress={handleResetTimer} />
    </View>
  );
};

export default AdminPanelScreen;
