import React, { Component } from 'react';
import {
  View, Text,
  Image,
  Dimensions,
  RefreshControl,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import NetInfo from "@react-native-community/netinfo";

import styles from './styles';
import StartUpActions from '../../redux/StartUp/actions';
import Loading from '../../uiElements/Loading';

const {getPostsData,getUsersData,clearProps } =StartUpActions;


let listarraydate;

class Screen1 extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
       
        listDataArray:[],
        listDataObj:{},
        namestate:'',
        refreshing: false,
       
       }
    }

    static getDerivedStateFromProps(props, state) {
      // const { params } = props.navigation.state;
       //console.log(props.usersData)
       console.log(props.postData)
     
      state.usersDataArray=[];
      state.postDataArray=[]

      if(props.usersData!=undefined && props.postData!=undefined){
        console.log("lll")
      
      }//end for
  
      if( props.usersData!=undefined){
         
      //
        _storeAccess = async () => {
              try {
                await AsyncStorage.setItem('usersarraydata',JSON.stringify(props.usersData));
              } catch (error) {
                console.log(error)
              }
            };
            _storeAccess() 
           
           // console.log(usersarraydata)
      }//end users if

      if( props.postData!=undefined){
      
       // _storeAccess()
          _storeAccess = async () => {
            try {
              await AsyncStorage.setItem('postarraydate',JSON.stringify(props.postData));
            } catch (error) {
              console.log(error)
            }
          };
          _storeAccess()
          //console.log(postarraydate)
    }//end users if

  return null
       
   }
    componentDidMount(){
      NetInfo.fetch().then(state => {
        if(state.isConnected==true){
          this.getData();
        }else{
          this.checkData()
          alert('No internet')
      
        }
     });
  
    }

    componentDidUpdate(prevProps, prevState) {
        this.checkData()
    }

    checkData=async()=>{
      try {
        const postarraydate = await AsyncStorage.getItem('postarraydate')
        const usersarraydata = await AsyncStorage.getItem('usersarraydata')
        this.state.listDataArray=[]

       
        if(usersarraydata!=null && postarraydate!=null ){
          //     for( var i=0, len=JSON.parse(postarraydate).length; i <= len; i++ ){
               
          //       console.log("JSON.parse(postarraydate)[i].userId")
          //       console.log(JSON.parse(usersarraydata)[JSON.parse(postarraydate)[i].userId-1].id+"lol")
                
              
          //         this.state.listDataObj = { 
          //             id:JSON.parse(postarraydate)[i].id,
          //             title:JSON.parse(postarraydate)[i].title,
          //             body:JSON.parse(postarraydate)[i].body,
          //             name:JSON.parse(usersarraydata)[JSON.parse(postarraydate)[i].userId-1].name,
          //             username:JSON.parse(usersarraydata)[JSON.parse(postarraydate)[i].userId-1].username,
          //         };
                 
          //          this.state.listDataArray.push(this.state.listDataObj)
          //          listarraydate=this.state.listDataArray
          //          console.log(listarraydate)
          // }//check benificiary false

          JSON.parse(postarraydate).forEach(postarr => {
            JSON.parse(usersarraydata).forEach(userarr => {
              if (postarr.userId === userarr.id) {
                this.state.listDataArray.push({
                  id: postarr.id,
                  userId: postarr.userId,
                  title:postarr.title,
                  body:postarr.body,
                  name: userarr.name,
                  username:userarr.username
                });
              }
            });
          });
          listarraydate=this.state.listDataArray
        }else{
          alert("no data")
        }
       
        console.log(listarraydate)
   
      } catch(e) {
        // error reading value
      }
    }

    _onRefresh = () => {
      this.setState({refreshing: true});

      NetInfo.fetch().then(state => {
        if(state.isConnected==true){
         
          this.getData()
          this.setState({refreshing: false});
          this.checkData()
         
          //this.props.navigation.navigate('TabView')
        }else{
        alert("You are offline")
        this.setState({refreshing: false});
          
        }
  });
  
      // fetchData().then(() => {
       
      // });
    }


    getData = async() => {
      
          this.props.dispatch(getPostsData());
          this.props.dispatch(getUsersData());


    }

    
    btnPress=async(title,username,body)=>{
        try {
          await AsyncStorage.setItem('title',title);
          await AsyncStorage.setItem('username',username);
          await AsyncStorage.setItem('body',body);
          this.props.navigation.navigate('Screen2')
        } catch (error) {
          console.log(error)
        }
    

    }

    FlatListHeader = () => {
      return (
          <View>
        <View 
          style={{
            flexDirection:'row',
            flex:2,
            padding:10,
            backgroundColor:'white',
            borderRadius:10
          }}
        >
            <View style={{flex:1}}>
               <Text style={{  textShadowColor: 'black',paddingLeft:30}}>TITLE</Text>
            </View>
            <View style={{flex:1}}>
               <Text style={{  textShadowColor: 'black',paddingLeft:30}}>NAME</Text>
            </View>
           
           
        </View>
        <View
          style={{
            height: 1,
            width: "100%",
            backgroundColor: "#e0e0e0",
          }}
        />
        </View>
       
      );
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


      function Item({ id, title,name,trasferAmo, onSelect }) {
        return (
            <TouchableOpacity onPress={() => onSelect(id)} testID={'tap_me'}>
                 <View 
            style={{
             flexDirection:'row',
              flex:2,
            
              backgroundColor:'#F2F2F2',
              paddingTop:15,
              paddingBottom:15,
              paddingLeft:10,
              paddingRight:10
            }}
          >
             <View >
                 <Text style={{  textShadowColor: 'black'}}>{id} . </Text>
              </View>
              <View style={{flex:1}}>
                 <Text style={{  textShadowColor: 'black'}}>{title}</Text>
              </View>
              <View style={{flex:1}}>
                  <Text style={{  paddingLeft:10,textShadowColor: 'black'}}> {name}</Text>
              </View>
             
              </View>
          </TouchableOpacity>
      
        );
      }
      
    
      return (
        <SafeAreaView style={styles.wrapper}>
           <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }>
             {this.props.loading && <Loading navigation={this.props.navigation} animating={true} />}
  
             <FlatList
                    data={ listarraydate }
                    ListHeaderComponent = { this.FlatListHeader }   
                    ItemSeparatorComponent = { this.FlatListItemSeparator }
                    keyExtractor={(item, index) => index.toString()}
                     renderItem={({item}) =>
                      <Item 
                             id={item.id}
                            title = {item.title } 
                             name = {item.name } 
                            
                             onSelect={()=>this.btnPress(item.title,item.username,item.body)}
                       />}
                /> 

    
              </ScrollView>
              </SafeAreaView>
      );
    }
  }
  
  const mapStateToProps = state =>({ 
    loading:state.startUpReducer.loading,
    usersData:state.startUpReducer.usersData,
    postData:state.startUpReducer.postData
   
  
   
  });
  
  export default connect(mapStateToProps)(Screen1);