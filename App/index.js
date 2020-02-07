import React from 'react';
import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { View,} from 'react-native';
//import configureStore from './redux/store';
import configureStore from '../App/components/redux/store';

import Navigators from './components/navigators/Appnavigators';

const store = configureStore();

export default () =>
<Provider store={store}>

   <Navigators/>
 
</Provider>
EStyleSheet.build({ // always call EStyleSheet.build() even if you don't use global variables!
});