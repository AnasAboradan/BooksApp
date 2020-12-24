import React  from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity,Keyboard, View,FlatList} from 'react-native';
import { Header ,Avatar} from 'react-native-elements';

var myVar;

export default class Message extends React.Component{

  constructor(props){
    super(props);
    this.state={
      userId:global.userId,
      conversationId:this.props.route.params.conversationId,
      to_user_id:this.props.route.params.to_user_id,
      to_user_name:this.props.route.params.username,
      DATA:'',
      message:'',
      Enable: true,
    
    }
     this.getmessage();
   
   }

  

   handelInpuText(text){
    this.setState({Enable:false});
    this.setState({message:text});
  }   
  

 
   getmessage()
  {
   
    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
     if (request.readyState !== 4) {
    return;
    }

  if (request.status === 200) {
     this.setState({DATA:JSON.parse(request.responseText)});
  } 
  else {
    console.log('success', request.responseText);
  }
};

      request.open('GET', 'http://10.0.2.2:80/Api/getConversation.php?conversationId='+this.state.conversationId);
      request.send();
    
    }
  
  
  handelSend(){
    this.textInput.clear();
    var arr=[this.state.conversationId,this.state.userId,this.state.to_user_id,this.state.message];
    var str=JSON.stringify(arr);
   var request = new XMLHttpRequest();
   request.onreadystatechange = (e) => {
if (request.readyState !== 4) {
return;
}

if (request.status === 200) {
  this.getmessage();
  //console.log(request.responseText);
} else {
console.log('success', request.responseText);
}
};

request.open('GET', 'http://10.0.2.2:80/Api/getConversation.php?message='+str);
request.send();
Keyboard.dismiss();
}
  
renderItem({item}){
  if(item.from_user!=this.state.userId)
    return(
        <View style={styles.item}>
          <Text style={{ borderRadius:15,marginLeft:0, fontSize:18,backgroundColor:'#b30c81', padding:10, color:'#fff'}}>{item.message_text}</Text>
       </View>
    )
    else return(
      <View style={styles.item1}>
            <Text style={{fontSize:18,marginRight:10,backgroundColor:'#597ec9', padding:10,borderRadius:15, color:'#fff'}}>{item.message_text}</Text>
    </View>
    )

  }
  
  
  render(){
  
    return (
      <View style={styles.contanier}>
           <Header backgroundColor={'#08d4c4'}
             centerComponent={{ text:this.state.to_user_name, style: { color: '#fff', fontSize:24,fontWeight:'bold' } }}
             rightComponent={
              <TouchableOpacity style={{zIndex:5}}>
              <Avatar
               size='medium'
               rounded
               source={{
                 uri:this.props.route.params.Image }}/>
                 </TouchableOpacity>}
           />

        <View style={styles.messages}>
            <FlatList
            inverted
            data={this.state.DATA}
            renderItem={this.renderItem.bind(this)}
            keyExtractor={(item) => item.messagesId}
      />
        </View>




        <View style={styles.inputpar}>
              <TouchableOpacity disabled={this.state.Enable} style={styles.btn}
              onPress={this.handelSend.bind(this)}>
                <Text style={{color:'#fff', fontWeight:'100'}}>Send</Text>
              </TouchableOpacity>


              <TextInput placeholder={'Type the message'} style={styles.input} multiline={true}
              onChangeText={(text)=>this.handelInpuText(text)}
              ref={input=>{this.textInput=input;}}>

              </TextInput>
        </View>

      </View>
    )
  }

}

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  messages: {
    flex: 1,
  },

  inputpar: {
    backgroundColor: 'gray',
    
    flexDirection:'row',
    padding:10,
    justifyContent:'space-between',
  },
  btn:{
    justifyContent:'center',
    backgroundColor:'#08d4c4',
    borderRadius:10,
    width:'18%',
    alignItems:'center'

  },
  input:{
    backgroundColor:'#fff',
    width:'80%',
    borderRadius:10,
    fontSize:18,
    height:40,
    padding:10

  },
  item:{
    width:'100%',
    backgroundColor:'#fff',
    flexDirection:'row',
    marginLeft:10,
    marginBottom:6,
   },
  item1:{
    backgroundColor:'#597ec9',
    height:45,
    marginTop:6,
    marginBottom:6,
    alignSelf:'flex-end',
    marginRight:10,
    borderRadius:15

  }



});