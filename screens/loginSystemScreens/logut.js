import { View, Text, SafeAreaView, StyleSheet, StatusBar, Dimensions, TouchableOpacity ,TextInput} from 'react-native';
import React  from 'react';



export default function Logut() {

  
  return (
      <View>
         <SafeAreaView style={{height:22}}></SafeAreaView>
             <StatusBar backgroundColor="#08d4c4"/>
 <Text>
 Logut and user Id is {global.UserID}
 </Text>

 </View>
  );
}





