import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import AcountScreens from '../screens/acountScreens/acountScreens';
import MyBooks from '../screens/acountScreens/myBooks';
import MyProfile from '../screens/acountScreens/myProfile';
import HelpAndSuport from '../screens/acountScreens/helpAndSuport';
import Feedback from '../screens/acountScreens/feedback';
import Logut from '../screens/loginSystemScreens/logut';
import Wish from '../screens/acountScreens/wish';




const Stack = createStackNavigator();

export default function AcountStckNavigations() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="AcountScreens" component={AcountScreens} />
      <Stack.Screen name="MyBooks" component={MyBooks} />
      <Stack.Screen name="Wish" component={Wish} />
      <Stack.Screen name="MyProfile" component={MyProfile} />
      <Stack.Screen name="HelpAndSuport" component={HelpAndSuport} />
      <Stack.Screen name="Feedback" component={Feedback} />
      <Stack.Screen name="Logut" component={Logut} />

    </Stack.Navigator>
  );
}