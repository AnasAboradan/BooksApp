import React, { useState, useEffect, Component } from 'react';
import { View, StatusBar, Image, StyleSheet, ScrollView, Text, TouchableOpacity, TextInput } from 'react-native';
import { ListItem, Avatar, Header } from 'react-native-elements';
import BottomSheet from 'reanimated-bottom-sheet';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import * as Animatabl from 'react-native-animatable';
import DropDownPicker from 'react-native-dropdown-picker';
import LinearGradient from 'react-native-linear-gradient';
import Animated from 'react-native-reanimated';



const bs = React.createRef();
const fall = new Animated.Value(1);

export default class Edit extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

      DropDownPicker: '',
      Bookid: this.props.route.params.bid,
      BookName: '',
      Author: '',
      BookCategory: '',
      Categorydata: [],
      Price: '',
      Description: '',
      Edition: '',
      bimg: 'https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-1024x640.jpeg',
      isImageupLoaded: false,

    }
    this.a();
  }

  async a() {
    await this.getCategories();
    await this.getBooksinfo();
  }

  getBooksinfo() {

    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
      if (request.readyState !== 4) {
        return;
      }

      if (request.status === 200) {
        var data = JSON.parse(request.responseText);
        this.setState({ Author: data[0].Aurthor });
        this.setState({ BookName: data[0].BookName });
        this.setState({ BookCategory: data[0].category });
        this.setState({ Price: data[0].Price });
        this.setState({ Description: data[0].Description });
        this.setState({ Edition: data[0].Edition });
        this.setState({ bimg: data[0].img });
      }
    };

    request.open('GET', 'http://10.0.2.2:80/Api/edit.php?b_id=' + this.state.Bookid);
    request.send();

  }

  getCategories() {

    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
      if (request.readyState !== 4) {
        return;
      }

      if (request.status === 200) {
        var data = JSON.parse(request.responseText);
        let Categories = data.map((item) => {
          return (
            { label: item, value: item, key: item }
          )
        })
        this.setState({ Categorydata: Categories })
      }
    };

    request.open('GET', 'http://10.0.2.2:80/Api/edit.php?c=""');
    request.send();
  }

  async handelsubmit() {
    let img = this.state.bimg;
    let source = {
      uri: img,
      type: `test/${img.split(".")[2]}`,
      name: `test.${img.split(".")[2]}`
    }

    if (this.state.isImageupLoaded) {
      await this.handleUpload(source);
    }

    var arr = [
      this.state.Bookid,
      this.state.BookName,
      this.state.Author,
      this.state.Price,
      this.state.Edition,
      this.state.BookCategory,
      this.state.Description,
      this.state.bimg
    ]
    arr = JSON.stringify(arr);
    await this.editBook(arr);

  }

 async editBook(book) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
      if (request.readyState !== 4) {
        return;
      }

      if (request.status === 200) {
        if (request.responseText == 'true') {
        this.props.navigation.navigate('MyBooks');
        }
        else {
          console.log(request.responseText );
        }
      }
    };

   await request.open('GET', 'http://10.0.2.2:80/Api/edit.php?editBook=' + book);
   await request.send();
  }


 async handleUpload(image) {
    const data = new FormData()
    data.append('file', image)
    data.append('upload_preset', 'myappbooks')
    data.append("cloud_name", "g-teborg")

   await fetch("https://api.cloudinary.com/v1_1/g-teborg/image/upload", {
      method: "post",
      body: data,
      headers: {
        'Accept': 'application/json',
        'Content-type': 'multipart/form-data'
      }
    }).then(res => res.json()).
      then(data => {
        this.setState({bimg: data.url })
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
              this.setState({ bimg: image.path })
              this.setState({ isImageupLoaded: true });
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
              this.setState({ bimg: image.path })
              this.setState({ isImageupLoaded: true });
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


  render() {

    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#08d4c4" />
        <Header backgroundColor={'#08d4c4'}
          leftComponent={() => <Icon name={'arrow-back-outline'} color={'#fff'} size={30}
            onPress={() => this.props.navigation.pop()}
          />}
          centerComponent={{ text: 'Edit', style: { color: '#fff', fontSize: 24, fontWeight: 'bold' } }}
        />
        <Animatabl.View
          animation="fadeInUpBig"
          duration={5000}
          style={styles.inpputcontanier}>
          <ScrollView style={{ height: 500 }}>
            <View style={styles.imageContainer}>
              <Image
                resizeMode='stretch'
                style={styles.img1}
                source={{ uri: this.state.bimg }}
              />
              <TouchableOpacity
                onPress={() => bs.current.snapTo(0)}
                style={{ position: 'absolute', marginTop: 10, right: 10 }}>
                <Icon name={'md-camera'} color={'rgba(0,0,0,0.6)'} size={40}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.text}>Book Name:</Text>
            <View style={styles.input}>
              <TextInput
                style={styles.textinput}
                onChangeText={(value) => this.setState({ BookName: value })}
                multiline={true}
                defaultValue={this.state.BookName}>
              </TextInput>
            </View>


            <Text style={styles.text}>Book Category:</Text>
            <View style={styles.input}>
              <DropDownPicker
                items={this.state.Categorydata}
                defaultValue={this.state.BookCategory}
                containerStyle={{ height: 50, width: '90%' }}
                style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}
                itemStyle={{
                  justifyContent: 'flex-start'
                }}
                dropDownStyle={{ backgroundColor: '#fafafa', fontSize: 20 }}
                onChangeItem={(value) => this.setState({ BookCategory: value.value })}
              />
            </View>


            <Text style={styles.text}>Author:</Text>
            <View style={styles.input}>
              <TextInput
                style={styles.textinput}
                defaultValue={this.state.Author}
                onChangeItem={(value) => this.setState({ Author: value })}
                multiline={true}>
              </TextInput>
            </View>
            <Text style={styles.text}>Description:</Text>
            <View style={styles.input}>
              <TextInput
                style={styles.textinput}
                defaultValue={this.state.Description}
                onChangeItem={(value) => this.setState({ Description: value })}
                multiline={true}>
              </TextInput>
            </View>

            <Text style={styles.text}>Edition:</Text>
            <View style={styles.input}>
              <TextInput
                style={styles.textinput}
                defaultValue={this.state.Edition}
                onChangeItem={(value) => this.setState({ Edition: value })}
                multiline={true}>
              </TextInput>
            </View>

            <Text style={styles.text}>Price:</Text>
            <View style={styles.input}>
              <TextInput
                style={styles.textinput}
                defaultValue={this.state.Price}
                multiline={true}
                onChangeItem={(value) => this.setState({ Price: value })}
                keyboardType='numeric'>
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

          </ScrollView>
          <BottomSheet
            ref={bs}
            snapPoints={[330, 0]}
            renderContent={this.renderInner.bind(this)}
            renderHeader={this.renderHeader.bind(this)}
            initialSnap={1}
            callbackNode={fall}
            enabledGestureInteraction={true}
          />

        </Animatabl.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    height: 300,
    width: '100%',
  },
  img1: {
    width: '100%',
    height: 300
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
  inpputcontanier: {
    backgroundColor: '#FFF',
    flex: 1
  },
  input: {
    width: '100%',
    flexDirection: 'column',
    alignItems: "center",
    marginTop: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: '500',
    paddingLeft: '5%',
    marginTop: 25
  },
  textinput: {
    borderWidth: 0.2,
    borderColor: '#fff',
    width: '90%',
    paddingLeft: 10,
    fontSize: 18,
    backgroundColor: 'rgba(0,0,0,0.1)'
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  linearGradient: {
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
  }, commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
})