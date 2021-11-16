import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import { createSwitchNavigator, createAppContainer } from 'react-navigation';


import Estimate from './Screens/Estimate';
import TmtBarsScreen from './Screens/TmtBarsScreen';
import Login from './Screens/Login'; 
import SignUp from './Screens/SignUp.js'

import AppTabNavigator from './components/TabNavigator'
 


export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer></AppContainer> 
      </View>   
    ); 
  }
} 


const SwitchNavigator = createSwitchNavigator({ 
  AppTabNavigator: { screen: AppTabNavigator },
  Login:{screen:Login}, 
  Home: { screen: TmtBarsScreen },
  Estimate: { screen: Estimate },
  
  
})


const AppContainer = createAppContainer(SwitchNavigator);

/* in here, to use bottom bar, we need to use everything in version 5, so I am getting the erreo that react navigation in not a module....
We need to declare it first to use switch navigator...  */



