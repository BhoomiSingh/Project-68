import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FacebookScreen from './screens/FacebookScreen';
import InstagramScreen from './screens/InstagramScreen';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}
const TabNavigator = createBottomTabNavigator({
  Transaction:{screen: FacebookScreen},
  Seach:{screen: InstagramScreen}
})
const AppContainer = createAppContainer(TabNavigator)