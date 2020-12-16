
import React, { useState, useEffect,Component } from 'react';
import { Button, View, Text, SafeAreaView,StatusBar } from 'react-native';



class Sellbook extends Component {

  
  render() {
    return (
      <View>
        <StatusBar backgroundColor="#08d4c4"/>
    <Text>the user id is { global.userId}</Text>
      </View>
    );
  }
}
export default Sellbook 