import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Chatscreens from '../screens/chatScreeens/chatscreens';
import MessageScreen from '../screens/chatScreeens/message';


const Stack = createStackNavigator();

export default function ChatStckNavigations() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Chatscreens" component={Chatscreens} />
      <Stack.Screen name="MessageScreen" component={MessageScreen} />
    </Stack.Navigator>
  );
}