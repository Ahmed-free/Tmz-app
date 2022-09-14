import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const websiteURl = "https://elitestudents.link"
const lmsAuthHeader = {
    'X-LLMS-CONSUMER-KEY': 'ck_cb5719ce35a4ac18cce3470bdae661a4ade3615b',
    'X-LLMS-CONSUMER-SECRET': 'cs_d4d3a69bed430a223238bfbca504ec7341d99a98'
  }
export default function MyCourseContent({ navigation ,route}){

const { CourseID } = route.params 
const [Content ,  setContent]= useState([])

useEffect(()=> 

    axios({
    method:'get',
    url:`${websiteURl}/wp-json/llms/v1/sections?parent=${CourseID}`,
    headers:lmsAuthHeader,
    })
    .then((jsooon) => setContent(jsooon.data))
    .catch(err => console.log(err))
    , [])


return (
  <ScrollView >
  {Content.map( Section => {
    return (
      <View style>
        <TouchableOpacity 
        style={{
          backgroundColor:'orange',
          padding :10,
          margin:20,
          marginBottom:10,
          borderRadius:10,
        }}
        onPress={()=> navigation.navigate('MyCourseLesons' , {SectionURL :Section._links.content[0].href})}
        >
        <Text style={{fontSize: 15 , color:'white' }} >{Section.title.rendered}</Text>
        </TouchableOpacity>
      </View>
      
        )})}   
  </ScrollView>
        )
}