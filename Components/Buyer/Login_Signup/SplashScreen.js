import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  ImageBackground,
  SafeAreaView,Dimensions ,
  StatusBar,
} from "react-native";
import logo from "../../Icons/Icons/app_logo.jpeg";
import image from "../../Icons/Icons/splashScreen.png";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { getcoldata } from "./Apicall";


import { useCallback } from "react";

const { width } = Dimensions.get('window');

const SplashScreen = ({ navigation }) => {
  const [otplogininfo, setotplogininfo] = useState(null);
  const [loading, setLoading] = useState(true);


  useFocusEffect(
    useCallback(() => {
      const fetchLoginInfo = async () => {
        try {
          const loginInfoString = await AsyncStorage.getItem("logindata_companio");
          if (loginInfoString) {
            const loginInfoObject = JSON.parse(loginInfoString);
            setotplogininfo(loginInfoObject);
          }
        } catch (error) {
          console.error("Error retrieving Logininfo from AsyncStorage:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchLoginInfo();
    }, [])
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Check the condition here and navigate accordingly
      if (!loading) {
        if (otplogininfo) {
          navigation.navigate("Home");
        } else {
          navigation.navigate("login");
        }
      }
    }, 3000);

    // Cleanup function for timeout
    return () => clearTimeout(timeout);
  }, [otplogininfo, loading, navigation]);




  return (
    // <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <SafeAreaView style={styles.container}>
    <View style={styles.logoContainer}>
      <Image
        source={logo}
        resizeMode="contain"
        style={styles.logo}
      />
    </View>
  </SafeAreaView>
    // </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // or any background color
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: width * 0.8, // 60% of screen width
    height: width * 0.8, // maintain square ratio, or adjust as needed
  },
});

export default SplashScreen;
