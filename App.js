import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import FbScreen from './Screens/FbScreen'
import InScreen from './Screens/InScreen'

export default class App extends React.component {
   render() {
     return(
       <AppCointainer/>
     )
   }
  }
const TabNavigator=createBottomTabNavigator({
  Fb:{screen:FbScreen},
  In:{screen:InScreen},
});
const AppCointainer=createAppCointainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
