import React, { Component } from 'react';
import {
  View, Text,
  Image,
  Dimensions,
  ImageBackground,
  SafeAreaView,

} from 'react-native';
import { PropTypes } from 'prop-types';


import styles from './styles';

class Screen1 extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
       
       }
    }
  
   
  
   
    btnPress(){
  
     
     
    }
  
    render() {
      const { navigate } = this.props.navigation;
      
      return (
        <SafeAreaView style={styles.wrapper}>
  
  
                <Text>hhhhh</Text>
               
              </SafeAreaView>
      );
    }
  }
  
  export default Screen1;