import axios from 'axios';
import  React, { useEffect, useState } from 'react';
import { View, Text ,ScrollView, TouchableOpacity, StyleSheet} from 'react-native';

const websiteURl = "https://elitestudents.link"
const lmsAuthHeader = {
  'X-LLMS-CONSUMER-KEY': 'ck_cb5719ce35a4ac18cce3470bdae661a4ade3615b',
  'X-LLMS-CONSUMER-SECRET': 'cs_d4d3a69bed430a223238bfbca504ec7341d99a98'
}

export default function MycoursesScreen({ navigation ,route}) {
    var { StudentID } = route.params

    const [MyCoursesResponse ,setMyCoursesResponse] =useState([]); 

    useEffect(()=>
      axios({
      method:'get',
      url:`${websiteURl}/wp-json/llms/v1/students/${StudentID}`,
      headers:lmsAuthHeader,
     })
    .then((jsooon) =>setMyCoursesResponse(jsooon.data.MyEnrollments))
    .catch(err => console.log(err))
    , [])

    console.log(MyCoursesResponse)
if (Array.isArray(MyCoursesResponse)) {

  return (
    <ScrollView >
    {MyCoursesResponse.map( SingleCourse => {
        return (
          <TouchableOpacity
            style={styles.TouchableOpacity}
            onPress={() => navigation.navigate('MyCourseContent', { CourseID: SingleCourse.course_id })}
          >
            <Text style={styles.Text}>{SingleCourse.course_title}</Text>
            <Text>{SingleCourse.author_name}</Text>
          </TouchableOpacity>
          )})}   
      </ScrollView>
      )

    }

    else{return <View style={styles.View}><Text>ليس لديك اي دورات</Text></View>}

  
 }


  
const styles={
  TouchableOpacity:{
    backgroundColor:'white',
    padding :10,
    margin:20,
    marginBottom:10,
    borderRadius:20,
    flexDirection:'column',
  },
  Image:{
    justifyContent:'center',
    width: 100,
    height: 100,
    paddingTop :20,
    borderRadius:10,
  },
  Text:{
    fontSize:15,
    justifyContent:'center',
    width:'100%',
    marginBottom:20,
    padding:15,
    borderRadius:20,
    backgroundColor:'orange',
    color:'white',
  },
  View:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    paddingBottom :5,

  }
}