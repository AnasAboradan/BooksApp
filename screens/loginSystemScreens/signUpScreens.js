
import React,{useState} from 'react'
import { View, Text, StatusBar, StyleSheet, ToastAndroid, Dimensions, TouchableOpacity ,TextInput} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



export default  function singUp({navigation}){
    const [userName, SetuserName] = useState('');
    const [email, setemail] = useState('');
    const [passowrod, setpassword] = useState('');
    const [comfirm, setcomfirm] = useState('');
    const [viseble, setViseble] = useState(true);
    const [IconName, setIconName] = useState('eye-off');
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

    const userSingup=()=>{
        if(userName==''||email==''||passowrod==''||comfirm==''){
            ToastAndroid.show('Required filed are are missing!', ToastAndroid.SHORT);
            return;
        }
        else if(passowrod!==comfirm){
            ToastAndroid.show('Password not matching !', ToastAndroid.SHORT);
            return;
        }
        props.setactivistScreen('AppsScreens');
        props.SetUserId(1);


    }
    return(
       <View style={signupstyle.contanier}>
           <StatusBar backgroundColor="#08d4c4"/>
       <View style={signupstyle.head}>
       </View>
         <Animatable.View style={signupstyle.fotter}
          animation="bounceInRight"
          duration={1500} >
                   
                   
                   
           
                   
                   <Text style={{color:'black',fontSize:20,}}>User name</Text>
                    <View style={signupstyle.email}>
                        <MaterialCommunityIcons style={{ marginRight: 0, paddingTop: 10 }} name="email" color={'rgba(0,0,0,0.5)'} size={34} />
                
                
                        <TextInput placeholder={'Enter your name'} 
                        style={signupstyle.textinput}
                        onChangeText={(value)=>SetuserName(value)}>
                        </TextInput>
                    </View>
                   
                    <Text style={{color:'black',fontSize:20,}}>Email</Text>
                    <View style={signupstyle.email}>
                        <MaterialCommunityIcons style={{ marginRight: 0, paddingTop: 10 }} name="email" color={'rgba(0,0,0,0.5)'} size={34} />
                
                
                        <TextInput placeholder={'Enter your email'} 
                        style={signupstyle.textinput}
                        onChangeText={(value)=>setemail(value)}>
                        </TextInput>
                    </View>
                    
                   
                   
                   <Text style={{color:'black',fontSize:20,}}>Password</Text>
                    <View style={signupstyle.email}>
                        <MaterialCommunityIcons style={{ marginRight: 0, paddingTop: 10 }} name="lock" color={'rgba(0,0,0,0.5)'} size={34} />
                
                
                        <TextInput placeholder={'Enter your Password'} 
                        style={signupstyle.textinput}
                        secureTextEntry={viseble}
                        onChangeText={(value)=>setpassword(value)}>
                        </TextInput>
                        <MaterialCommunityIcons style={{ marginRight: 0, paddingTop:5 }} name={IconName} color={'rgba(0,0,0,0.5)'} size={34} onPress={setV} />
                    </View>
                   
                   
                   
                   
                    <Text style={{color:'black',fontSize:20,}}>Comfirm password </Text>
                        <View style={signupstyle.email}>
                            <MaterialCommunityIcons style={{ marginRight: 0, paddingTop: 10 }} name="lock" color={'rgba(0,0,0,0.5)'} size={34} />
                    
                    
                            <TextInput placeholder={'Comfirm your Password'} 
                            style={signupstyle.textinput}
                            secureTextEntry={viseble}
                            onChangeText={(value)=>setcomfirm(value)}>
                            </TextInput>
                            <MaterialCommunityIcons style={{ marginRight: 0, paddingTop:5 }} name={IconName} color={'rgba(0,0,0,0.5)'} size={34} onPress={setV} />
                        </View>
    
                    <TouchableOpacity
                    onPress={userSingup}>
                            <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles1.linearGradient} >
                            <Text style={styles1.buttonText}>
                               Sign up
                             </Text>
                           </LinearGradient>
                           
                    </TouchableOpacity>
                    
                    
                    <TouchableOpacity
                      onPress={()=>navigation.navigate('LoginScreens')} >
                            <LinearGradient colors={['#fff','#fff']} style={styles1.linearGradient} >
                            <Text style={styles1.buttonText2}>
                               Sign in
                             </Text>
                           </LinearGradient>
                    </TouchableOpacity>
              
              
              </Animatable.View>
       </View>
    );
    
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

const signupstyle=StyleSheet.create({
contanier: {
        flex: 1,
        backgroundColor: '#08d4c4'
    },
    head: {
        flex: 0.02,
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
        marginBottom:15,
       },
       textinput:{
        borderBottomColor:'black',
        borderBottomWidth:.5,
         width:'80%',
         marginLeft:10,
         height:34,
         marginTop:10,
         paddingTop:6,
         paddingBottom:2,
        
 
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
})
