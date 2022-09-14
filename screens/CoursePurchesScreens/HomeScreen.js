import  React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity,  Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen({navigation }) {

  const[ID , setID]=useState()


  useEffect(()=>{
    AsyncStorage.getItem('ID')
    .then(value => {
    if (value == '' ){
      navigation.replace('Login')
    }
    else{setID(value)}
  })
      
  },[])


    return (
      <ScrollView style={{flex:1 }}>

        <View style={styles.View}>
          <TouchableOpacity onPress={ ()=> navigation.navigate('Tutors') } style={styles.TouchableOpacity} >
            <Image style={styles.Image}source={{uri:"https://elitestudents.link/wp-content/uploads/2022/09/toturs.png"}}/>
            <Text style={styles.Text} >مدرسين  المنصة</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={ ()=> navigation.navigate('MyCourses',{StudentID : ID}) } style={styles.TouchableOpacity}>
            <Image style={styles.Image} source={{uri:"https://elitestudents.link/wp-content/uploads/2022/09/courses-1.png"}}/>          
            <Text style={styles.Text} >دوراتك الخاصه</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.View}>
            <TouchableOpacity onPress={()=>navigation.navigate('Profile')} style={styles.TouchableOpacity}>
            <Image style={styles.Image} source={{uri:"https://elitestudents.link/wp-content/uploads/2022/09/2436683.png"}}/>
            <Text  style={styles.Text}>الملف الشخصي</Text>
          </TouchableOpacity> 

          <TouchableOpacity onPress={()=> navigation.navigate('Help')} style={styles.TouchableOpacity} >
            <Image style={styles.Image} source={{uri:"https://elitestudents.link/wp-content/uploads/2022/09/4961759.png"}}/>
            <Text style={styles.Text}>احتاج مساعدة </Text>
          </TouchableOpacity>
          
        </View>
      </ScrollView>
      ) 
}


const styles ={
  View:{
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-around',
    paddingBottom :5,
  },
  TouchableOpacity:{
    width:'45%',
    backgroundColor:'white',
    alignItems :'center',
    padding :10,
    marginTop:20,
    borderRadius:20,
  },
  Image:{
    justifyContent:'center',
    width: 120,
    height: 120,
    paddingTop :20,
  },
  Text:{
    width:'100%',
    marginTop:20,
    padding:10,
    borderRadius:20,
    backgroundColor:'orange',
    color:'white',
    fontSize:16,
  }


}