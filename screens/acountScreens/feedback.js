import { View, Text,ToastAndroid, FlatList, StyleSheet, Keyboard, TouchableOpacity, TextInput,TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import { Header,Avatar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';




export default class  Feddback extends React.Component {
  constructor(props)
  {
    super(props)
    this.state={
      DTAT:'',
    feadback:''
    }
    this.getFeadback();
  }
  //global.userId
  getFeadback(){
 
    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
    if (request.readyState !== 4) {
    return;
  }

  if (request.status === 200) {
     var data=JSON.parse( request.responseText);
     this.setState({DTAT:data})
    //console.log(this.state.DTAT)    
 } 
};

request.open('GET', 'http://10.0.2.2:80/Api/feadback.php');
request.send();
   
}

handelSend(){


}


renderItemComponent(item){
 // console.log(item.item.Image);
  return(
<Animatable.View style={styles.foter}
animation="fadeInUpBig"
duration={3000}>
    
<View style={styles.item}>
   <View style={{flexDirection:'row',}}>
   <Avatar
       size='medium'
       rounded
       source={{
         uri:item.item.Image}
       }/>
   <Text style={{fontSize:20,color:'#333', marginTop:7, marginLeft:20}}> {item.item.UserName}</Text>
   </View>
   <View>
     <Text style={{marginTop:10, color:'#fff',fontSize:16, lineHeight:25}}>
    {item.item.feadback}
     </Text>
   </View>
   <View style={{marginTop:15, alignItems:'flex-end'}}>
     <Text style={{fontSize:15}}>
     {item.item.date}
     </Text>
   </View>
</View>

</Animatable.View>
  )
}
  render(){
  return (
    <View style={styles.contanier}>
    
      <Header backgroundColor={'#08d4c4'} containerStyle={{ borderBottomColor: '#08d4c4' }}
        leftComponent={() => <Icon name={'md-arrow-back'} color={'#fff'} size={30}
          onPress={() =>this.props.navigation.pop()}
        />}
        centerComponent={{ text: 'Feadback', style: { color: '#fff', fontSize: 24, fontWeight: 'bold' } }} />
       <FlatList
        data={this.state.DTAT}
        renderItem={item => this.renderItemComponent(item)}
        keyExtractor={item => item.feadbackId.toString()}
        ListHeaderComponent={
          <View style={{ width: '100%', marginTop: 10, alignItems: 'center', }}>
          <View style={{ width: '90%' }}>
            <View>
              <TextInput style={styles.textinput}
                placeholder={'Enter your feadback'}
                multiline={true}
                numberOfLines={5}
                textAlignVertical = "top"
                ref={input=>{this.textInput=input;}}
                onChangeText={(value)=>this.setState({feadback:value})}>
               </TextInput>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <TouchableOpacity style={{ width: '40%' }}
                onPress={()=>{
                  if(this.state.feadback=='')
                  {
                    ToastAndroid.show('Required filed are are missing!', ToastAndroid.SHORT);
                    return;
                  }
                  var request = new XMLHttpRequest();
                    request.onreadystatechange = (e) => {
                      this.textInput.clear();
                    if (request.readyState !== 4) {
                    return;
                  }
                
                  if (request.status === 200) {
                  //  console.log(request.responseText)  
                  this. getFeadback();
                  this.setState({feadback:''});
                  Keyboard.dismiss();
                 } 
                };
                
                request.open('GET','http://10.0.2.2:80/Api/feadback.php?id='+global.userId+'&fead='+this.state.feadback);
                request.send();
                }}>
                <LinearGradient colors={['#08d4c4', '#08d4c4', '#08d4c4']} style={styles.linearGradient} >
                  <Text style={styles.buttonText}>
                    Send
                              </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        }
      />
    </View>
  );
              }
}
const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    backgroundColor: '#fff'
  },
  linearGradient: {
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    borderRadius: 8
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'sans-serif-medium',
    fontSize: 24
  },
  textinput: {
    borderWidth: 0.2,
    marginTop: 5,
    marginBottom: 10,
    borderRadius:5,
    paddingLeft: 10,
    justifyContent: "flex-start",
    backgroundColor: 'rgba(0,0,0,0.01)',
    fontSize: 20
  },
  foter: {
    marginTop: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    width:'100%'
    
  },
  item: {
    width: '90%',
    backgroundColor:'#08d4c4',
    marginTop:10,
    marginBottom:10,
    padding:20,
    borderRadius:20,
    shadowColor:'#08d4c4'
    
  }

}) 
