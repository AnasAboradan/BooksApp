import React from 'react';
import * as Animatable from 'react-native-animatable';
import { View, Text, Image, StyleSheet, StatusBar, Dimensions, TouchableOpacity ,TextInput} from 'react-native';
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import { Table, Row, Rows } from 'react-native-table-component';
import LinearGradient from 'react-native-linear-gradient';
//global.userId   is used to get user Id


class Bookdetalies extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      tableData: [
        ['Book Publisher','Anas Aboradan'],
        ['Book name',this.props.route.params.Booktitel],
        ['Book type','Fysik'],
        ['Price', '400 SEK'],
        ['Location', 'Västerås. Adress: Bygatan 10, Postnummer: 724 66'],
        ['Published date', '2020/05/05',]
      ]
    }
    //console.log(this.props.route.params.Bookdetalis);
  }
  render(){
    
  return (
   
    <ImageHeaderScrollView
    maxHeight={300}
    minHeight={20}
    maxOverlayOpacity={0.8}
 
    renderHeader={() => <Image source={this.props.route.params.bookurl} 
    style={{ height: 300, 
      width: Dimensions.get('window').width }} />}

  >
    <Animatable.View style={{ height:500, backgroundColor:'#fff', borderTopEndRadius:50,
             borderTopLeftRadius:50}}
             animation="fadeInUpBig"
             duration={1500}>
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
              <Text style={{textAlign:'left', fontSize:18, fontWeight:'100', marginBottom:10}}>{this.props.route.params.Bookdetalis}</Text>
            </View>
          
          
          
          <View style={styles.container}>
          <Row data={['Detalies']} style={styles.head} textStyle={{textAlign:'left', fontSize:24, fontWeight:'bold',paddingLeft:10}}/>
            <Table borderStyle={{borderWidth: 0.2, borderColor: 'rgba(0,0,0,0.2)'}}>
            <Rows data={this.state.tableData} textStyle={styles.text}/>
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