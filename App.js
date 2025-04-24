import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import {Audio} from 'expo-av';

export default function App() {

  const playAudio = async () => {
    const { sound } = await Audio.Sound.createAsync(        
      {
        uri: 'https://sudarsangp.com/expo-audio-test.mp3'
      }
    );
    await sound.playAsync();
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title="Click to Play audio" onPress={playAudio}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
