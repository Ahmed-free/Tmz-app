import { View, Text  , KeyboardAvoidingView , TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const websiteURl = "https://elitestudents.link"

export default function ProfileScreen({navigation}) {
  
const [StudentName,setStudentName]= useState('')
const [Tele,setTele]= useState('')
const [parentPhone,setparentPhone]= useState('')

  
function handleSecondForm(){
  AsyncStorage.getItem('ID')
  .then(ID =>
    axios({
      method:'post',
      url:`${websiteURl}/wp-json/custom_users/update/`,
      data: {
        StudentID:ID,
        first_name:StudentName,
        last_name:parentPhone,
        nickname:Tele}
    })
  ).then(navigation.replace('Home'))
  .catch(err =>console.log(err))

}
  return (
    
    <KeyboardAvoidingView
      style={styles.container}
    >
      <Image style={{width:150,height:150,}} source={{uri:'https://elitestudents.link/wp-content/uploads/2022/09/squar_tmz_logo.png'}}/>
    <Text style={styles.Text}>يمكنك تحديث معلوماتك الشخصية </Text>
      <View style={styles.inputContainer}>
        <TextInput
          defaultValue='اسمك'
          placeholder="الاسم"
          value={StudentName}
          onChangeText={text => setStudentName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder='معرف التلكرام (لاتنسه ال"@" بالبداية) '
          value={Tele}
          onChangeText={text => setTele(text)}
          style={styles.input}
        />
        <TextInput
          placeholder= "رقم هاتف ولي الامر" 
          value={parentPhone}
          onChangeText={text => setparentPhone(text)}
          style={styles.input}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleSecondForm}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText} > تحديث المعلومات</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={()=>{
            AsyncStorage.setItem('ID', '')
            navigation.reset({
              index: 0,
              routes: [{ name: 'Login' }],
            })}}
          style={styles.button}
        >
          <Text style={styles.buttonText} > تسجيل الخروج</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )


}

const styles = StyleSheet.create({
  Text:{ 
    fontSize:18,
    padding:5,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'white'
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
    marginTop: 10,
    borderWidth:0.5
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
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