import React, { Component } from 'react';
import {
  View, Text,
  Image,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  Alert,
  Modal, Button, TouchableOpacity
} from 'react-native';
import { PropTypes } from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';

class Screen2 extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
        titleState:'',
        bodyState:'',
        usernameState:''
       
       }
    }
  
    componentDidMount(){
      this.getData();
    }



    getData = async() => {
      try {
        const title = await AsyncStorage.getItem('title')
        const body = await AsyncStorage.getItem('body')
        const username = await AsyncStorage.getItem('username')
        this.setState({titleState:title})
        this.setState({bodyState:body})
        this.setState({usernameState:username})
        
      } catch(e) {
        // error reading value
      }

 }
  
   
    btnPress(){
  
     
     
    }
  
    render() {
      const { navigate } = this.props.navigation;
      
      return (
        <SafeAreaView style={styles.wrapper}>
  
                <View style={{padding:10}}/>
                <Text>Title</Text>
                <Text>{this.state.titleState}</Text>
                <View style={{padding:10}}/>
                <Text>Body</Text>
                <Text>{this.state.bodyState}</Text>
               
           </SafeAreaView>
      );
    }
  }
  
  export default Screen2;