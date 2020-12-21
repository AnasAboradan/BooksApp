import React, { useState,Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {SearchBar, Header  } from 'react-native-elements';

class SearchScreen extends Component {
    constructor(props){
      super(props);
     this.state={
        search: '',
     }
    
    
    }
    updateSearch = (search) => {
        this.setState({ search });
      };
    render() {
        const { search } = this.state;
    return(
     
      <Header 
      leftComponent={<Icon style={{marginRight:20,marginLeft:5}}
      name="arrow-back" color={'#fff'} size={28} backgroundColor={"#08d4c4"}  onPress={()=> this.props.navigation.navigate('Home')}
      />}
      centerComponent={ <SearchBar
        placeholder="Search by book name..."
        onChangeText={this.updateSearch}
        value={search}
        containerStyle={{ backgroundColor:"#08d4c4",borderTopWidth:0,
        borderBottomWidth:0, }}
        inputContainerStyle={{ backgroundColor:"#fff", width:310 }}
        
      />  }
      backgroundColor={"#08d4c4"}
      containerStyle={{ height:90 }}
    />
    ); 
  }
   }
    
  
  
  
  export default SearchScreen
    