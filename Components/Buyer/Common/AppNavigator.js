import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SplashScreen from '../Login_Signup/SplashScreen';
import Login from '../Login_Signup/Login';
import VerifyOTP from '../Login_Signup/VerifyOTP';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from '../BottomNavbar/HomeScreen';
import Settings from '../BottomNavbar/Settings';
import Listings from '../Pages/Listings';

// Dummy Screens

const EventScreen = () => (
  <View>
    <Text>Event Screen</Text>
  </View>
);
const ChatScreen = () => (
  <View>
    <Text>Chat Screen</Text>
  </View>
);
const SettingsScreen = () => (
  <View>
    <Text>Settings Screen</Text>
  </View>
);

// Create Bottom Tabs
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Bottom Tabs Navigator
const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: '#989898',
        tabBarActiveTintColor: '#4c40ed',
        tabBarStyle: {
          borderTopColor: 'rgba(0, 0, 0, .2)',
          fontSize: 20,
          paddingBottom: 5,
          height: 55,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        name="home"
        component={HomeScreen}
      />

      <Tab.Screen
        options={{
          tabBarLabel: 'Events',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="comment" color={color} size={size} />
          ),
        }}
        name="events"
        component={EventScreen}
      />

      <Tab.Screen
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="comment" color={color} size={size} />
          ),
        }}
        name="Chat"
        component={ChatScreen}
      />

 

      <Tab.Screen
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
        name="account"
        component={Settings}
      />
    </Tab.Navigator>
  );
};

// Main Stack Navigator (Handles Login and Home Navigation)
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="FirstTheme" component={SplashScreen} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="verifyotp" component={VerifyOTP} />
        <Stack.Screen name="Home" component={BottomTabs} />
        <Stack.Screen name="listings" component={Listings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
