import { View, Text, StyleSheet ,TouchableOpacity,KeyboardAvoidingView, TextInput} from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

const websiteURl = "https://elitestudents.link"
const lmsAuthHeader = {
  'X-LLMS-CONSUMER-KEY': 'ck_cb5719ce35a4ac18cce3470bdae661a4ade3615b',
  'X-LLMS-CONSUMER-SECRET': 'cs_d4d3a69bed430a223238bfbca504ec7341d99a98'
}


export default function CourseCheckoutScreen  ({ navigation , route}) {

const {CourseID} =route.params
const[ StudentID , setStudentID ] =useState()
const [code,setCode]= useState('')
const[Purshsed ,setPurshsed ] =useState(false)
const [errMSG,seterrMSG]= useState('')



useEffect(()=> 
AsyncStorage.getItem('ID')
.then(value => {
  setStudentID(value)
  axios({
    method:'get',
    url:`${websiteURl}/wp-json/llms/v1/students/${value}`,
    headers:lmsAuthHeader,
  })
  .then(res =>
    res.data.MyEnrollments.map(
      EnrollmentsArray =>
      {if (CourseID == EnrollmentsArray.course_id ) {setPurshsed(true)}}
    ))
} )
.catch((err) => console.log(err))
, [])


function handleSubmit(){

  axios({
    method:'put',
    url:`${websiteURl}/wp-json/code_validation/validate_code/`,
    data: {
      token:'PAINisGOOD123#++',
      CourseID:CourseID,
      StudentID:StudentID,
      code:code,
    }
  })
  .then(navigation.navigate('MyCourses',{StudentID:StudentID}))
  .catch(() => seterrMSG('الكود خاطئ يرجى التاكد '))
}

if( Purshsed == true ){
  navigation.navigate('MyCourseContent',{CourseID:CourseID})
  }

  else{return (
    <KeyboardAvoidingView
      style={styles.container}
    >      
      <View style={styles.inputContainer}>
        <Text> {errMSG}</Text>
        <TextInput
          placeholder="كود الدورة" 
          value={code}
          onChangeText={text => setCode(text)}
          style={styles.input}
        />

      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleSubmit}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText} >  الانضمام للدورة</Text>
        </TouchableOpacity>
        
        
      </View>
    </KeyboardAvoidingView>
  )}
}


const styles = StyleSheet.create({
  container: {
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
    fontSize:25
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
    fontSize:25
  },
  buttonOutlineText: {
    color: 'orange',
    fontWeight: '700',
    fontSize: 16,
  },
})