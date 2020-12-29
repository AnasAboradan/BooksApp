import React from 'react';
import {View, Text, TouchableOpacity,StyleSheet,Image,TextInput,ScrollView} from 'react-native';
import {  Header } from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
import * as Animatabl from 'react-native-animatable';
import DropDownPicker from 'react-native-dropdown-picker';
import LinearGradient from 'react-native-linear-gradient';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

import Icon from 'react-native-vector-icons/Ionicons';



const bs = React.createRef();
const fall = new Animated.Value(1);

 class EditProfileScreen extends React.Component {
  
  constructor(props){
    super(props)
    this.state={
      name:this.props.route.params.data[0].UserName,
      adress:this.props.route.params.data[0].Address,
      email:this.props.route.params.data[0].Email,
      number:this.props.route.params.data[0].number,
      img:this.props.route.params.data[0].Image,
      isImageupLoaded: false,
    }
   // console.log(props.route.params.data);
  }

   async handelsubmit() {
    let img = this.state.img;
    let source = {
      uri: img,
      type: `test/${img.split(".")[2]}`,
      name: `test.${img.split(".")[2]}`
    }

    if (this.state.isImageupLoaded) {
      await this.handleUpload(source);
    }

    var arr = [
      global.userId ,
     this.state.name,
      this.state.email,
      this.state.number,
      this.state.adress,
      this.state.img
     
    ]
    arr = JSON.stringify(arr);
    await this.edituserinfo(arr);
}

edituserinfo(arr)
{



}
  async handleUpload(image) {
    const data = new FormData()
    data.append('file', image)
    data.append('upload_preset', 'myappbooks')
    data.append("cloud_name", "dpvxmb6aw")

   await fetch("https://api.cloudinary.com/v1_1/dpvxmb6aw/image/upload", {
      method: "post",
      body: data,
      headers: {
        'Accept': 'application/json',
        'Content-type': 'multipart/form-data'
      }
    }).then(res => res.json()).
      then(data => {
        this.setState({img:data.url })
      }).catch(err => {
        console.log(err);
      })
  }
  renderInner() {
    return (
      <View style={styles.panel}>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.panelTitle}>Upload Photo</Text>
          <Text style={styles.panelSubtitle}>Choose Your Picture</Text>
        </View>
        <TouchableOpacity style={styles.panelButton}
          onPress={() => {
            ImagePicker.openCamera({
              width: 300,
              height: 400,
              cropping: true,
            }).then(image => {
              console.log(image)
             this.setState({img:image.path})
             this.setState({isImageupLoaded:true})
            }).catch((err) => { console.log("openCamera catch" + err.toString()) });

            bs.current.snapTo(1);
          }}>
          <Text style={styles.panelButtonTitle}>Take Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.panelButton}
          onPress={() => {
            ImagePicker.openPicker({
              width: 300,
              height: 400,
              cropping: true
            }).then(image => {
              this.setState({img:image.path})
              this.setState({isImageupLoaded:true})
            }).catch((err) => { console.log("openCamera catch" + err.toString()) });
            bs.current.snapTo(1);
          }}>
          <Text style={styles.panelButtonTitle}>Choose From Library</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.panelButton}
          onPress={() => bs.current.snapTo(1)}>
          <Text style={styles.panelButtonTitle}>Cancel</Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderHeader() {
    return (
      <View style={styles.header}>
        <View style={styles.panelHeader}>
          <View style={styles.panelHandle} />
        </View>
      </View>
    );
  }


  render(){
  return (
    <View style={styles.container}>
    <Header backgroundColor={'#08d4c4'}
     leftComponent={()=> <Icon  name={'arrow-back-outline'} color={'#fff'} size={30} 
     onPress={()=>this.props.navigation.pop()}
      />}
     centerComponent={{ text: 'Edit profile', style: { color: '#fff', fontSize:24,fontWeight:'bold' } }} />
 <ScrollView>
<View style={styles.imagecontanier}>
     <TouchableOpacity
     onPress={()=> bs.current.snapTo(0)}>
     <Image
     resizeMode='cover'
        style={styles.img}
        source={{uri:this.state.img}}
      />
     </TouchableOpacity>
     </View>
    
    <Text style={{fontSize:18, marginLeft:'5%',marginTop:10}}>User Name</Text>
    <View style={{width:'100%', alignItems:'center',}}>
     <View style={{width:'90%', height:50,marginTop:10}}>
      <TextInput style={styles.textinput} 
      defaultValue={this.state.name}
      onChangeText={(value)=>this.setState({name:value})}>
  
    </TextInput>
    </View>
    

    </View>
    <Text style={{fontSize:18, marginLeft:'5%',marginTop:10}}>Email</Text>
    <View style={{width:'100%', alignItems:'center', }}>
     <View style={{width:'90%', height:50,marginTop:10}}>
      <TextInput style={styles.textinput} 
       defaultValue={this.state.email}
       onChangeText={(value)=>this.setState({email:value})}>
    </TextInput>
    </View>
    

    </View>
    <Text style={{fontSize:18, marginLeft:'5%',marginTop:10}}>Phone</Text>
    <View style={{width:'100%', alignItems:'center'}}>
     <View style={{width:'90%', height:50,marginTop:10}}>
      <TextInput style={styles.textinput} 
      defaultValue={this.state.number}
      onChangeText={(value)=>this.setState({number:value})}>
    </TextInput>
    </View>
    

    </View>
    <Text style={{fontSize:18, marginLeft:'5%',marginTop:10,}}>Location</Text>
    <View style={{width:'100%', alignItems:'center', marginBottom:20}}>
     <View style={{width:'90%', height:50,marginTop:10}}>
      <TextInput style={styles.textinput} 
       defaultValue={this.state.adress}
       onChangeText={(value)=>this.setState({adress:value})}>
    </TextInput>
    </View>
    
    <View style={{ width: '100%', alignItems: 'center', marginTop: 10, marginBottom: 30 }}>
              <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity style={{ width: '100%' }}
                 onPress={this.handelsubmit.bind(this)}>
                  <LinearGradient colors={['#08d4c4', '#08d4c4', '#08d4c4']} style={styles.linearGradient}
                  >
                    <Text style={styles.buttonText}>
                      Submit
                            </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
    </View>

    </ScrollView>
     <BottomSheet
            ref={bs}
            snapPoints={[320, 0]}
            renderContent={this.renderInner.bind(this)}
            renderHeader={this.renderHeader.bind(this)}
            initialSnap={1}
            callbackNode={fall}
            enabledGestureInteraction={true}
          />
     
   </View>
    
     
  );
     }
};

export default EditProfileScreen;

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
  },
  imagecontanier:{
    width:'100%',
    height:250,
    justifyContent:'center',
    alignItems:'center',

  },
  img:{
    width:180,
    height:180,
    borderRadius:100
  },
  text:{
   fontWeight:'bold',
   fontSize:24,
   marginTop:10

  },
  userinfo:{
    height:50,
    width:'90%',
    flexDirection:'row',
    borderBottomColor:'#333',
    borderBottomWidth:0.5,
    marginTop:20
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 15,
  },

  header: {
    backgroundColor: '#FFFFFF',
    shadowRadius: 2,
    height: 35,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomColor: '#fff'
  },
  panelHeader: {
    alignItems: 'center',
    borderBottomColor: '#fff'
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#08d4c4',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textinput:{
    width:'100%',
    borderWidth:0.1,
    borderRadius:.1,
    backgroundColor:'rgba(0,0,0,0.1)'
  },linearGradient: {
    alignItems: 'center',
    height: 45,
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: 30
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'sans-serif-medium',
    fontSize: 26
  },


});


