import React from 'react';
import * as Animatable from 'react-native-animatable';
import { View, Text, Image, StyleSheet, StatusBar, Dimensions, TouchableOpacity ,TextInput} from 'react-native';
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import { Table, Row, Rows } from 'react-native-table-component';
import LinearGradient from 'react-native-linear-gradient';
import BookShow from '../acountScreens/bookShow'
//global.userId   is used to get user Id


class Bookdetalies extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      BookId:this.props.route.params.B_id,
      sellerId:'',
      sellerImage:'',
      seller:'',
      Aurthor:'',
      bookName:'',
      Description:'',
      Category:'',
      Price:'',
      Publisheddate:'',
      addTowishlist:''
     }
     this.getBookDetalies(this.props.route.params.B_id);
     this. checkIfBookIsAddToUserWishList(this.props.route.params.B_id);
  }
  componentDidMount(){
    
  }
   checkIfBookIsAddToUserWishList(BookId)
   {
    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
    if (request.readyState !== 4) {
    return;
  }

  if (request.status === 200) {
    if( request.responseText=='false')
    {
      this.setState({addTowishlist:'Add to wish list'});
    }
    else{
      this.setState({addTowishlist:'Remove from wish list'});
    }
   
 } 
};

request.open('GET', 'http://10.0.2.2:80/Api/getBookDetalies.php?checkB_id='+BookId+'&userid='+ global.userId);
request.send();
     

   }

   handelBookwishlist(){
    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
    if (request.readyState !== 4)
    {
    return;
    }
 

  if (request.status === 200) 
  {
    if(this.state.addTowishlist=='Add to wish list'){
      this.setState({addTowishlist:'Remove from wish list'});

    }
    else{
      this.setState({addTowishlist:'Add to wish list'});
    }
  
   // console.log(request.responseText);
   } 
};
if(this.state.addTowishlist=='Add to wish list')
{
request.open('GET', 'http://10.0.2.2:80/Api/handelwishlist.php?id='+this.state.BookId+'&userid='+global.userId+'&ch='+1);
request.send();
}
else{
    request.open('GET', 'http://10.0.2.2:80/Api/handelwishlist.php?id='+this.state.BookId+'&userid='+global.userId+'&ch='+0);
    request.send();
   }

}
  getBookDetalies(BookId){
    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
    if (request.readyState !== 4) {
    return;
  }

  if (request.status === 200) {
     var data=JSON.parse( request.responseText);
     this.setState({seller:data[0].UserName});
     this.setState({Aurthor:data[0].Aurthor});
     this.setState({BookName:data[0].BookName});
     this.setState({Category:data[0].category});
     this.setState({Price:data[0].Price});
     this.setState({Publisheddate:data[0].date});
     this.setState({Description:data[0].Description});
     this.setState({sellerId:data[0].U_id});
     this.setState({sellerImage:data[0].Image});
} 
};

request.open('GET', 'http://10.0.2.2:80/Api/getBookDetalies.php?B_id='+BookId);
request.send();
   
}
  render(){

  return (
   
    <ImageHeaderScrollView
    maxHeight={300}
    minHeight={20}
    maxOverlayOpacity={0.8}
 
    renderHeader={() =>
       <Image resizeMode='stretch' source={{uri:this.props.route.params.uri}} 
    style={{ height: 300, 
      width: Dimensions.get('window').width }} />}

  >
    <Animatable.View style={{ height:670, backgroundColor:'#fff', borderTopEndRadius:50,
             borderTopLeftRadius:50}}
             animation="fadeInUpBig"
             duration={4000}>
             <TriggeringView onHide={() => console.log("text hidden")}>
             <View style={{ 
             alignItems:'center', 
             backgroundColor:'#fff',
             height:600,
              }}> 
           
            <View style={{justifyContent:'flex-start',
                width:'100%',
                paddingLeft:5, 
                borderBottomWidth:0.2,
                marginTop:20,
                marginBottom:0,
              }}>
              <Text style={{textAlign:'left', fontSize:24, fontWeight:'bold'}}>Description:</Text>
              <Text style={{textAlign:'left', fontSize:18, fontWeight:'100', marginBottom:10}}>{this.state.Description}</Text>
            </View>
          
          
          
          <View style={styles.container}>
          <Row data={['Detalies']} style={styles.head} textStyle={{textAlign:'left', fontSize:24, fontWeight:'bold',paddingLeft:10}}/>
            <Table borderStyle={{borderWidth: 0.2, borderColor: 'rgba(0,0,0,0.2)'}}>
            <Rows data={[ ['Seller',this.state.seller],
                          ['Aurthor',this.state.Aurthor],
                          ['Book name',this.state.BookName],
                          ['Category',this.state.Category],
                          ['Price',this.state.Price+' $'],
                          ['Published date',this.state.Publisheddate]]} 
                           textStyle={styles.text}/>
            </Table>
          </View>
       
          <View style={{width:'90%' ,flexDirection:'column', height:50, marginTop:20 }}>
          <TouchableOpacity
                  onPress={()=>this.props.navigation.navigate('Sendmessage',{sellerId:this.state.sellerId,
                  sellerName:this.state.seller,
                  sellerimg:this.state.sellerImage})}>
                 <LinearGradient colors={['#08d4c4', '#01ab9d','#01ab9d']} style={styles.linearGradient} >
                        <Text style={styles.buttonText2}>
                           Send message
                         </Text>
                       </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
                  onPress={this.handelBookwishlist.bind(this)}>
                 <LinearGradient colors={['#08d4c4', '#01ab9d','#01ab9d']} style={styles.linearGradient} >
                        <Text style={styles.buttonText2}>
                          {this.state.addTowishlist}
                         </Text>
                       </LinearGradient>
          </TouchableOpacity>
          </View>
        
        
        </View>
      
      </TriggeringView>
    </Animatable.View>
  </ImageHeaderScrollView>
 
  );
      }
    
}


export default Bookdetalies;
const styles=StyleSheet.create({
  container: {
    width:'100%'
   },
  head: { height: 70, backgroundColor: '#f1f8ff'},
  text: { 
  margin: 6,
  marginLeft:10,
  fontSize:18
  }, 
  linearGradient:
   {
    marginTop:10,
    paddingTop:5,
    borderRadius: 50,
    width: '100%',
    height: 45,
    alignItems: 'center',
   

},
   buttonText2: {
    fontSize: 24,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#fff',
    paddingLeft: 5,
    backgroundColor: 'transparent',

},
})