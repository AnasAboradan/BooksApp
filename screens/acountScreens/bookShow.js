import React from 'react';
import * as Animatable from 'react-native-animatable';
import { View, Text, Image, StyleSheet, StatusBar, Dimensions, TouchableOpacity ,TextInput} from 'react-native';
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import { Table, Row, Rows } from 'react-native-table-component';
//global.userId   is used to get user Id


class Bookdetalies extends React.Component{
  constructor(props){
    super(props);

    this.state = {
     BookId:props.BookID,
     seller:'',
      Aurthor:'',
      bookName:'',
      Description:'',
      Category:'',
      Price:'',
      Publisheddate:'',
      img:props.img,
     }
  
  this.getBookDetalies(props.route.params.BookIDid);
 // console.log)
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
 
    renderHeader={() => <Image resizeMode='stretch' source={{uri:this.props.route.params.img}} 
    style={{ height: 300, 
      width: Dimensions.get('window').width }} />}

  >
    <Animatable.View style={{ height:600, backgroundColor:'#fff', borderTopEndRadius:50,
             borderTopLeftRadius:50}}
             animation="fadeInUpBig"
             duration={3000}>
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