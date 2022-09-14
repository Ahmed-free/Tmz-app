import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import react from "react";
import HomeScreen from "./screens/CoursePurchesScreens/HomeScreen";
import TutorsScreen from "./screens/CoursePurchesScreens/TutorsScreen";
import MycoursesScreen from "./screens/MyCoursesScreens/MycoursesScreen";

const Tab = createBottomTabNavigator();


export default function Tabsfunction(){

return(
<NavigationContainer>
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

</NavigationContainer>

  )}

