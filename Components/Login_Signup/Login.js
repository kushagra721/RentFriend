import React from "react";
import {
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  SafeAreaView,
  ImageBackground,
  View,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import logo from "../Icons/Icons/Logo.png";
import image from "../Icons/Icons/bg.png";
import { TextInput, Text, Button } from "react-native-paper";

import { useContext, useState } from "react";

const Login = ({ navigation }) => {

  const [mobile, setmobile] = React.useState('');
  const [mobileNumber, setMobileNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const [isValid, setIsValid] = useState(true);







  const handleMobileNumberChange = (text) => {
    const onlyNumbers = text.replace(/[^0-9]/g, "");

    if (onlyNumbers.length === 10 && /^[6-9]/.test(onlyNumbers)) {
      setMobileNumber(onlyNumbers);
      setIsValid(true);
      setmobile(text);
    } else if (
      (onlyNumbers.length < 10 || onlyNumbers.length > 10) &&
      onlyNumbers.length > 0
    ) {
      setMobileNumber(onlyNumbers);
      setIsValid(false);
      setmobile(text);
    } else if (text.length < mobileNumber.length) {
      setMobileNumber(text);
      setIsValid(true);
      setmobile(text);
    } else {
      setIsValid(false);
      setmobile(text);
    }
  };

  return (
    <>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <SafeAreaView style={[styles.container]}>
          <StatusBar backgroundColor="#000" barStyle="light-content" />
          <View>
            <View style={styles.center}>
              <Image style={styles.logo} source={logo} resizeMode="center" />
              <Text style={[styles.text, styles.textbold]}>
                Your Home Service Expert
              </Text>
              <Text style={styles.text}>Quick  | Affordable | Trusted</Text>
              {/* <TextInput
                mode="outlined"
                label="Mobile"
                left={<TextInput.Icon icon="phone" />}
                style={styles.input}
                onChangeText={(text) => handleMobileNumberChange(text)}
              /> */}
              <TextInput
                mode="outlined"
                label="Mobile"
                left={<TextInput.Icon icon="phone" />}
                style={styles.input}
                keyboardType="numeric"
                maxLength={10}
                onChangeText={(text) => {
                  // Remove any non-numeric characters
                  const cleanedText = text.replace(/[^0-9]/g, '');

                  // Limit to a maximum of 10 digits
                  const truncatedText = cleanedText.slice(0, 10);

                  handleMobileNumberChange(truncatedText);
                }}
              />

              {!isValid && (
                <Text style={{ color: "red", marginTop: 10 }}>
                  Enter a valid mobile number
                </Text>
              )}

              <Button
                icon="arrow-right"
                mode="contained"
                style={[styles.mt20, styles.button]}
                disabled={!isValid || mobileNumber == ""}
                onPress={() => {
                 navigation.navigate("verifyotp")
                }}

              >
                Request OTP
              </Button>
              {/*  <Button icon="arrow-right" mode="contained" style={[styles.mt20, styles.button]} onPress={() => {navigation.navigate("home") }}>Request OTP</Button>*/}
            </View>
          </View>
          {loading  && (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingTop: 6,
    paddingBottom: 6,
    width: "80%",
    borderRadius: 5,
    fontSize: 20,
  },
  mt20: {
    marginTop: 20,
  }, loader: {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
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
    height: 60,
    width: 200,
    marginBottom: 0,
  },
  container: {
    padding: 30,
    justifyContent: "center",
    textAlign: "center",
    marginTop: StatusBar.currentHeight,
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
    backgroundColor: "#fff",
  },
});

export default Login;
