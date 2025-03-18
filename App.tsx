

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SplashScreen from './Components/Buyer/Login_Signup/SplashScreen';
import Login from './Components/Buyer/Login_Signup/Login';
import VerifyOTP from './Components/Buyer/Login_Signup/VerifyOTP';

import AppNavigator from "./Components/Buyer/Common/AppNavigator";








function App(): React.JSX.Element {


  return (
    <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
    <AppNavigator />
  </SafeAreaView>
  );
}



export default App;
