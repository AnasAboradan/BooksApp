import React, { useState, useEffect ,Component} from 'react';
import { Button, View,alert, Image, StyleSheet,TouchableHighlight,Text,TouchableOpacity } from 'react-native';
import { ListItem, Avatar, Header } from 'react-native-elements';

import { SwipeListView } from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons/Ionicons';

class Wish extends Component {

  constructor(props){
    super(props)
    this.state={
    Data:[],
    UserId:global.userId,
    count:'',
    checkcount:true
    }
    this.GetuserWishlist();
  }



  

   
  GetuserWishlist(){
   //console.log(this.state.UserId);
    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
    if (request.readyState !== 4) {
    return;
  }

  if (request.status === 200) {
     var data=JSON.parse( request.responseText);
     this.setState({Data:data})

    
  } 
};

request.open('GET', 'http://10.0.2.2:80/Api/wish.php?userId='+global.userId);
request.send();
   
}
 
    getcount(){
     var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
    if (request.readyState !== 4) {
    return;
  }

  if (request.status === 200) {
    
    if(this.state.checkcount)
    {
      this.setState({count:request.responseText});
      this.setState({checkcount:false})
    }
    if(request.responseText!=this.state.count)
    {
      this.setState({checkcount:true});
      this.GetuserWishlist();
    }
 
    
    
  } 
};

request.open('GET', 'http://10.0.2.2:80/Api/wish.php?userid='+global.userId+'&count=2');
request.send();
    }
 
  
  renderItem ({ item })  {
  return(
    <TouchableHighlight
    activeOpacity={0.6}
    underlayColor="#DDDDDD"
    onPress={()=>this.props.navigation.navigate('Bookdetalies',{B_id:item.Bid,uri:item.img})}>
    <ListItem bottomDivider containerStyle={{marginTop:5,marginBottom:5}} >
   
      <Image
        style={styels.img}
        source={{uri:item.img}}>
       </Image>
     <ListItem.Content>
        <ListItem.Title>{item.BookName}</ListItem.Title>
        <ListItem.Subtitle>By: {item.Aurthor}. </ListItem.Subtitle>
        <ListItem.Subtitle>Price: {item.Price}$ </ListItem.Subtitle>
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
      centerComponent={{ text: 'Wish list', style: { color: '#fff', fontSize:24,fontWeight:'bold' } }}
     
    />
    
               <SwipeListView
                  useFlatList
                  ref={ref => this._swipeListView = ref}
                  data={this.state.Data}

                  renderItem={this.renderItem.bind(this) }

                  renderHiddenItem={ (data, rowMap) => (
                   <View style={{width:'100%',height:'100%',justifyContent:'center'}} >
                          <TouchableOpacity
                          onPress={()=>
                          {
                            this._swipeListView.safeCloseOpenRow()
                            var request = new XMLHttpRequest();
                            request.onreadystatechange = (e) => {
                            if (request.readyState !== 4) {
                            return;
                          }
                        
                          if (request.status === 200) {
                             this.GetuserWishlist();
                            } 
                        };
                        
                        request.open('GET', 'http://10.0.2.2:80/Api/wish.php?userId='+global.userId+'&bookid='+data.item.Bid);
                        request.send();
                          }}  
                          activeOpacity={0.6}
                          underlayColor="#DDDDDD"
                          style={{width:'100%', height:'100%',alignItems:'flex-end',justifyContent:'center'}}
                        >
                         <Icon style={{marginRight:28}} name={'trash-outline'} color={'#333'} size={28} />
                          </TouchableOpacity>
                      </View>
                  )}
                  ///disableRightSwipe={true}
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
export default Wish 