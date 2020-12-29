import React, { useState, useEffect ,Component} from 'react';
import { Button, View, Image, StyleSheet,TouchableOpacity,Text } from 'react-native';
import { ListItem, Avatar,Header } from 'react-native-elements'
import { SwipeListView } from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons/Ionicons';








class Chat extends Component {

  constructor(props){
    super(props)
    this.state={
    Data:[],
    UserId:global.userId,
 
    }

    this.handelSend();
 }


  componentDidMount(){

    const {navigation} = this.props;
    navigation.addListener ('focus', async () =>{
      this.handelSend();
    });
}

 async  slelctAllmessageAsRead(con){
  await fetch('http://10.0.2.2:80/Api/slelctAllmessageAsRead.php?userId='+this.state.UserId+'&con='+con)
  .catch((error) => {
    console.error('Error:', error);
  });
 }
  
 
 async deleteconversation(conId)
 {
  await fetch('http://10.0.2.2:80/Api/slelctAllmessageAsRead.php?userId='+this.state.UserId+'&conId='+conId)
  .then(data => {
    this.handelSend();
    //console.log('yes')
  })
  .catch((error) => {
    console.error('Error:', error);
  });
 }
 

 async handelSend(){

await fetch('http://10.0.2.2:80/Api/api.php?userId='+this.state.UserId)
.then(response => response.json())
.then(data => {
  this.setState({Data:data});
})
.catch((error) => {
  console.error('Error:', error);
});

   
}
 
keyExtractor = (item, index) => index.toString()
  
renderItem ({ item })  {
  
    let color;
    if(item.to_user==global.userId && item.isread=='0')
    {
      color=true;
    }
    else{
      color=false;
    }
  return(
    <ListItem bottomDivider 
    onPress={()=>
    {
      this.slelctAllmessageAsRead(item.conversationId);
      this.setState({Data:[]})
      this.props.navigation.navigate('MessageScreen',{conversationId:item.conversationId,to_user_id:item.from_user_id,Image:item.Image,username:item.UserName})}
    }>
      <Image
        style={styels.img}
        source={{uri:item.Image}}>
       </Image>
     <ListItem.Content>
        <ListItem.Title>{item.UserName}</ListItem.Title>
        <ListItem.Subtitle style={color ?styels.text : styels.text1}>{item.message_text}</ListItem.Subtitle>
        <ListItem.Subtitle style={{marginLeft:145,color:'black'}}>{item.date} {item.time}</ListItem.Subtitle>
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
                  ref={ref => this._swipeListView = ref}
                  renderHiddenItem={ (data, rowMap) => (
                   <View style={{ width:'100%',height:'100%',justifyContent:'center',backgroundColor:'red' }} >
                          <TouchableOpacity 
                          activeOpacity={0.6}
                          underlayColor="#DDDDDD"
                          style={{width:'100%', height:'100%',alignItems:'flex-end',justifyContent:'center'}}
                          onPress={()=>
                            {
                            this._swipeListView.safeCloseOpenRow()
                            this.deleteconversation(data.item.conversationId)
                            }}>
                         <Icon style={{marginRight:28}} name={'trash-outline'} color={'#333'} size={28} />
                          </TouchableOpacity>
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