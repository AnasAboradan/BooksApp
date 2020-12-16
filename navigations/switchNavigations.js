import React,{useState} from 'react'


import LoginScreens from '../screens/loginSystemScreens/loginScreens'
import SignUpScreens from '../screens/loginSystemScreens/signUpScreens';
import SplashScreen  from '../screens/loginSystemScreens/splashScreen';
import Tabnavigation from '../navigations/tabnavigation';

import SearchScreen from '../screens/homeScreens/searchScreen';
import FilterScreen from '../screens/homeScreens/filterScreen';
import Bookdetalies from '../screens/homeScreens/bookdetalis'

import MessageScreen from '../screens/chatScreeens/message';

import MyBooks from '../screens/acountScreens/myBooks';
import MyProfile from '../screens/acountScreens/myProfile';
import HelpAndSuport from '../screens/acountScreens/helpAndSuport';
import Feedback from '../screens/acountScreens/feedback';
import Wish from '../screens/acountScreens/wish';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';




const RootStack =createStackNavigator();
export default function ChatStckNavigations() {
const [userId,SetUserId]=useState('');
  return (
    <NavigationContainer>
    <RootStack.Navigator>
      <RootStack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}}  />
      <RootStack.Screen name="LoginScreens" component={LoginScreens} options={{headerShown:false}} />
      <RootStack.Screen name="SignUpScreens" component={SignUpScreens} options={{headerShown:false}}/>
      <RootStack.Screen name="Tabnavigation" component={Tabnavigation} options={{headerShown:false}} />
     
      <RootStack.Screen name="SearchScreen" component={SearchScreen}/>
      <RootStack.Screen name="FilterScreen" component={FilterScreen}/>
      <RootStack.Screen name="Bookdetalies" component={Bookdetalies}
      options={({route})=>({
        headerBackTitleVisible:false,
        headerTitle:false,
        headerTransparent:true,
        headerTintColor:'#fff'
      })
        
      }/>
      <RootStack.Screen name="MessageScreen" component={MessageScreen}
       options={({route})=>({
        headerBackTitleVisible:false,
        headerTitle:true,
        headerTransparent:true,
        headerTintColor:'#333'
      })}/>
      
     
      <RootStack.Screen name="MyBooks" component={MyBooks}  />
      <RootStack.Screen name="MyProfile" component={MyProfile}  />
      <RootStack.Screen name="Feedback" component={Feedback}  />
      <RootStack.Screen name="Wish" component={Wish}  />
      <RootStack.Screen name="HelpAndSuport" component={HelpAndSuport}/>


    </RootStack.Navigator>
    </NavigationContainer>
  );
}




