import { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

import FontAwesome from '@expo/vector-icons/FontAwesome';



export default function App() {
  const [isPlaying, setIsPlaying] = useState<boolean>(true)
  const [showOverlay, setShowOverlay] = useState<boolean>(false)


  return (
    <View className='absolute bg-green-400 w-full'>
      <Pressable
        onPress={() => {
          setShowOverlay(!showOverlay)
        }}
        onLongPress={() => {
          // handle or ignore
        }}>

        <View pointerEvents="none" className='w-full'>
            <YoutubePlayer
              height={340}
              videoId='M14pPBqfkLU'
              play={isPlaying}
            />
        </View>
        {showOverlay && 
        <View className='bottom-60 flex flex-row justify-center'>
          <Pressable onPress={()=>setIsPlaying(!isPlaying)}>
            <FontAwesome name="play" size={64} color={'#ffffff'} />
          </Pressable>
            
         
          
     
        </View>
        }
        </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}