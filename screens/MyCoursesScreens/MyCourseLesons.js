import { View, Text, ScrollView, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const lmsAuthHeader = {
    'X-LLMS-CONSUMER-KEY': 'ck_cb5719ce35a4ac18cce3470bdae661a4ade3615b',
    'X-LLMS-CONSUMER-SECRET': 'cs_d4d3a69bed430a223238bfbca504ec7341d99a98'
  }

export default function MyCourseLesons({ navigation ,route}) {
const{SectionURL}= route.params


const[lessons, setLessons]= useState([])

useEffect(()=> 
    axios({
    method:'get',
    url: SectionURL,
    headers:lmsAuthHeader,
    })
    .then((jsooon) => setLessons(jsooon.data))
    .catch(err => console.log(err))
    , [])


return (
    <ScrollView >
    {lessons.map( lesson => {
      return (
        <View style>
          <TouchableOpacity 
        style={{
          backgroundColor:'orange',
          padding :10,
          margin:10,
          marginBottom:10,
          borderRadius:10,
        }}
        onPress={()=> navigation.navigate('lectureVideo' , {LectureURL :lesson.video_embed})}
        >
        <Text style={{fontSize: 15 , color:'white' }} >{lesson.title.rendered}</Text>
        </TouchableOpacity>

          <TouchableOpacity style={{backgroundColor:'blue'}}>
          </TouchableOpacity>
        </View>
)})}   
    </ScrollView>
)



}