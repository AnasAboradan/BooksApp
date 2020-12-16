import React, { useState,Component } from 'react';
import { Text, View,FlatList , StyleSheet,StatusBar,TouchableWithoutFeedback,Image,ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import { Card, } from 'react-native-elements';



 //You can use  global.userId to get UserId ,
  //syntax {global.userId }


  class Home extends Component {
  constructor(props){
    super(props);
   this.state={
      list:[
      
      {
        id:1,
        name: 'Amy Farha',
        url: require('../../img/1.jpg'),
        titel: 'Vice President',
        dis:'The idea with React Native Elements is more about component structure than actual design.'
      },
      {
        id:2,
        name: 'Chris Jackson',
        url: require('../../img/3.jpg'),
        titel: 'Vice Chairman',
        dis:'The idea with React Native Elements is more about component structure than actual design.'
      },
      {
        id:3,
        name: 'Anas Jackson',
        url: require('../../img/4.jpg'),
        titel: 'Vice Chairman',
        dis:'The idea with React Native Elements is more about component structure than actual design.'
      },
      {
        id:4,
        name: 'Hello Jackson',
        url: require('../../img/5.png'),
        titel: 'Vice Chairman',
        dis:'The idea with React Native Elements is more about component structure than actual design.'
      },
      {
        id:5,
        name: 'My name Jackson',
        url:require('../../img/6.jpg'),
        titel: 'Vice Chairman',
        dis:'The idea with React Native Elements is more about component structure than actual design.'
      },
    ]
   }
    
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#08d4c4"/>
        <View style={styles.head}>
            <Image
            style={styles.userImage}
            source={require('../../img/logo.png')}/>
           
              <Text style={{fontSize:24,color:'#fff',fontWeight:'bold',paddingBottom:2}}>Book worm</Text>
                
                <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
                  
                  <Icon style={{marginRight:5,marginLeft:5}}
                    name="search" color={'#333'} size={28} backgroundColor={"#08d4c4"}
                    onPress={()=>this.props.navigation.navigate('SearchScreen')}
                    />
                   
                    <Icon style={{marginRight:20,marginLeft:5}}
                    name="options" color={'#333'} size={28} backgroundColor={"#08d4c4"}
                    onPress={()=>this.props.navigation.navigate('FilterScreen')}
                    />
                  
                 
              </View>
         </View>
        
      
        
        <FlatList 
         numColumns={2}
        data={this.state.list}
        renderItem={(item)=>{
          let a='../../img/4.jpg';
          return(
            <TouchableWithoutFeedback
            onPress={()=>this.props.navigation.navigate('Bookdetalies',
            {BookId:item.item.id, 
            Booktitel:item.item.titel,
            Bookdetalis:item.item.dis,
            bookurl:item.item.url})}>
            <Card containerStyle={{width:180, height:280, }}>
            <Card.Title>{item.item.name}</Card.Title>
            <Card.Divider/>
            <Image style={{height:100, width:150}}  resizeMode='stretch' source={item.item.url}></Image>
            <Text style={{marginBottom: 10, marginTop:10}}>
            {item.item.dis}
            </Text>
            </Card>
            </TouchableWithoutFeedback>
          )
        }}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={
          <View style={styles.swepp}>
           <View style={styles.sweppContanier}>
           <Swiper style={styles.sweppContanierr} autoplay={true} horizontal={false} activeDotColor='#08d4c4' >
              <View >
                <Image style={styles.img}
                source={require('../../img/1.jpg')}
                resizeMode='stretch'>
                </Image>
               </View>
               <View >
                <Image style={styles.img}
                source={require('../../img/3.jpg')}
                resizeMode='stretch'>
                </Image>
               </View>
               <View >
                <Image style={styles.img}
                source={require('../../img/4.jpg')}
                resizeMode='stretch'>
                </Image>
               </View>
               <View >
                <Image style={styles.img}
                source={require('../../img/5.png')}
                resizeMode='stretch'>
                </Image>
               </View>
               <View >
                <Image style={styles.img}
                source={require('../../img/6.jpg')}
                resizeMode='stretch'>
                </Image>
               </View>
               <View >
                <Image style={styles.img} 
                source={require('../../img/7.jpg')}
                resizeMode='stretch'>
                </Image>
               </View>
            </Swiper>

           </View>
        </View>
       
         
       }
      />

      
      </View>

      
      
   );
  
}
}

const styles = StyleSheet.create({
 container:{
   flex:1,
   backgroundColor:'#fff',
 },
 head:{
   height:58,
   backgroundColor:"#08d4c4",
   flexDirection:'row',
   justifyContent:'space-between',
   alignItems:'center',
   paddingTop:20,
   paddingRight:0,
   paddingBottom:20,
   paddingLeft:20

 },
 userImage:{
   width:50,
   height:50,
   borderRadius:50,
},
 filter:{
  height:500,
  width:'100%',
  backgroundColor:'#fff',
}
 ,filter1:{
  height:1000,
},
swepp:{
  marginTop:10,
  height:200,
  alignItems:'center',
  justifyContent:'center'
  
},
sweppContanier:{

  height:200,
  width:'95%',

},
items:{
  justifyContent:'center',
  marginTop:20,
  alignItems:'center',
  padding:20
},
item:
{
  width:'40%',
  height:130,
},img:
{width:400,
  height:200,
}
})
export default Home 