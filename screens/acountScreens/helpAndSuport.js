import { View, Text, SafeAreaView, StyleSheet, StatusBar, Dimensions, TouchableOpacity ,TextInput} from 'react-native';
import React  from 'react';



export default function HelpAndSupport() {
  return (
      <View>
             <StatusBar backgroundColor="#08d4c4"/>
 <Text>
 HelpAndSupport and user Id is { global.userId}
 </Text>

 </View>
  );
}