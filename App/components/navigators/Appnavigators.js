import React from 'react'
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import PropsTypes from 'prop-types';
import { connect } from 'react-redux';

import Screen1 from '../screens/screen1';
import Screen2 from '../screens/screen2';
import Screen3 from '../screens/screen3';

const Navigator = createStackNavigator({
    Screen1: {
        screen: Screen1,
        navigationOptions:{
            header:()=> null,
        }
    },
    Screen2: {
        screen: Screen2,
        navigationOptions:{
           
        }
        
    },
    Screen3: {
        screen: Screen3,
        navigationOptions:{
           
        }
        
    },
   
},{

    

        navigationOptions: {
            headerStyle: {
                elevation: 0,
                shadowOpacity: 0
                }
        },
        
         // transitionConfig: () => fromLeft(1000),
        
    
    
     // transitionConfig: () => fromLeft(1000),
    
}

);

const App = createAppContainer(Navigator);

export default App;