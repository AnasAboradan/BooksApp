import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar,Image,ScrollView,SafeAreaView,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


//You can use  global.userId to get UserId 
  //console.log(global.UserID)

export default class FilterResultScreen extends Component {
  constructor(props){
    super(props); 
  this.state={
    selectedRadio:null,
    CheckedBox:[],
  }  
  }
  UNSAFE_componentWillMount() {
    this.a()
}
  a=  () => {
    this.setState({ selectedRadio:this.props.route.params. selectedRadio}, () => {
      console.log(this.state.selectedRadio);
    }); 
    this.setState({ CheckedBox:this.props.route.params.CheckedBox},() => {
      console.log(this.state.CheckedBox);
    }); 
  }

  render(){
    const Allfilters=[]
    let id=0
   if(this.state.selectedRadio !=null){
     Allfilters.push({id:id,value:this.state.selectedRadio})
     id++
   }
   if(this.state.CheckedBox!=[]){
     for(let i=0;i<this.state.CheckedBox.length;i++){
      Allfilters.push({id:id,value:this.state.CheckedBox[i]})
      id++
     }
   }
  
  const filterloop= Allfilters.map((item) =>
<View style={styles.MiniBox} key={item.id}><Text style={{ textAlign: 'center'}}>{item.value}</Text></View>
  
  )
   
  return (
  <View style={styles.container}>
        <StatusBar backgroundColor="#08d4c4"/>
     <SafeAreaView >
     <View style={styles.head}>
            <Image
            style={styles.userImage}
            source={require('../../img/logo.png')}/>
           
              <Text style={{fontSize:24,color:'#fff',fontWeight:'bold',paddingBottom:2}}>BookWorm</Text>
                
                <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
                  <TouchableOpacity
                   onPress={()=>this.props.navigation.navigate('SearchScreen')}>
                <MaterialCommunityIcons style={{marginRight:5,marginLeft:5}}
                    name="feature-search" color={'#fff'} size={28} backgroundColor={"#08d4c4"}
                   
                    />
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate('FilterScreen')}>
                    <Icon style={{marginRight:20,marginLeft:5}}
                    name="options" color={'#fff'} size={28} backgroundColor={"#08d4c4"}
                    />
                    </TouchableOpacity>
                  
                 
              </View>
         </View>
        
    </SafeAreaView>
              <View style={{flexDirection: 'row-reverse'}}>
              <View style={styles. FilterBox}>
              <ScrollView>
              <View style={{flexDirection: 'row-reverse', flexWrap:'wrap'}}>
               { filterloop}
               </View>
              </ScrollView>

              </View>
              <View style={styles. FilterExit}>
              <Icon style={{marginRight:20,marginLeft:5, marginTop:5}}
                    name="close" color={'#333'} size={24}
                    onPress={()=>this.props.navigation.navigate('Home')}
                    />  
              </View>
              </View>
             
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
    paddingLeft:20,
    marginTop:20
 
  },
  userImage:{
    width:50,
    height:50,
    borderRadius:50,
 },
 FilterBox:{
  height:100,
  width:'80%',
  marginTop:10,
  marginRight:15,
  backgroundColor:'#DDDCDC',
  paddingTop:10,
 },
 MiniBox:{
  height:35,
  width:'45%',
  backgroundColor:'#F6F2F2',
  marginBottom:10,
  marginRight:10,
  borderColor:'#08d4c4',
  borderStyle: 'dashed',
  borderWidth:1,
  borderRadius: 50,
  justifyContent: 'center',
 },
 FilterExit:{
  height:100,
  width:'12%',
  marginTop:10,
  marginLeft:'5%',
  backgroundColor:'#DDDCDC',
 }
})