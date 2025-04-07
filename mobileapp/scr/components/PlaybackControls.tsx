import React from 'react';
import { View, Text, Button } from 'react-native';

const PlaybackControls = ({ onPlaybackAction }: { onPlaybackAction: (action: string) => void }) => {

  const handlePlayPause = () => {
    onPlaybackAction('play_pause');
  };

  const handleNext = () => {
    onPlaybackAction('next');
  };

  const handlePrevious = () => {
    onPlaybackAction('previous');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Playback Controls</Text>
      <Button title="Play/Pause" onPress={handlePlayPause} />
      <Button title="Next" onPress={handleNext} />
      <Button title="Previous" onPress={handlePrevious} />
    </View>
  );
};

export default PlaybackControls;
