import React, { useState, Component } from 'react';
import { Text, View, FlatList, TouchableOpacity, StyleSheet, StatusBar, TouchableWithoutFeedback, Image, SafeAreaView, } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import { Card, Header } from 'react-native-elements';





//You can use  global.userId to get UserId ,
//syntax {global.userId }


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: []
    }

    this.getBookinf();
    this.focusListener = this.props.navigation.addListener('focus', () => {
     this.componentWillUnmount();
      });
    
  }
  componentWillUnmount() {
    this.getBookinf();
  }

  async getBookinf() {
   
    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
      if (request.readyState !== 4) {
        return;
      }

      if (request.status === 200) {
        this.setState({ Data:[]})
        var data = JSON.parse(request.responseText);
        this.setState({ Data: data })
        console.log('1')

      }
    };

  await  request.open('GET', 'http://10.0.2.2:80/Api/getBokinfo.php');
  await request.send();

  }
  render() {
    return (
      <View style={styles.container}>

        <StatusBar backgroundColor="#08d4c4" />

        <Header
          leftComponent={<Image
            style={styles.userImage}
            source={require('../../img/logo.png')} />}
          centerComponent={<Text style={{ fontSize: 24, color: '#fff', fontWeight: 'bold', paddingBottom: 2 }}>BookWorm</Text>}
          backgroundColor={"#08d4c4"}
          containerStyle={{ height: 90 }}
          rightComponent={
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('SearchScreen')}>
                <MaterialCommunityIcons style={{ marginRight: 5, marginLeft: 5 }}
                  name="feature-search" color={'#fff'} size={28} backgroundColor={"#08d4c4"}

                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('FilterScreen')}>
                <Icon style={{ marginRight: 20, marginLeft: 5 }}
                  name="options" color={'#fff'} size={28} backgroundColor={"#08d4c4"}
                />
              </TouchableOpacity>
              </View>} />





        <FlatList style={{width:'100%',}}
          numColumns={2}
          data={this.state.Data}
          renderItem={(item) => {
            // console.log(item)
            return (
              <TouchableWithoutFeedback
                onPress={() => {
                  if (item.item.U_id == global.userId) {
                    this.props.navigation.navigate('BookShow', { BookIDid: item.item.B_id, img: item.item.img, })

                  }
                  else {
                    this.props.navigation.navigate('Bookdetalies', { B_id: item.item.B_id, uri: item.item.img, })

                  }
                }}>
                <Card containerStyle={{ width: 180, height: 260,marginLeft:12 }}>
                  <Card.Title>{item.item.BookName}</Card.Title>
                  <Card.Divider />
                  <Image style={{ height: 100, width: 150 }} resizeMode='stretch' source={{ uri: item.item.img }}></Image>
                  <Text style={{ marginBottom: 5, marginTop: 10 }}>
                    BY: {item.item.Aurthor}.
            </Text>
                  <Text style={{ marginBottom: 5, marginTop: 2 }}>
                    Price: {item.item.Price} $.
            </Text>
                </Card>
              </TouchableWithoutFeedback>
            )
          }}
          keyExtractor={item => item.B_id}
          ListHeaderComponent={
            <View style={styles.swepp}>
              <View style={styles.sweppContanier}>
                <Swiper style={styles.sweppContanierr} autoplay={true} horizontal={false} activeDotColor='#08d4c4' >
                  <View >
                    <Image style={styles.img}
                      source={require('../../img/1.jpg')}
                      resizeMode='stretch'>
                    </Image>
                  </View>
                  <View >
                    <Image style={styles.img}
                      source={require('../../img/3.jpg')}
                      resizeMode='stretch'>
                    </Image>
                  </View>
                  <View >
                    <Image style={styles.img}
                      source={require('../../img/4.jpg')}
                      resizeMode='stretch'>
                    </Image>
                  </View>
                  <View >
                    <Image style={styles.img}
                      source={require('../../img/5.png')}
                      resizeMode='stretch'>
                    </Image>
                  </View>
                  <View >
                    <Image style={styles.img}
                      source={require('../../img/6.jpg')}
                      resizeMode='stretch'>
                    </Image>
                  </View>
                  <View >
                    <Image style={styles.img}
                      source={require('../../img/7.jpg')}
                      resizeMode='stretch'>
                    </Image>
                  </View>
                </Swiper>

              </View>
            </View>


          }
        />


      </View>



    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  head: {
    height: 58,
    backgroundColor: "#08d4c4",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingRight: 0,
    paddingBottom: 20,
    paddingLeft: 20,

  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginBottom: 15,
    marginLeft:5
  },
  filter: {
    height: 500,
    width: '100%',
    backgroundColor: '#fff',
  }
  , filter1: {
    height: 1000,
  },
  swepp: {
    marginTop: 10,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'

  },
  sweppContanier: {

    height: 200,
    width: '95%',

  },
  items: {
    justifyContent: 'center',
    marginTop: 20,
    alignItems: 'center',
    padding: 20
  },
  item:
  {
    width: '40%',
    height: 130,
  }, img:
  {
    width: 400,
    height: 200,
  }
})
export default Home 