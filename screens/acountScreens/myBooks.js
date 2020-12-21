import React, { useState, useEffect ,Component} from 'react';
import { Button, View, Image, StyleSheet,TouchableHighlight,Text,TouchableOpacity } from 'react-native';
import { ListItem, Avatar, Header } from 'react-native-elements';

import { SwipeListView } from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons/Ionicons';







class Mybook extends Component {

  constructor(props){
    super(props)
    this.state={
    Data:[],
    UserId:global.userId,
    }
    
   this.getUserBooks();
  }

  getUserBooks(){
 
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

request.open('GET', 'http://10.0.2.2:80/Api/mybooks.php?userId='+global.userId);
request.send();
   
}
 

  
  renderItem ({ item })  {
    
  
  return(
    <TouchableHighlight
    activeOpacity={0.6}
    underlayColor="#DDDDDD"
    onPress={()=> this.props.navigation.navigate('BookShow',{BookIDid:item.B_id,img:item.img,})}>
    <ListItem bottomDivider containerStyle={{marginTop:5,marginBottom:5}} >
   
      <Image
        style={styels.img}
        source={{uri:item.img}}>
       </Image>
     <ListItem.Content>
        <ListItem.Title>{item.BookName}</ListItem.Title>
        <ListItem.Subtitle>By: {item.Aurthor}</ListItem.Subtitle>
        <ListItem.Subtitle>Price: {item.Price} $</ListItem.Subtitle>
      </ListItem.Content>
     
    </ListItem>
    </TouchableHighlight>
  )
  }
  
  render () {
    return (
      <View>
      <Header backgroundColor={'#08d4c4'}
      leftComponent={()=> <Icon  name={'arrow-back-outline'} color={'#fff'} size={30} 
      onPress={()=>this.props.navigation.pop()}
       />}
      centerComponent={{ text: 'MY Books', style: { color: '#fff', fontSize:24,fontWeight:'bold' } }}
     
    />
    
               <SwipeListView
                  useFlatList
                  data={this.state.Data}
                  ref={ref => this._swipeListView = ref}
                  renderItem={this.renderItem.bind(this) }

                  renderHiddenItem={ (data, rowMap) => (
                   <View style={{width:'100%',height:'100%',justifyContent:'center'}} >
                          <TouchableHighlight
                          onPress={()=>{
                            this._swipeListView.safeCloseOpenRow()
                            let data1=this.state.Data;
                            const filteredItems = data1.filter(item => item.id !==data.item.id )
                            this.setState({Data:filteredItems})
                          }}  
                          activeOpacity={0.6}
                          underlayColor="#DDDDDD"
                          style={{width:'100%', height:'100%',alignItems:'flex-end',justifyContent:'center'}}
                        >
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
  }
})
export default Mybook 