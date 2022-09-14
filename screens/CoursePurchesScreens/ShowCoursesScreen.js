import { View, ScrollView, Button ,Image, Text, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import CourseCheckoutScreen from './CourseCheckoutScreen'
import axios from 'axios'

 const websiteURl = "https://elitestudents.link"


 export default  ShowCoursesScreen = ({ navigation ,route}) => {

    //https://reactnavigation.org/docs/params , passing params with navigation.navigate
    var { toturName , toturID } = route.params
    

const [CoursesResponse ,setCoursesResponse] =useState([]);   

  useEffect(()  => {
    axios.get(websiteURl+"/wp-json/llms/v1/courses")
    .then(jsooon => setCoursesResponse(jsooon.data))
    .catch(err =>console.log(err))
  
  
  
  
  }
    , [] )


return (
  <ScrollView style={{ flex: 1 }}>

    {CoursesResponse
    .filter( C => C.instructors == toturID )
    .map(C => {
      return(
      <TouchableOpacity
      style={styles.TouchableOpacity}
      onPress={()=>
      navigation.push('CourseCheckout',{CourseID : C.id })} 
      >
        <Text style={styles.Text}>{C.title.rendered}</Text>
        <Text >{toturName}</Text> 

      </TouchableOpacity> )})}
      
  </ScrollView>)}
        
  
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
    padding:20,
    borderRadius:20,
    backgroundColor:'orange',
    color:'white',
  }
}

// const [SingleResponse ,setSingleResponse] =useState([]);


    //  useEffect(()  => {
    //   fetch(websiteURl+"/wp-json/learnpress/v1/courses/id_course")
    //   .then(res => res.json())
    //   .then(Singlejsooon=>setSingleResponse(Singlejsooon.data)) }, [])
