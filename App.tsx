import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';



export default function App() {
  return (
    <View className='flex-1 justify-center bg-black'>
      <Text className='text-sky-400'>Open up App.js to start working on your app!</Text>
      <Pressable
        onPress={() => {
          // handle or ignore
        }}
        onLongPress={() => {
          // handle or ignore
        }}>

        <View pointerEvents="none">
            <YoutubePlayer
              height={300}
              videoId='M14pPBqfkLU'
              play
            />
        </View>
        </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}