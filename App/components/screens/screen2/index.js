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

class Screen2 extends Component {
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
        const title = await AsyncStorage.getItem('title')
        const body = await AsyncStorage.getItem('body')
        const username = await AsyncStorage.getItem('username')
        this.setState({titleState:title})
        this.setState({bodyState:body})
        this.setState({usernameState:username})
        this.props.dispatch(getImageData())
        
      } catch(e) {
        // error reading value
      }

 }
  
   
    btnPress=async(thumbnailUrl)=>{

         try {
          await AsyncStorage.setItem('thumbnale',thumbnailUrl);
         
          this.props.navigation.navigate('Screen3')
        } catch (error) {
          console.log(error)
        }
    
     
    }

    FlatListItemSeparator = () => {
      return (
        <View
          style={{
            height: 1,
            width: "100%",
            backgroundColor: "#e0e0e0",
          }}
        />
      );
    }


  
    render() {
      const { navigate } = this.props.navigation;

      function Item({ id, thumbnailUrl,name,trasferAmo, onSelect }) {
        return (
            <TouchableOpacity onPress={() => onSelect(id)}>
                
                <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
             <Image style={styles.imageThumbnail} source={{ uri: thumbnailUrl }} />
           </View>
     

     
   
          </TouchableOpacity>
      
        );
      }
      
      
      return (
        <SafeAreaView style={styles.wrapper}>
  
                <View style={{padding:10}}/>
                <Text>Title</Text>
                <Text>{this.state.titleState}</Text>
                <View style={{padding:10}}/>
                <Text>Body</Text>
                <Text>{this.state.bodyState}</Text>
                {this.props.loading && <Loading navigation={this.props.navigation} animating={true} />}
  
                <FlatList
                    data={ this.props.imageData }
                   
                    ItemSeparatorComponent = { this.FlatListItemSeparator }
                    keyExtractor={(item, index) => index.toString()}
                     renderItem={({item}) =>
                      <Item 
                             id={item.id}
                             thumbnailUrl = {item.thumbnailUrl } 
                            
                            
                             onSelect={()=>this.btnPress(item.thumbnailUrl)}
                       />}
                       numColumns={3}
                /> 
               
           </SafeAreaView>
      );
    }
  }
  
  const mapStateToProps = state =>({ 
    loading:state.startUpReducer.loading,
    imageData:state.startUpReducer.imageData
   
  
   
  });
  
  export default connect(mapStateToProps)(Screen2);