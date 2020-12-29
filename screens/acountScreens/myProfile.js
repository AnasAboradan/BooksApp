import React from 'react';
import {View, Text, StyleSheet,Image} from 'react-native';
import {  Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';



///import files from '../assets/filesBase64';

 class ProfileScreen extends React.Component {
   constructor(){
     super()
     this.state={
      data:'',
      name:'',
      adress:'',
      email:'',
      number:'',
      img:'https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-1024x640.jpeg',


     }
     this.Getuserinfo();
   }

  async Getuserinfo(){
    //console.log(this.state.UserId);
     var request = new XMLHttpRequest();
     request.onreadystatechange = (e) => {
     if (request.readyState !== 4) {
     return;
   }
 
   if (request.status === 200) {
      var data=JSON.parse( request.responseText);
      this.setState({adress:data[0].Address});
      this.setState({email:data[0].Email});
      this.setState({name:data[0].UserName});
      this.setState({img:data[0].Image});
      this.setState({number:data[0].number});
      this.setState({data:data});
      console.log(data);
      
    } 
 };
 
  await request.open('GET', 'http://10.0.2.2:80/Api/profile.php?userId='+global.userId);
  await request.send();
    
     }

  render(){
  return (
    <View style={styles.container}>
     <Header backgroundColor={'#08d4c4'}
      leftComponent={()=> <Icon  name={'arrow-back-outline'} color={'#fff'} size={30} 
      onPress={()=>this.props.navigation.pop()}
       />}
      centerComponent={{ text: 'My profile', style: { color: '#fff', fontSize:24,fontWeight:'bold' } }}
     rightComponent={()=><Icon name={'md-cog'} color={'#fff'} size={30} 
     onPress={()=>this.props.navigation.navigate('EditProfile',{data:this.state.data})}
      />}
    />
     <View style={styles.imagecontanier}>
     
     <Image
     resizeMode='cover'
        style={styles.img}
        source={{uri:this.state.img}}
      />
      <Text style={styles.text}>{this.state.name}</Text>
     </View>
     
       <View style={{width:'100%', alignItems:'center', marginTop:20}}>
       <View style={styles.userinfo}>
          <Icon name={'md-mail'} color={'#333'} size={40}/>
          <Text style={{marginLeft:20, marginTop:8,fontSize:20}}>
           {this.state.email}
          </Text>
      </View>
      <View style={styles.userinfo}>
          <Icon name={'md-call'} color={'#333'} size={40}/>
          <Text style={{marginLeft:20, marginTop:8,fontSize:20}}>
            {this.state.number}
          </Text>
      </View>
   
      <View style={styles.userinfo}>
          <Icon name={'md-locate'} color={'#333'} size={40}/>
          <Text style={{marginLeft:20, marginTop:8,fontSize:20}}>
            {this.state.adress}
          </Text>
      </View>

       </View>

</View>
     
  );
     }
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagecontanier:{
    width:'100%',
    height:250,
    justifyContent:'center',
    alignItems:'center',

  },
  img:{
    width:180,
    height:180,
    borderRadius:100
  },
  text:{
   fontWeight:'bold',
   fontSize:24,
   marginTop:10

  },
  userinfo:{
    height:50,
    width:'90%',
    flexDirection:'row',
    borderBottomColor:'#333',
    borderBottomWidth:0.5,
    marginTop:20
  
    
  }


});


