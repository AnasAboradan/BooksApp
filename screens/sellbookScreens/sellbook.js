
import React, { useState, useEffect,Component } from 'react';
import { TouchableOpacity, View, Text,TextInput, Image,StatusBar,StyleSheet,ScrollView } from 'react-native';
import {  Header } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Feather';
import DropDownPicker from 'react-native-dropdown-picker';
import LinearGradient from 'react-native-linear-gradient';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import ImagePicker from 'react-native-image-crop-picker';

const bs = React.createRef();
const fall = new Animated.Value(1);

class Sellbook extends Component {

   constructor(){
     super()
     this.state = {
      DropDownPicker: 'Enter the Book category',
      BookName:'',
      Author:'',
      BookCategory:'',
      Price:'',
      Publisher:'',
      Description:'',
      Edition:'',
      img:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/387928/book%20placeholder.png'
  }
   }

   handelsubmit()
   {
     console.log(this.state.Price);
     console.log(this.state.BookName);
     console.log(this.state.Description);
     console.log(this.state.Edition);
     console.log(this.state.Publisher);
     console.log(this.state.Author);
    }

   renderInner() {
   return(
    <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Picture</Text>
      </View>
      <TouchableOpacity style={styles.panelButton} onPress={()=>{
        ImagePicker.openCamera({
          width: 300,
          height: 400,
          cropping: true,
        }).then(image => {
         let img=image.path;
        // console.log(image)
         this.setState({img:image.path})
         console.log(this.state.img)
         });
      
         bs.current.snapTo(1);
      }}>
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton} onPress={()=>
      {
        ImagePicker.openPicker({
          width: 300,
          height: 400,
          cropping: true
        }).then(image => {
          console.log(image)
        });
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
  
 renderHeader(){
   return(
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );
   }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#08d4c4"/>
        <Header backgroundColor={'#08d4c4'} containerStyle={{borderColor:'black',borderBottomColor:'#08d4c4'}}
        centerComponent={{ text: 'Sell book', style: { color: '#fff', fontSize:24,fontWeight:'bold' } }}/>
         <Animatable.View
          animation="fadeInUpBig"
          duration={1500}
          style={styles.inpputcontanier}>
            <ScrollView>
              <Text style={styles.text}>Book Name:</Text>
              <View style={styles.input}>
               <TextInput
                 style={styles.textinput}
                 onChangeText={(value)=>this.setState({BookName:value})}
                 placeholder={'Enter the Book name'}
                 multiline={true}>
                 </TextInput>
              </View>
              
              
              <Text style={styles.text}>Book Category:</Text>
              <View style={styles.input}>
              <DropDownPicker
                    items={[
                        {label: 'Enter the Book category', value: 'Enter the Book category', hidden: true},
                        {label: 'USA', value: 'usa', hidden: true},
                        {label: 'UK', value: 'uk',},
                        {label: 'France', value: 'france',},

                    ]}
                    defaultValue={this.state.DropDownPicker}
                    containerStyle={{height:50, width:'90%'}}
                    style={{backgroundColor: 'rgba(0,0,0,0.1)'}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{backgroundColor: '#fafafa', fontSize:20}}
                   // onChangeItem={(value)=>this.setState({DropDownPicker:value})}
                   />
                </View>
              
              
              <Text style={styles.text}>Author:</Text>
              <View style={styles.input}>
               <TextInput
                 style={styles.textinput}
                 placeholder={'Enter the Author name'}
                 onChangeItem={(value)=>this.setState({Author:value})}
                 multiline={true}>
                 </TextInput>
              </View>
             
             
              <Text style={styles.text}>Publisher:</Text>
              <View style={styles.input}>
               <TextInput
                 style={styles.textinput}
                 placeholder={'Enter the Publisher name'}
                 onChangeItem={(value)=>this.setState({Publisher:value})}
                 multiline={true}>
                 </TextInput>
              </View>
             
             
              <Text style={styles.text}>Description:</Text>
              <View style={styles.input}>
               <TextInput
                 style={styles.textinput}
                 placeholder={'Enter the book description'}
                 onChangeItem={(value)=>this.setState({Description:value})}
                 multiline={true}>
                 </TextInput>
              </View>
              
              <Text style={styles.text}>Edition:</Text>
              <View style={styles.input}>
               <TextInput
                 style={styles.textinput}
                 placeholder={'Optional'}
                 onChangeItem={(value)=>this.setState({Edition:value})}
                 multiline={true}>
                 </TextInput>
              </View>
              
              <Text style={styles.text}>Price:</Text>
              <View style={styles.input}>
               <TextInput
                 style={styles.textinput}
                 placeholder={'Enter the book price'}
                 multiline={true}
                 onChangeItem={(value)=>this.setState({Price:value})}
                 keyboardType='numeric'>
                 </TextInput>
              </View>
              
             <View style={{width:'100%',alignItems:'center',marginTop:20,marginBottom:30, backgroundColor:'#FFF',}}>
                  <View style={{width:'90%',flexDirection:'row',justifyContent:'space-between', backgroundColor:'#FFF',}}>
                  <Image style={styles.img} source={{uri:this.state.img}}></Image>
                  <TouchableOpacity style={{width:'60%' }}
                    onPress={()=>bs.current.snapTo(0)}>
                        <LinearGradient colors={['#08d4c4', '#08d4c4', '#08d4c4']} style={styles.linearGradient} >
                            <Text style={styles.buttonText}>
                                Uppload foto
                            </Text>
                        </LinearGradient>
                      </TouchableOpacity>
                 
                </View>
              </View>
       

              <View style={{width:'100%',alignItems:'center',marginTop:10,marginBottom:30}}>
                  <View style={{width:'90%',flexDirection:'row',justifyContent:'space-between'}}>
                  <TouchableOpacity style={{width:'100%' }}
                    onPress={()=>console.log('ja')}>
                        <LinearGradient colors={['#08d4c4', '#08d4c4', '#08d4c4']} style={styles.linearGradient}
                        onPress={()=>this.handelsubmit.bind(this)} >
                            <Text style={styles.buttonText}>
                             Submit
                            </Text>
                        </LinearGradient>
                      </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
           </Animatable.View>


           <BottomSheet
              ref={bs}
              snapPoints={[330,0]}
              renderContent={this.renderInner.bind(this)}
              renderHeader={this.renderHeader.bind(this)}
              initialSnap={1}
              callbackNode={fall}
              enabledGestureInteraction={true}
            />
            <Animated.View style={{margin:0,
              opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
          }}>
              
              </Animated.View>
     
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#08d4c4'
  },
  inpputcontanier:{
    flex:1,
    backgroundColor:'#FFF',
    paddingTop:20,
  },
  input:{
   width:'100%',
   flexDirection:'column',
   alignItems:"center",
   marginTop:10,
  },
  text:{
   fontSize:24,
   fontWeight:'500',
   paddingLeft:'5%',
   marginTop:10
  },
  textinput:{
   borderWidth:0.2,
   borderColor:'#fff',
   width:'90%',
   paddingLeft:20,
   fontSize:18,
   backgroundColor:'rgba(0,0,0,0.1)'
  },
  img:{
    width:100,
    height:100,
    borderRadius:50
  },
  linearGradient:{
  alignItems:'center',
  height:45,
  justifyContent:'center',
  borderRadius:8,
  marginTop:30
  },
  buttonText:{
     color:'#fff',
     fontFamily:'sans-serif-medium',
     fontSize:26
  }, commandButton: {
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
})
export default Sellbook 