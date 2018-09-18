import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Splash from './splash';
import LogIn from './login';
import {createStackNavigator} from 'react-navigation';
import Title from './title';
import SignIn from './signin';
import Product from './product';

const AppNav = createStackNavigator({
  Splash: { screen: Splash },
  Product:{screen:Product},
  SignIn: { screen: SignIn },
  Title: { screen: Title },
  LogIn:{screen:LogIn},
});
export default class App extends Component{
  
  render() {
    return (
      <AppNav />
    //  <Splash />
    // <LogIn />
    );
  }
}

const styles = StyleSheet.create({

});
