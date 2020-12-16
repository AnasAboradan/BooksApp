import React,{useState} from 'react'
import { View, Text, Button,StatusBar, StyleSheet, Image, Dimensions, TouchableOpacity ,TextInput} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';



export default function Splash({navigation}){

    return(

        <View style={styles.container}>
          <StatusBar backgroundColor="#08d4c4"/>
            <View style={styles.head}>
               <View style={styles.ImagContainer}>
               <Animatable.Image
                 animation="bounce"
                 duration={1500}
                 style={styles.ImageLogo}
                 source={require('../../img/logo.png')}
              />
              </View>
                
            </View>

           
           
            <Animatable.View style={styles.footer}
            animation="fadeInUpBig"
                duration={1500}>
                    <View style={{flex:1}}>
                        <View style={styles.textContainer}>
                        <Text style={styles.text}>Wellcome to <Text style={{color:'#08d4c4' ,fontFamily:'Menlo-Bold'}}> Book worm </Text>App !</Text>
                        </View>
                      
                    </View>
                    <View style={{flex:1, alignItems:'center', }}>
                    <TouchableOpacity style={{width:'60%'  }}
                    onPress={()=>navigation.navigate('LoginScreens')}>
                        <LinearGradient colors={['#08d4c4', '#08d4c4', '#08d4c4']} style={styles.linearGradient} >
                            <Text style={styles.buttonText}>
                                Sign in
                            </Text>
                        </LinearGradient>
                      </TouchableOpacity>
                    </View>
  
              
                
            </Animatable.View>
        </View>
        
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#08d4c4',
    },
    head:{
        flex:2,
        backgroundColor:'#08d4c4',
        justifyContent:'center',
        alignItems:'center'
        

    },
    footer:{
        flex:1.3,
        backgroundColor:'#fff',
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        padding:20

    },
    ImagContainer:{
        width:210,
        height:210,
        backgroundColor:'#fff',
        borderRadius:110,
        padding:5,
        justifyContent:'center',
        alignItems:'center'
    
    },
    ImageLogo:{
        width:150,
        height:150
    },
    textContainer:{
     alignItems:'center',
    },
    text:{
       fontSize:24,
       fontWeight:'bold',
       fontFamily:'Cochin'
    },
    footerText:{
     alignItems:'center',
     marginTop:15,

    },
    linearGradient:{
    alignItems:'center',
    height:45,
    justifyContent:'center',
    borderRadius:8
    },
    buttonText:{
       color:'#fff',
       fontFamily:'sans-serif-medium',
       fontSize:24
    }
})