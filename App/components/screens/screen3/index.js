import React, { Component } from 'react';
import {
  View, Text,
  Image,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  Alert,
  FlatList,
   Button, TouchableOpacity
} from 'react-native';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';
import StartUpActions from '../../redux/StartUp/actions';
import Loading from '../../uiElements/Loading';

const {getImageData,clearProps } =StartUpActions;

class Screen3 extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
        titleState:'',
        bodyState:'',
        usernameState:''
       
       }
    }

    static getDerivedStateFromProps(props, state) {
      // const { params } = props.navigation.state;
       //console.log(props.usersData)
       console.log("props.imageDatajjj")
       console.log(props.imageData)
       console.log("props.imageData")

       return null;

    }

  
    componentDidMount(){
      this.getData();
    }



    getData = async() => {
      try {
        const thumbnale = await AsyncStorage.getItem('thumbnale')
      
        this.setState({thumbnaleState:thumbnale})
       
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
  
               <Image source={{uri:this.state.thumbnaleState}} style={styles.imageThumbnail}/>
  
               
               
           </SafeAreaView>
      );
    }
  }
  
  const mapStateToProps = state =>({ 
    loading:state.startUpReducer.loading,
    imageData:state.startUpReducer.imageData
   
  
   
  });
  
  export default connect(mapStateToProps)(Screen3);