import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const TimerControl = ({ onTimerChange }: { onTimerChange: (action: string) => void }) => {
  const [timer, setTimer] = useState<number>(0);

  const handleStartTimer = () => {
    onTimerChange('start');
    setTimer(1); // Example: start timer
  };

  const handleStopTimer = () => {
    onTimerChange('stop');
    setTimer(0); // Example: stop timer
  };

  const handleResetTimer = () => {
    onTimerChange('reset');
    setTimer(0); // Reset timer
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Timer: {timer} minutes</Text>
      <Button title="Start Timer" onPress={handleStartTimer} />
      <Button title="Stop Timer" onPress={handleStopTimer} />
      <Button title="Reset Timer" onPress={handleResetTimer} />
    </View>
  );
};

export default TimerControl;
