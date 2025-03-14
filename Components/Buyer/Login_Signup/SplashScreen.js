import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
} from "react-native";
import logo from "../../Icons/Icons/Logo.png";
import image from "../../Icons/Icons/bg.png";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { getcoldata } from "./Apicall";


import { useCallback } from "react";

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
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <SafeAreaView>
        <StatusBar backgroundColor="#000" barStyle="light-content" />
        <View style={styles.center}>
          <Image source={logo} style={styles.logo} resizeMode="center" />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 60,
    width: 200,
    marginBottom: 15,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: "100%",
  },
});

export default SplashScreen;
