import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/CoursePurchesScreens/HomeScreen';
import TutorsScreen from './screens/CoursePurchesScreens/TutorsScreen';
import ShowCoursesScreen from './screens/CoursePurchesScreens/ShowCoursesScreen';
import CourseCheckoutScreen from './screens/CoursePurchesScreens/CourseCheckoutScreen'
import LoginScreen from './screens/CoursePurchesScreens/LoginScreen'
import SecondFormScreen from './screens/CoursePurchesScreens/SecondFormScreen';

import { FontAwesome5 } from '@expo/vector-icons';
import MycoursesScreen from './screens/MyCoursesScreens/MycoursesScreen';
import MyCourseContent from './screens/MyCoursesScreens/MyCourseContent';

import  lectureVideo from './screens/MyCoursesScreens/lectureVideo';
import Quize from './screens/MyCoursesScreens/Quize';
import MyCourseLesons from './screens/MyCoursesScreens/MyCourseLesons';
import HelpScreen from './screens/CoursePurchesScreens/HelpScreen';
import ProfileScreen from './screens/MyCoursesScreens/ProfileScreen';




const Stack = createNativeStackNavigator();

export default  function App() {
 
 return (
  <NavigationContainer>

    <Stack.Navigator>
      <Stack.Screen name='Login' component={LoginScreen} options={{title:'تسجيل الدخول',headerTitleAlign:'center'}}/>
      <Stack.Screen name='SecondForm' component={SecondFormScreen} options={{title:'معلومات اضافية',headerTitleAlign:'center'}}/>
      <Stack.Screen name='Home' component={HomeScreen} options={{title:'الشاشة الرئيسية',headerTitleAlign:'center'}}/>
      <Stack.Screen name='Tutors' component={TutorsScreen} options={{title:'مدرسين المنصة',headerTitleAlign:'center'}}/>
      <Stack.Screen name='ShowCourses' component={ShowCoursesScreen} options={{title:'الكورسات',headerTitleAlign:'center'}}/>
      <Stack.Screen name='CourseCheckout' component={CourseCheckoutScreen} options={{title:'تأكيد الكود',headerTitleAlign:'center'}}/>
      <Stack.Screen name='Help' component={HelpScreen} options={{title:'الحصول على مساعدة',headerTitleAlign:'center'}}/>
      <Stack.Screen name='Profile' component={ProfileScreen} options={{title:'الملف الشخصي',headerTitleAlign:'center'}}/>
      {/* the above is the  Course purches stack navigation */}

      {/* below is the MyCourses stack navigation */}
      <Stack.Screen name='MyCourses' component={MycoursesScreen} options={{title:'دوراتي',headerTitleAlign:'center'}}/>
      <Stack.Screen name='MyCourseContent' component={MyCourseContent} options={{title:'محتويات الدورة',headerTitleAlign:'center'}}/>
      <Stack.Screen name='MyCourseLesons' component={MyCourseLesons} options={{title:'المحاضرات',headerTitleAlign:'center'}}/>
      <Stack.Screen name='lectureVideo' component={lectureVideo} options={{title:'المحاضرة',headerTitleAlign:'center'}}/>
      <Stack.Screen name='Quize' component={Quize} options={{title:'Quize',headerTitleAlign:'center'}}/>  
    </Stack.Navigator>
  
    
  </NavigationContainer>
    
    )}


    

// function Tabsfunction(){

//   return(
//   <NavigationContainer>

// <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;

//             if (route.name === 'Home') {
//               iconName = focused
//                 ? 'ios-information-circle'
//                 : 'ios-information-circle-outline';
//             } else if (route.name === 'Tutors') {
//               iconName = focused ? 'ios-list-box' : 'ios-list';
//             }
//             return <FontAwesome5 name="chalkboard-teacher" size={24} color="black" />;
            
//           },
//           tabBarActiveTintColor: 'tomato',
//           tabBarInactiveTintColor: 'gray',
//         })}
//       >
//   <Tab.Screen name={"الرئيسة"} component={HomeScreen} />
//   <Tab.Screen name={"دوراتي"} component={MycoursesScreen} />
//   <Tab.Screen name={"المدرسين"} component={TutorsScreen} />
//   </Tab.Navigator>
//   </NavigationContainer>

//   )}