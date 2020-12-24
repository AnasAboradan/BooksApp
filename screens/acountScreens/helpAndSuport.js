import { View, Text, SafeAreaView, StyleSheet, StatusBar, Image, TouchableOpacity ,TextInput} from 'react-native';
import React  from 'react';
import {Header } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import { ScrollView } from 'react-native-gesture-handler';


// first we create screens heder
export default function HelpAndSupport({navigation}) {
  return (
    <View style={styles.contanier}>
        <Header backgroundColor={'#08d4c4'} containerStyle={{borderBottomColor:'#08d4c4'}}
          leftComponent={()=> <Icon  name={'md-arrow-back'} color={'#fff'} size={30} 
          onPress={()=>navigation.pop()}
          />}
          centerComponent={{ text: 'Help and suport', style: { color: '#fff', fontSize:24,fontWeight:'bold' } }}/>
          <ScrollView>
          <View style={styles.logo}>
              <View style={styles.ImagContainer}>
                <Animatable.Image
                          animation="bounce"
                          duration={1500}
                          style={styles.ImageLogo}
                          source={require('../../img/logo.png')}
                        />
              </View>
          </View>
              <Animatable.View
              animation="fadeInUpBig"
              duration={3000}
              style={{
            backgroundColor:'#fff', 
              height:800,
              borderTopLeftRadius:30,
              borderTopRightRadius:30,
              padding:20
            }}>
              <View style={{height:325, marginBottom:20}}>
                <Text style={{fontSize:24,color:'black',textAlign:'center', fontWeight:'bold'}}>Wellcom to BookWorm App!</Text>
                <Text style={{marginTop:10, textShadowRadius:2,lineHeight:25, fontSize:16,}}>
                The book worm app We designed this application to serve people interested
                 in buying and selling books. Where we focused on the design on the ease 
                 of browsing and navigating the pages in a successive and smooth manner. 
                 In addition to the ease of chatting and communicating directly. 
                 The books are presented in a smooth manner for the information related 
                 to the book (book price and source, person information, communication, 
                 sending and payment. In addition to the user being able to change information and prices.
                </Text>
              </View>
              
              <View style={styles.a}>
                <Icon  name={'md-globe'} color={'#333'} size={40} style={{marginRight:20}}/>
                <Text style={{fontSize:18,marginTop:10}}>WWW.BookWorm.com</Text>
              </View>
              
              <View style={styles.a}>
                <Icon  name={'md-call'} color={'#333'} size={40} style={{marginRight:20}}/>
                <Text style={{fontSize:18,marginTop:10}}>+46213154777</Text>
              </View>

              <View style={styles.a}>
                <Icon  name={'md-call'} color={'#333'} size={40} style={{marginRight:20}}/>
                <Text style={{fontSize:18,marginTop:10}}>+46737424405</Text>
              </View>

              <View style={styles.a}>
                <Icon  name={'md-mail'} color={'#333'} size={40} style={{marginRight:20}}/>
                <Text style={{fontSize:18,marginTop:10}}>BookWorm@BookWorm.com</Text>
              </View>
              <View style={[styles.a,{alignItems:'center',justifyContent:'center',}]}>
                <Text style={{fontSize:20,marginTop:10,fontWeight:'bold',  textAlign:'center'}}>All rights reserved to @BookWorm </Text>
              </View>

            </Animatable.View>
            
        </ScrollView> 
        
  </View>
  );
}

const styles=StyleSheet.create({
  contanier:{
    backgroundColor:'#08d4c4'
  },
  logo:{
    width:'100%',
    height:200,
    alignItems:'center',
    justifyContent:'center',
  },
  ImageLogo:{
    width:100,
    height:100,
},
ImagContainer:{
  width:150,
  height:150,
  backgroundColor:'#fff',
  borderRadius:110,
  padding:5,
  justifyContent:'center',
  alignItems:'center',
  borderWidth:0.2,
  borderColor:'#08d4c4'
},
foter:{
  height:350,
  width:'100%'
},
a:{
  height:50,
  width:'100%',
 borderBottomWidth:0.3,
 flexDirection:'row',
 marginBottom:20
 }
})