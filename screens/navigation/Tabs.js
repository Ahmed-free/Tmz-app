import { View, Text } from 'react-native'
import React from 'react'
import MycoursesScreen from '../MyCoursesScreens/MycoursesScreen';
import HomeScreen from '../CoursePurchesScreens/HomeScreen';
import TutorsScreen from '../CoursePurchesScreens/TutorsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Tabs() {
    return(
       
          <Tab.Navigator
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;
        
              if (route.name === 'Home') {
              iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
              } else if (route.name === 'Tutors') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
              }
              return <FontAwesome5 name="chalkboard-teacher" size={24} color="black" />;
              
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
          >
        
          <Tab.Screen name={"الرئيسة"} component={HomeScreen} />
          <Tab.Screen name={"دوراتي"} component={MycoursesScreen} />
          <Tab.Screen name={"المدرسين"} component={TutorsScreen} />
          </Tab.Navigator>
        
  )
}