import React, { useState, useEffect ,Component} from 'react';
import { Button, View, Image, StyleSheet,FlatList } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'
import  A from '../../img/anas.jpg';





class Chat extends Component {

  constructor(){
    super()
    this.state={
    Data:[],
    UserId:global.userId,
    }

   this.handelSend(global.userId);
  }

  handelSend(){
 // console.log(this.state.UserId);
    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
    if (request.readyState !== 4) {
    return;
  }

  if (request.status === 200) {
     var data=JSON.parse( request.responseText);
     this.setState({Data:data});

    
  } 
};

request.open('GET', 'http://10.0.2.2:80/Api/api.php?userId='+this.state.UserId);
request.send();
   
}
 
keyExtractor = (item, index) => index.toString()
  
  renderItem ({ item })  {
  
  return(
    <ListItem bottomDivider
    onPress={()=>this.props.navigation.navigate('MessageScreen',{conversationId:item.conversationId,to_user_id:item.from_user_id,Image:item.Image})}>
      <Image
        style={styels.img}
        source={{uri:item.Image}}>
       </Image>
     <ListItem.Content>
        <ListItem.Title>{item.UserName}</ListItem.Title>
        <ListItem.Subtitle>{item.message_text}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  )
  }
  
  render () {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={this.state.Data}
        renderItem={this.renderItem.bind(this)}
      />
    )
  }
}
const styels=StyleSheet.create({
  img:{
    width:50,
    height:50,
    borderRadius:50,
    marginRight:15
  }
})
export default Chat 