import { View, Text, Image } from 'react-native'
import React from 'react'

export default function HelpScreen() {
  return (
    <View style={{ flex:1 ,backgroundColor:'white',alignItems:'center',}}>
      <Image style={{width:140,height:220,alignSelf:'center', margin:25,}}source={{uri:"https://elitestudents.link/wp-content/uploads/2022/04/Study_Smat_Logo-Copy.png"}}/>
      <Text style={{fontWeight:'bold',fontSize:20,margin:10}}>راسلونا على واتس اب او تلكرام</Text>
      <Text style={{fontWeight:'bold',fontSize:25}}>0774 283 8705</Text>
    </View>
  )
}