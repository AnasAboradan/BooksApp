import { View, Text, Button, SafeAreaView, StatusBar, Dimensions, TouchableOpacity ,TextInput} from 'react-native';
import React  from 'react';



export default function Feddback() {
  return (
      <View>
             <StatusBar backgroundColor="#08d4c4"/>
 <Text>
 Feddback and user Id is {global.userId}
 </Text>

 </View>
  );
}