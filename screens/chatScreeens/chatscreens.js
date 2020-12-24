import React, { useState, useEffect ,Component} from 'react';
import { Button, View, Image, StyleSheet,TouchableHighlight,Text } from 'react-native';
import { ListItem, Avatar,Header } from 'react-native-elements'
import { SwipeListView } from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons/Ionicons';








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
    let color;
    if(item.to_user==global.userId)
    {
      color=true;
    }
    else{
      color=false;
    }
  return(
    <ListItem bottomDivider
    onPress={()=>this.props.navigation.navigate('MessageScreen',{conversationId:item.conversationId,to_user_id:item.from_user_id,Image:item.Image,username:item.UserName})}>
      <Image
        style={styels.img}
        source={{uri:item.Image}}>
       </Image>
     <ListItem.Content>
        <ListItem.Title>{item.UserName}</ListItem.Title>
        <ListItem.Subtitle style={color ?styels.text : styels.text1}>{item.message_text}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  )
  }
  
  render () {
    return (
             <View><Header backgroundColor={'#08d4c4'}
            
             centerComponent={{ text: 'Chat', style: { color: '#fff', fontSize:24,fontWeight:'bold' } }}
            
           />
    
               <SwipeListView
                  useFlatList
                  data={this.state.Data}
                  renderItem={this.renderItem.bind(this) }

                  renderHiddenItem={ (data, rowMap) => (
                   <View style={{ width:'100%',height:'100%',justifyContent:'center'}} >
                          <TouchableHighlight  
                          activeOpacity={0.6}
                          underlayColor="#DDDDDD"
                          style={{width:'100%', height:'100%',alignItems:'flex-end',justifyContent:'center'}}
                          onPress={()=>console.log('anas')}>
                         <Icon style={{marginRight:28}} name={'trash-outline'} color={'#333'} size={28} />
                          </TouchableHighlight>
                      </View>
                  )}
                  disableRightSwipe={true}
                  rightOpenValue={-100}
                
                  keyExtractor={(rowData, index) => {
                    return index.toString();;
                  }}
              />
   
          </View>
    
      /* <FlatList
        keyExtractor={this.keyExtractor}
        data={this.state.Data}
        renderItem={this.renderItem.bind(this)}
      />*/
    )
  }
}
const styels=StyleSheet.create({
  img:{
    width:50,
    height:50,
    borderRadius:50,
    marginRight:15
  },
  text:{
    color:'orange',
    fontSize:15
  },
  text1:{
    color:'rgba(0,0,0,0.7)'
  }
})
export default Chat 