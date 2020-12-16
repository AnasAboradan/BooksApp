import React, { useState, useEffect,Component } from 'react';
import { Button, View, Text, StyleSheet,SafeAreaView,StatusBar } from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

const list = [
  {
    title: 'My profile',
    screen:'MyProfile',
    icon: 'person',
  },
  {
    title: 'My books',
    screen:'MyBooks',
    icon: 'book'
  },
  {
    title: 'Wish list',
    screen:'Wish',
    icon: 'heart'
  },
  {
    title: 'Feedback',
    screen:'Feedback',
    icon: 'contrast'
  },
  {
    title: 'Help and suport',
    screen:'HelpAndSuport',
    icon: 'help'
  },

]
class Acount extends Component {

  constructor(props){
    super(props);
   
  }
  
  render() {
    return (
       <View style={styles.contanier}>
             <StatusBar backgroundColor="#08d4c4"/>
                  <View style={{justifyContent:'center', alignItems:'center', height:80,paddingTop:10,borderBottomColor:'#333',borderBottomWidth:1}}>
                    <Text style={{fontSize:30}}>My acount</Text>
                  </View>

<View>
  {
    list.map((item, i) => (
      <ListItem key={i} bottomDivider 
      onPress={()=>this.props.navigation.navigate(item.screen)} >
         <Icon name={item.icon} color={'#333'} size={28} />
        <ListItem.Content >
          <ListItem.Title>{item.title}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    ))
  }

    <ListItem bottomDivider onPress={()=>this.props.navigation.navigate('SplashScreen')} >
          <Icon name={'log-out'} color={'#333'} size={28} />
          <ListItem.Content >
          <ListItem.Title>Log ut</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
          </ListItem>
       </View>
       </View>
      
    );
  }
}
export default Acount 

const styles=StyleSheet.create({
  contanier:{
    flex:1,
    backgroundColor:'#fff'
  }
})