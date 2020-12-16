import { View, Text, SafeAreaView, StyleSheet, StatusBar, Dimensions, TouchableOpacity ,TextInput} from 'react-native';
import React  from 'react';




export default function Mybooks() {
  return (
      <View>
      
         <SafeAreaView style={{height:22}}></SafeAreaView>
             <StatusBar backgroundColor="#08d4c4"/>
 <Text>
 Mybooks and user Id is { global.userId}
 </Text>

 </View>
  );
}