import React,{useState} from 'react';
import { StatusBar } from 'react-native'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//import Home from './homeStackNavigation';
//import Chat from './chatStckscreens';
import Sell from '../screens/sellbookScreens/sellbook';
//import Acount from './acountStact';
import Home from '../screens/homeScreens/home';
import Chat from '../screens/chatScreeens/chatscreens';
import AcountScreens from '../screens/acountScreens/acountScreens';


const Tab = createMaterialBottomTabNavigator();

export default function Tabnavigation({navigation}) {

 
  return (

   
      <Tab.Navigator 
        initialRouteName="Home"
        //activeColor=""
       /* activeColor="#e91e63"
        inactiveColor="#FFF"
        style={{ backgroundColor: '#0bdbab' }}*/
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={28} />
            ),
           tabBarColor:'#08d4c4',
           headerStyle:{
             shadowColor:'#FFF'
           },
         
          }}
        />

          <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
           tabBarBadge: 3,
            tabBarLabel: 'Chat',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="chat" color={color} size={26} />
            ),
            tabBarColor:'#18a173'
          }}
        />
        <Tab.Screen
          name="Sell"
          component={Sell}
          options={{
            tabBarLabel: 'Sell book',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="book-plus-multiple" color={color} size={28} />
            ),
            tabBarColor:'#08d4c4'
          }}
        />
        
          <Tab.Screen
          name="Acount"
          component={AcountScreens}
          options={{
            
            tabBarLabel: 'My acount',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
            tabBarColor:'#38a118'
          }}
          
        />
        
      </Tab.Navigator>
    );

}

