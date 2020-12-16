import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/homeScreens/home';
import SearchScreen from '../screens/homeScreens/searchScreen';
import FilterScreen from '../screens/homeScreens/filterScreen';


const Stack = createStackNavigator();

export default function HomeStckNavigations() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}  options={{headerShown:false,}} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Filter" component={FilterScreen} />
    </Stack.Navigator>
  );
}