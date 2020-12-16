import React, {useState} from 'react';
import {View,Text,TouchableOpacity,Button, ImageBackground,TextInput,StyleSheet, Image} from 'react-native';
import {useTheme} from 'react-native-paper';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import storage from '@react-native-firebase/storage';
import ImagePicker from 'react-native-image-crop-picker';




function EditProfileScreen ()  {
  const [img,setImg]=useState('https://image.shutterstock.com/image-photo/inage-coastsea-chiba-japan-260nw-1510468028.jpg');
  const bs = React.createRef();
 const fall = new Animated.Value(1);
 const TakeFoto=()  =>{
  
  
  ImagePicker.openCamera({
    width: 300,
    height: 400,
    cropping: true,
  }).then(image => {
   let img=image.path;
    let source = { 
    uri:img,
    type:`test/${img.split(".")[2]}`,
    name:`test.${img.split(".")[2]}` 
  }
  handleUpload(source);
 
 
  });
 }
 const ChooseFromLibrary=()  =>{
  ImagePicker.openPicker({
    width: 300,
    height: 400,
    cropping: true
  }).then(image => {
 
  });
 }

 const handleUpload= async (image)=>{

 
  
 
  const data = new FormData()
  data.append('file',image)
  data.append('upload_preset','myappbooks')
  data.append("cloud_name","dp6lkfnpw")
	
 await fetch("https://api.cloudinary.com/v1_1/dp6lkfnpw/image/upload",{
      method:"post",
      body:data,
      headers:{
        'Accept':'application/json',
        'Content-type':'multipart/form-data'
      }
  }).then(res=>res.json()).
  then(data=>{
      console.log(data);
    setImg(data.url)
  }).catch(err=>{
      console.log(err);
  })


 }
  const renderInner = () => (
    <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <TouchableOpacity style={styles.panelButton} onPress={TakeFoto}>
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton} onPress={ChooseFromLibrary}>
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

 const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

 

  return (
    <View style={styles.container}>
      <Image style={{width:100,height:100}} source={{uri:img}}></Image>
      <Button title='upload'  onPress={handleUpload}></Button>
            <BottomSheet
              ref={bs}
              snapPoints={[330, 0]}
              renderContent={renderInner}
              renderHeader={renderHeader}
              initialSnap={1}
              callbackNode={fall}
              enabledGestureInteraction={true}
            />
            <Animated.View style={{margin: 20,
              opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
          }}>
              <View style={{alignItems: 'center'}}>
                  <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
                  <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
                  John Doe
                </Text>
                  </TouchableOpacity>
                  
              </View>
              </Animated.View>
        </View>

        
        
       
    
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
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
    backgroundColor: '#FF6347',
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
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
});
