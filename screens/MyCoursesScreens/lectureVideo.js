import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';


export default function lectureVideo({route}) {
  const{LectureURL}= route.params

  return (
    <View style={{
      flex: 1,
      justifyContent:'center',}}>
      <Video
      source={{ uri: LectureURL }}
      style={{ width: "100%", aspectRatio: 16 / 9 }}
      useNativeControls
      resizeMode="contain"
      />
    </View>
  );
  
}

