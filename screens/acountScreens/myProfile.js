import { View, Text, SafeAreaView, StyleSheet, StatusBar, Dimensions, TouchableOpacity ,TextInput} from 'react-native';
import React  from 'react';



export default function Profile() {
  return (
      <View>
             <StatusBar backgroundColor="#08d4c4"/>
 <Text>
    Profile and user Id is { global.userId}
 </Text>

 </View>
  );
}