import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  SafeAreaView,
  ImageBackground,
  ActivityIndicator,
  View,
  StatusBar,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import logo from '../../Icons/Icons/app_logo.jpeg';
import image from '../../Icons/Icons/bg.png';
import {TextInput, Text, Button} from 'react-native-paper';
import {CallApi, BaseUrl} from '../Common/Functions';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from '@react-native-community/geolocation';

const SignupForm = ({route, navigation}) => {
  const {mobile, role} = route.params;
  console.log(mobile);

  //const [mobile, setmobile] = React.useState('');
  const [loading, setloading] = React.useState(false);

  const [formdata, setformdata] = useState({
    name: '',
    mobileNo: mobile,
    profilePic: '',
    type: role == '1' ? 'buyer' : 'seller',
    fcmToken: '',
    deviceType: 'android',
    media: [],
    geoLocation: {
      type: 'Point',
      coordinates: [77.5946, 12.9716], // longitude, latitude (e.g., Bangalore)
    },
    catList: [],
    subCatList: [],
    age: 0,
    gender: '',
    bio: '',

    rating: '',
  });

  const isFormValid =
    formdata?.name?.trim() !== '' && formdata?.mobileNo?.length === 10;

  const Signup = async () => {
    setloading(true);
    console.log(formdata);
    const url = `${BaseUrl}/companio/external/signUp`;

    const response = await CallApi(url, formdata, 'POST');
    console.log('body', response);

    if (response?.user) {
      const url2 = `${BaseUrl}/companio/external/otp`;

      const body = {
        mobile: formdata?.mobileNo,
        role: formdata?.type,
      };

      const response = await CallApi(url2, body, 'POST');

      if (response?.status == true) {
        setloading(false);
        navigation.navigate('verifyotp', {
          mobile: mobile, // Replace with actual data
          otp: response?.data, // Any data you want to send
        });
      } else {
        setloading(false);

        ToastAndroid.show('User not found', ToastAndroid.SHORT);
      }
    } else {
      setloading(false);

      ToastAndroid.show('api error', ToastAndroid.SHORT);
    }
  };

  // console.log("formdata", formdata);

  return (
    <>
      <SafeAreaView style={[styles.container]}>
        <View>
          <View style={styles.center}>
            <Image style={styles.logo} source={logo} resizeMode="center" />
            <Text style={[styles.text, styles.textbold]}>
              Your Friend Indeed
            </Text>
            {/* <Text style={styles.text}>Quick | Affordable | Trusted</Text> */}

            <View style={[styles.card, styles.flx]}>
              <Pressable style={{width: '100%'}}></Pressable>
            </View>

            <TextInput
              mode="outlined"
              label="Name"
              left={<TextInput.Icon icon="phone" />}
              style={styles.input}
              onChangeText={text => {
                setformdata(prev => ({...prev, name: text}));
              }}
            />

            <TextInput
              mode="outlined"
              label="Mobile"
              value={formdata.mobileNo}
              left={<TextInput.Icon icon="phone" />}
              style={styles.input}
              onChangeText={text => {
                setformdata(prev => ({...prev, mobileNo: text}));
              }}
            />

            <Button
              icon="arrow-right"
              mode="contained"
              style={[styles.mt20, styles.button]}
              disabled={!isFormValid}
              onPress={() => {
                Signup();
                //  postdata();
              }}>
              Signup
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
  loader: {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mt20: {
    marginTop: 20,
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
    height: '100%',
    width: '100%',
    padding: 30,
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'white',
  },

  image: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
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
});

export default SignupForm;
