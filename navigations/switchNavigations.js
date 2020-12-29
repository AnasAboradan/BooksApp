import React,{useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer,DarkTheme} from '@react-navigation/native';


import LoginScreens from '../screens/loginSystemScreens/loginScreens'
import SignUpScreens from '../screens/loginSystemScreens/signUpScreens';
import SplashScreen  from '../screens/loginSystemScreens/splashScreen';
import Tabnavigation from '../navigations/tabnavigation';

import SearchScreen from '../screens/homeScreens/searchScreen';
import FilterScreen from '../screens/homeScreens/filterScreen';
import Bookdetalies from '../screens/homeScreens/bookdetalis'
import FilterResultScreen from '../screens/homeScreens/FilterResultScreen';
import MessageScreen from '../screens/chatScreeens/message';
import Sendmessage from '../screens/chatScreeens/sendmessage'

import MyBooks from '../screens/acountScreens/myBooks';
import MyProfile from '../screens/acountScreens/myProfile';
import HelpAndSuport from '../screens/acountScreens/helpAndSuport';
import Feedback from '../screens/acountScreens/feedback';
import Wish from '../screens/acountScreens/wish';
import BookShow from '../screens/acountScreens/bookShow';
import Edit from '../screens/acountScreens/editScreen';
import EditProfile from '../screens/acountScreens/editProfile'







const RootStack =createStackNavigator();
export default function ChatStckNavigations() {
const [userId,SetUserId]=useState('');
  return (
    <NavigationContainer >
    <RootStack.Navigator>
      <RootStack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}}  />
      <RootStack.Screen name="LoginScreens" component={LoginScreens} options={{headerShown:false}} />
      <RootStack.Screen name="SignUpScreens" component={SignUpScreens} options={{headerShown:false}}/>
      <RootStack.Screen name="Tabnavigation" component={Tabnavigation} options={{headerShown:false}} />
     
      <RootStack.Screen name="SearchScreen" component={SearchScreen}  options={{
          header: () => null,
        }}/>
      <RootStack.Screen name="FilterResultScreen" component={FilterResultScreen}  options={{
          header: () => null,
        }}/>
      
      <RootStack.Screen name="FilterScreen" component={FilterScreen}
        options={{headerShown:false}} />
      <RootStack.Screen name="Bookdetalies" component={Bookdetalies}
      options={({route})=>({
        headerBackTitleVisible:false,
        headerTitle:false,
        headerTransparent:true,
        headerTintColor:'#08d4c4'
      })
        
      }/>
      
      <RootStack.Screen name="MessageScreen" component={MessageScreen}
       options={({route})=>({
        headerBackTitleVisible:false,
        headerTitle:true,
        headerTransparent:true,
        headerTintColor:'#fff'
      })}/>
      
      <RootStack.Screen name="Sendmessage" component={Sendmessage}
       options={({route})=>({
        headerBackTitleVisible:false,
        headerTitle:true,
        headerTransparent:true,
        headerTintColor:'#fff'
      })}/>
     
      <RootStack.Screen name="MyBooks" component={MyBooks} 
       options={{headerShown:false}} />
      <RootStack.Screen name="BookShow" component={BookShow}
       options={({route})=>({
        headerBackTitleVisible:false,
        headerTitle:false,
        headerTransparent:true,
        headerTintColor:'rgba(0,0,0,0.8)'
      })}  />
      <RootStack.Screen name="MyProfile" component={MyProfile}  options={{headerShown:false}}   />
      <RootStack.Screen name="Feedback" component={Feedback} 
      options={{headerShown:false}}  />
      <RootStack.Screen name="Wish" component={Wish}   options={{headerShown:false}} />
      <RootStack.Screen name="Edit" component={Edit}  options={{headerShown:false}}  />
      <RootStack.Screen name="HelpAndSuport" component={HelpAndSuport}
           options={{headerShown:false}} />
      <RootStack.Screen name="EditProfile" component={EditProfile} options={{headerShown:false}}   />
     </RootStack.Navigator>
    </NavigationContainer>
  );
}




