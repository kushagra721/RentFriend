import React from 'react';
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
  ToastAndroid,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import logo from "../../Icons/Icons/app_logo.jpeg";

import { CallApi, BaseUrl } from '../Common/Functions'
import image from '../../Icons/Icons/bg.png';
import {TextInput, Text, Button} from 'react-native-paper';

import {useContext, useState} from 'react';

import {Dropdown} from 'react-native-element-dropdown';


const Login = ({navigation}) => {
  const [mobile, setmobile] = React.useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [loading, setLoading] = useState(false);

  const [isValid, setIsValid] = useState(true);

  const [value, setValue] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const data = [
    {label: 'Seeker', value: '1'},
    {label: 'Companion', value: '2'},
  ];

  const handleMobileNumberChange = text => {
    const onlyNumbers = text.replace(/[^0-9]/g, '');

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



  const verifyuser = async() =>{
    setLoading(true)


    const url = `${BaseUrl}/companio/external/otp`

    const body = {
      mobile : mobile,
      role : value == "1" ? "buyer" : "seller"
    }

    console.log("body", body)

    const response = await CallApi(url, body,"POST");

    if(response?.status ==  true){
      setLoading(false)
      navigation.navigate('verifyotp', {
        mobile: mobile, // Replace with actual data
        otp: response?.data, // Any data you want to send
      });

    }else{
      setLoading(false)
      navigation.navigate('signup', {
        mobile: mobile,
        role:value // Replace with actual data
        
      });
      ToastAndroid.show("User not found", ToastAndroid.SHORT);


    }

  




  }

  return (
    <>
      <View   style={styles.image}>
        <SafeAreaView style={[styles.container]}>
          {/* <StatusBar backgroundColor="#000" barStyle="light-content" /> */}
          <View>
            <View style={styles.center}>
              <Image style={styles.logo} source={logo}  />
              <Text style={[styles.text, styles.textbold]}>
                Your Friend Indeed
              </Text>
              <Text style={styles.text}>Quick| Trusted</Text>

              <View style={{width: '80%', marginTop: 20}}>
                <Text style={styles.label}>Select Login Options</Text>
                <Dropdown
                  style={[styles.dropdown, isFocus && {borderColor: 'black'}]}
                  data={data}
                  labelField="label"
                  valueField="value"
                  placeholder="Select an option"
                  value={value}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                  }}
                />
              </View>

              <TextInput
                mode="outlined"
                label="Mobile"
                left={<TextInput.Icon icon="phone" />}
                style={styles.input}
                keyboardType="numeric"
                maxLength={10}
                onChangeText={text => {
                  // Remove any non-numeric characters
                  const cleanedText = text.replace(/[^0-9]/g, '');

                  // Limit to a maximum of 10 digits
                  const truncatedText = cleanedText.slice(0, 10);

                  handleMobileNumberChange(truncatedText);
                }}
              />

              {!isValid && (
                <Text style={{color: 'red', marginTop: 10}}>
                  Enter a valid mobile number
                </Text>
              )}

              <Button
                icon="arrow-right"
                mode="contained"
                style={[styles.mt20, styles.button]}
                disabled={!(mobile.length === 10 && isValid && value !== "")}
                onPress={() => {
                  verifyuser()
                //  
                }}>
                Request OTP
              </Button>
              {/*  <Button icon="arrow-right" mode="contained" style={[styles.mt20, styles.button]} onPress={() => {navigation.navigate("home") }}>Request OTP</Button>*/}
            </View>
          </View>
          {loading && (
            <View style={styles.loader}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          )}
        </SafeAreaView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingTop: 6,
    paddingBottom: 6,
    width: '80%',
    borderRadius: 5,
    fontSize: 20,
  },
  mt20: {
    marginTop: 20,
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

  center: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0,
  },

  content: {
    padding: 40,
  },
  logo: {
    height: 250,
    width: 250,
    marginBottom: -60,
  },
  container: {
    height:"100%",
    width:"100%",
    padding: 30,
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor : "white",
   // marginTop: StatusBar.currentHeight,
  },

  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    lineHeight: 30,
    fontWeight: 'normal',
    letterSpacing: 0.25,
    color: '#787878',
    textAlign: 'center',
  },
  textbold: {
    fontWeight: '500',
    fontSize: 18,
    color: '#000',
  },
  input: {
    marginTop: 20,
    width: '80%',
    backgroundColor: '#fff',
  },

  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  dropdown: {
    height: 50,
    borderColor: '#464f46',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
});

export default Login;
