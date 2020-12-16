import React from 'react';
import { View, Text, ToastAndroid, StyleSheet, StatusBar, Dimensions, TouchableOpacity ,TextInput} from 'react-native';

//global.userId   is used to get user Id

export default function Filter() {
  return (
 <Text>
   Filter and user id is {global.userId }
 </Text>
  );
}