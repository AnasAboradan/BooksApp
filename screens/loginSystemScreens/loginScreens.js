import React,{useState,useEffect} from 'react'
import { View, Text, ToastAndroid, StyleSheet, StatusBar, Dimensions, TouchableOpacity ,TextInput} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



export default function Login({navigation}) {

 
   const [userName, SetuserName] = useState('');
   const [password, Setpassword] = useState('');
   const [viseble, setViseble] = useState(true);
   const [IconName, setIconName] = useState('eye-off');
   global.userId='';
     const setV=()=>{
       if(viseble===true)
       {
       setViseble(false);
       setIconName('eye')
       }
       else
       {
       setViseble(true);
       setIconName('eye-off')
       }

      }

      const checkUserLogin=()=>{
    if (userName=='' || password=='') {
        ToastAndroid.show('Required filed are are missing!', ToastAndroid.SHORT);
        return;
    }
    if(userName=='1' && password=='1')
    {
        navigation.navigate('Tabnavigation', { userId: '1' });
        global.userId=2;
    }

      }
 return (
      <View style={styles1.contanier}>
           <StatusBar backgroundColor="#08d4c4"/>
          <View style={styles1.head}>
           <Text style={{color:'#fff',fontSize:34, fontWeight:'bold',}}>Wellcome!</Text>
          </View>
          <Animatable.View style={styles1.fotter}
          animation= "bounceInLeft"
                duration={1500}
                >
           <Text style={{color:'black',fontSize:20,}}>User name</Text>
           <View style={styles1.email}>
           <MaterialCommunityIcons style={{ marginRight: 0, paddingTop: 10 }} name="rename-box" color={'rgba(0,0,0,0.5)'} size={34} />
           <TextInput placeholder={'Enter user name'} style={styles1.textinput}
            onChangeText={(value)=>SetuserName(value)}
           >
           </TextInput>
           </View>
           <Text style={{color:'black',fontSize:20,}}>Password</Text>
           <View style={styles1.email}>
           <MaterialCommunityIcons style={{ marginRight: 0, paddingTop: 10 }} name="lock" color={'rgba(0,0,0,0.5)'} size={34} />
           <TextInput placeholder={'Enter The Password'} 
           style={styles1.textinput}
           secureTextEntry={viseble}
           onChangeText={(value)=>Setpassword(value)}
           >
          </TextInput>
          <MaterialCommunityIcons style={{ marginRight: 0, paddingTop:5 }} name={IconName} color={'rgba(0,0,0,0.5)'} size={34} onPress={setV} />
           </View>
           <TouchableOpacity 
           onPress={checkUserLogin.bind(this)}>
                 <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles1.linearGradient} >
                        <Text style={styles1.buttonText}>
                            Sign in
                         </Text>
                       </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={()=>navigation.navigate('SignUpScreens')}>
                 <LinearGradient colors={['#fff','#fff']} style={styles1.linearGradient} >
                        <Text style={styles1.buttonText2}>
                           Sign up
                         </Text>
                       </LinearGradient>
                </TouchableOpacity>
          </Animatable.View>
         

      </View>
   /* <Button title='Login' onPress={()=>route.params.key.setLogin(true)}>

       </Button>*/
    )
}

const { height, width } = Dimensions.get('screen')

const styles1 = StyleSheet.create({
    contanier: {
        flex: 1,
        backgroundColor: '#08d4c4'
    },
    head: {
        flex: 1,
        justifyContent: "center",
        alignItems:'flex-start',
        marginLeft:15
    },
    fotter: {
        flex: 2,
        backgroundColor: '#e3e8e3',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding:20
    },
    email:{
     flexDirection:'row',
     marginBottom:15
    },
    textinput:{
       borderBottomColor:'black',
      borderBottomWidth:.5,
        width:'80%',
        marginLeft:10,
        height:34,
        marginTop:10,
        paddingTop:6,
        paddingBottom:0,
       

    },
    linearGradient: {
        marginTop:10,
        paddingTop:5,
        borderRadius: 50,
        width: '100%',
        height: 45,
        alignItems: 'center',
       
    
    },
    buttonText: {
        fontSize: 24,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        color: '#ffffff',
        paddingLeft: 5,
        backgroundColor: 'transparent',
      
    },
    buttonText2: {
        fontSize: 24,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        color: '#08d4c4',
        paddingLeft: 5,
        backgroundColor: 'transparent',

    },
});
