import React, { useState, useRef,useEffect } from "react";
import {
  SafeAreaView,
  View,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Pressable,
  BackHandler 
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


import { Avatar, Button, Card, Text } from "react-native-paper";
import done from "../../Icons/Icons/booking-done.png";
import {  ApiContext } from "../../Context";
import { useContext } from "react";

const Thankyou = ({ navigation }) => {
 

  useEffect(() => {
 

    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      handleBackButtonPress();
      return true;
    });

    return () => {
      backHandler.remove();
    };

  }, []);

  const handleBackButtonPress = () => {
    // Custom back button handling logic
    // For example, go back to the previous screen
    navigation.navigate("home")

    // Return true to prevent default behavior (exit the app)
    return true;
  };

  const handleNavigation = (id) => {
   
  };


//  console.log("book",book)

  return (
    <SafeAreaView style={[styles.container, styles.bgWhite]}>
      <ScrollView>
        <View>
          <View>
         
        
              <View style={[styles.content, styles.flex]}>
              <Image style={styles.card} source={done} resizeMode="center" />
              <Text style={[styles.title]}>
                Successfully Completed Your Booking
              </Text>
              <Text style={[styles.greyText]}>
                Your Booking has been Successfully Completed
              </Text>
              <Text style={[styles.greyText]}>Booking ID : {"2"}</Text>

              <View style={styles.flexxes}>
                <Button
                  icon="home"
                  mode="contained"
                  maxFontSizeMultiplier={70}
                  style={styles.btn}
                  onPress={() => {
                    navigation.navigate("Home");
                  }}
                >
                  Go to Home
                </Button>
                <Button
                  icon="eye"
                  mode="contained"
                  maxFontSizeMultiplier={70}
                  style={styles.btn}
                  onPress={() => {
                
                    }}
                >
                  Booking Details
                </Button>
              </View>
            </View>


            
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flxx: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    borderWidth: 1,
  },
  btn: { margin: 5, borderRadius:5 },
  text: { color: "#696969", fontSize: 17, textAlign: "center" },
  flex: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  cardss: {
    width: "48%",
    textAlign: "center",
    display: "flex",
    borderWidth: 1,
    borderColor: "#d3d3d3",
    padding: 15,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 7,
  },
  mt20: { marginTop: 10 },
  card: { width: 300, height: 300, marginBottom: 10 },
  brbottom: {
    borderBottomWidth: 1,
    borderBottomColor: "#d3d3d3",
    paddingBottom: 15,
    borderStyle: "dashed",
  },
  content: { padding: 20 },
  whiteTXT: { color: "#fff", marginLeft: 15 },
  mb30: { marginBottom: 20 },
  mr20: { marginRight: 40 },
  boldTxt: { fontWeight: "600" },
  blackText: { color: "#000" },
  greyText: {
    color: "#888888",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 8,
    color: "#000000",
    textAlign: "center",
    lineHeight: 30,
  },
  flexxes: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  upperhead: {
    backgroundColor: "#512da8",
    color: "#fff",
    height: 65,
    fontSize: 18,
    padding: 15,
    borderBottomColor: "#d3d3d3",
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  bgWhite: { backgroundColor: "#fff", paddingTop:15 },
});
export default Thankyou;