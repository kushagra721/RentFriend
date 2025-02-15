import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  SafeAreaView,
  ActivityIndicator,
  ImageBackground,
  View,
} from "react-native";
import image from "../Icons/Icons/bg.png";
import { useRoute } from "@react-navigation/native";
import { TextInput, Text, Button } from "react-native-paper";



import { useEffect, useRef } from 'react';
import { Platform } from 'react-native';









const VerifyOTP = ({ navigation }) => {

  const [otpValue, setOtpValue] = useState("");
  const [limitotp, setlimitotp] = useState(1);
  const [loading, setLoading] = useState(false);




  useEffect(() => {
   
  }, []);

  const inputs = Array(4).fill(0).map((_, index) => useRef(null));





  const handleKeyPress = (index, key) => {
    if (key === 'Backspace' && index > 0) {
      inputs[index - 1].current.focus();
    }
  };

  const handleChange = (text, index) => {
    const updatedOtpValue = [...otpValue];
    updatedOtpValue[index] = text;
    setOtpValue(updatedOtpValue.join(''));

    if (text.length === 1 && index < 3) {
      inputs[index + 1].current.focus();
    }
  };



  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <SafeAreaView>
        <View>
          <View style={styles.center}>
            <Text style={styles.heading}>Enter Verification Code</Text>
            <Text style={styles.text}>
              We Have sent you a 4 digit verification code on
            </Text>
            <Text style={[styles.text, styles.textbold]}>+91-{"9891141997"}</Text>
            <Pressable onPress={() => navigation.goBack()} >
              <Text style={[styles.text, styles.blue, styles.bold, styles.mb20]}>Edit Number</Text>
            </Pressable>
            {/* <View style={[styles.inaRow, styles.mb20]}>
              <TextInput mode="outlined" style={styles.otpinput} />
              <TextInput mode="outlined" style={styles.otpinput} />
              <TextInput mode="outlined" style={styles.otpinput} />
              <TextInput mode="outlined" style={styles.otpinput} />
            </View> */}
            <View style={[styles.inaRow, styles.mb20]}>
              {[...Array(4)].map((_, index) => (
                <TextInput
                  key={index}
                  mode="outlined"
                  style={styles.otpinput}
                  maxLength={1}
                  keyboardType="numeric"
                  ref={inputs[index]}
                  onKeyPress={({ nativeEvent: { key } }) => handleKeyPress(index, key)}
                  onChangeText={(text) => handleChange(text, index)}
                />
              ))}
            </View>
            {limitotp <= 2 && (
              // <Pressable onPress={() => fun_ChecksacchasathiData()}>
              <Pressable
              onPress={() => {
               setlimitotp(limitotp + 1);
              }}
            >
                <Text style={[styles.text, styles.blue, styles.bold]}>
                  Resend Code
                </Text></Pressable>
            )}

            <Text style={[styles.text, styles.blue, styles.bold]}>
              {/* {decode} */}
            </Text>
            <Button
              icon="arrow-right"
              mode="contained"
              style={[styles.mt20, styles.button]}
              onPress={() => {
               navigation.replace("Home")
              }}
              disabled={otpValue.length < 4}
            >
              Login
            </Button>
          </View>
        </View>

        {loading && (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}
      </SafeAreaView>
    </ImageBackground>
  );
};



const styles = StyleSheet.create({
  bold: {
    fontWeight: "600",
  },

  blue: {
    color: "blue",
  },

  mb20: {
    marginBottom: 20,
  },
  otpinput: {
    margin: 5,
    textAlign: "center",
  },
  inaRow: {
    display: "flex",
    flexDirection: "row",
  },
  heading: {
    fontSize: 24,
    fontWeight: "700",
  },
  button: {
    paddingTop: 6,
    paddingBottom: 6,
    width: "80%",
    borderRadius: 5,
    fontSize: 20,
  },
  mt20: {
    marginTop: 20,
  },

  center: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    flex: 0,
  },

  content: {
    padding: 40,
  },
  logo: {
    height: 70,
    width: 200,
    marginBottom: 15,
  },
  container: {
    padding: 40,
    justifyContent: "center",
    textAlign: "center",
  },

  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    lineHeight: 30,
    fontWeight: "normal",
    letterSpacing: 0.25,
    color: "#787878",
    textAlign: "center",
  },
  textbold: {
    fontWeight: "500",
    fontSize: 18,
    color: "#000",
  },
  input: {
    marginTop: 20,
    width: "80%",
  },
  loader: {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default VerifyOTP;
