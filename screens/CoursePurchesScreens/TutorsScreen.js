// import { useNavigation } from '@react-navigation/native';
import  React,{useState,useEffect} from 'react';
import {Image,Text, ScrollView,Dimensions,View ,Button, TouchableOpacity } from 'react-native';
import axios from 'axios'

// import api from 'llms-api-node'
     
//     const llms = new api( {
//   url: "https://elitestudents.link",
//   consumerKey: 'ck_cb5719ce35a4ac18cce3470bdae661a4ade3615b',
//   consumerSecret: 'cs_d4d3a69bed430a223238bfbca504ec7341d99a98',
// } );


var {height, width} = Dimensions.get('window');

export default function TutorsScreen({navigation}) {

    const websiteURl = "https://elitestudents.link"
    const llmsAuth = {
      'X-LLMS-CONSUMER-KEY': 'ck_cb5719ce35a4ac18cce3470bdae661a4ade3615b',
      'X-LLMS-CONSUMER-SECRET': 'cs_d4d3a69bed430a223238bfbca504ec7341d99a98' }

    const [TutorsResponse ,setTutorsResponse] =useState([]);

    useEffect(()  => {
        axios.get(websiteURl+'/wp-json/llms/v1/instructors?roles=instructor',{
        headers:llmsAuth } )
        .then((jsoon) => setTutorsResponse(jsoon.data))
        .catch(err =>console.log(err))

      }
        , [])

return (
    <ScrollView style={{ flex: 1 }}>

    {TutorsResponse.map(t => {
        
      return(
        <TouchableOpacity  
        style={styles.TouchableOpacity}
        onPress={()=>{ navigation.navigate('ShowCourses',{toturID : t.id ,toturName:t.name })}}
        >

          {/* <Text>الخبرة:   {2022-t.acf.career_start_year_+" سنة"}   </Text>
          <Text>  الشهادة:   {t.acf.degree}   </Text> */}

          <Image 
          source={{uri: t.avatar_urls['96']}}
          style = {styles.Image}
          /> 
        <Text style={{ fontWeight: 'bold' , fontSize:15 , margin:15 }} >{t.name}</Text>

      </TouchableOpacity>
    
      )})} 
           
</ScrollView>
  );
}


const styles={
  TouchableOpacity:{
    backgroundColor:'white',
    padding :10,
    marginTop:20,
    borderRadius:20,
    flexDirection:'row',
  },
  Image:{
    justifyContent:'center',
    width: 100,
    height: 100,
    paddingTop :20,
    borderRadius:10,
  },
  Text:{
    justifyContent:'center',
    width:'100%',
    marginTop:20,
    padding:20,
    borderRadius:20,
    backgroundColor:'orange',
    color:'white',
    
  }
}