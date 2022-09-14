
import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import {  Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View ,Linking } from 'react-native'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen ()  {

  const websiteURl = "https://elitestudents.link"
  const navigation = useNavigation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [ErrorMsg, setErrorMsg] = useState('')

  useEffect(()=>{
    setErrorMsg('')
    AsyncStorage.getItem('ID')
    .then(value =>{
      if(value !== null){
        navigation.replace('Home')}})
  },[])
  

  function handleSignUp () {
    axios({
      method: 'post',
      url:websiteURl+"/wp-json/custom_users/register",
      data:{
        username :email,
        email :email,
        password :password,
        role:'student'
        }
      })
      .then(res =>{
        AsyncStorage.setItem('ID',res.data.toString())
        navigation.replace('SecondForm')
      })
      .catch( (err)=>{
        console.log(err)
        if(email =='' || password==''){
         setErrorMsg('يرجى ملئ جميع الحقول')}
        
        else
        {setErrorMsg('هذا الحساب موجود سابقا ,سجل كطالب سابق')}
        })

    
    
    }


  function handleLogin () {
     axios({
      method: 'post',
      url:websiteURl+"/wp-json/custom_users/login",
      data:{
        username:email,
        password:password
      },
    })
    .then(res=>{
      AsyncStorage.setItem('ID',res.data.ID.toString())
      navigation.replace('Home')})

    .catch( ()=>{
      if(email =='' || password==''){
       setErrorMsg('يرجى ملئ جميع الحقول')}
      
      else
      {setErrorMsg('هذا الحساب غير موجود, تاكد من المعلومات او سجل كطالب جديد')}
      
    })
    

    }
    

  return (
    
  <KeyboardAvoidingView style={styles.container}>
    <Image onPress={()=> Linking.openURL('https://youtu.be/PtSNoZZtapk')} style={{width:200,height:200}} source={{uri:'https://elitestudents.link/wp-content/uploads/2022/09/squar_tmz_logo.png'}}/>
    <Text onPress={()=> Linking.openURL('https://youtu.be/PtSNoZZtapk')} style={{fontSize:15,padding:10}}>اضغط هنا لشرح عملية التسجيل</Text>
    <Text style={{color:'red',fontSize:20}}>{ErrorMsg}</Text>
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="الايميل"
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="الباسورد" 
        value={password}
        onChangeText={text => setPassword(text)}
        style={styles.input}
      />
    </View>

    <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={handleSignUp}
        style={[styles.button, styles.buttonOutline]}
      >
        <Text style={styles.buttonOutlineText} >تسجيل كطالب جديد</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleLogin}
        style={styles.button}
      >
        <Text style={styles.buttonText}>تسجيل كطالب سابق</Text>
      </TouchableOpacity>
    </View>
  </KeyboardAvoidingView>

  )
}



const styles = StyleSheet.create({
    container: {
      backgroundColor:'white',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer: {
      width: '80%'
    },
    input: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
      marginBottom: 5,
      borderWidth:1,
      borderColor: 'grey'
    },
    buttonContainer: {
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
    },
    button: {
      backgroundColor: 'orange',
      width: '100%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 15,

    },
    buttonOutline: {
      backgroundColor: 'white',
      marginTop: 5,
      borderColor: 'orange',
      borderWidth: 2,
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
    buttonOutlineText: {
      color: 'orange',
      fontWeight: '700',
      fontSize: 16,
    },
  })


  
  