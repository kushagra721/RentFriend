import {
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  Modal,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import React, {useRef} from 'react';

import {useContext} from 'react';
import {
  Searchbar,
  Dialog,
  Portal,
  PaperProvider,
  Button,
} from 'react-native-paper';

import {useState, useEffect} from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../Common/Header';
//import {Card} from 'react-native-elements';

import RBSheet from 'react-native-raw-bottom-sheet';

import {CallApi, BaseUrl,requestLocationPermission} from '../Common/Functions';

import {useFocusEffect} from '@react-navigation/native';
import {useCallback} from 'react';

import {BackHandler, Alert} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import axios from 'axios';
import {  ApiContext } from "../../Context";

import { Platform, PermissionsAndroid } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

//import Carousel from 'react-native-snap-carousel';

//import Carousel from 'react-native-snap-carousel';

const {width} = Dimensions.get('window');

const HomeScreen = ({navigation}) => {
  const refRBSheet = useRef();

  const { coordinates, setcoordinates } = useContext(ApiContext);

  const [loading, setLoading] = useState(false);
  const [catdata, setcatdata] = useState([]);
  const [catname, setcatname] = useState('');
  const [subcatdata, setsubcatdata] = useState([]);

  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  //  const { service, setlogin } = useContext(ApiContext);

  useEffect(() => {}, []);

  useFocusEffect(
    useCallback(() => {
      getAllSellers();
      requestAndLogLocation()
      //  getAllCat();
    }, []),
  );
  const requestAndLogLocation = async () => {
    const hasLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        return true; // iOS handles it via Info.plist and user prompt
      }
  
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'This app needs access to your location',
          buttonPositive: 'OK',
        }
      );
  
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    };
  
    const granted = await hasLocationPermission();
  
    if (!granted) {
      console.warn('Location permission not granted');
      return;
    }
  
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log('Coordinates:', latitude, longitude);
      },
      (error) => {
        console.error('Location error:', error);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      }
    );
  };

  const bannerData = [
    {
      id: 1,
      image:
        'https://dialerpstorage.blob.core.windows.net/40011/Actual_BBWZ_images%2847%29.jpeg',
    },
    {
      id: 2,
      image:
        'https://dialerpstorage.blob.core.windows.net/40398/Actual_l66h_IMG_20250318_230127.jpg',
    },
    {
      id: 3,
      image:
        'https://dialerpstorage.blob.core.windows.net/40398/Actual_NVCu_images%2850%29.jpeg',
    },
    {
      id: 4,
      image:
        'https://dialerpstorage.blob.core.windows.net/40398/Actual_xVWF_images%2849%29.jpeg',
    },
  ];

  const getAllSellers = async () => {
    setLoading(true);

    const url = `${BaseUrl}/api/seller/getListOfSellers`;

    const body = {
      location: {
        latitude: 34.0522,
        longitude: -118.2437,
      },
    };
    // console.log("body", body)

    const response = await CallApi(url, body, 'POST');

    console.log('Data:sellers', response);

    if (response?.status === 'success') {
      setLoading(false);
      setcatdata(response?.data);
      // assuming response.data has your actual data
    } else {
      setLoading(false);
      ToastAndroid.show(response?.error, ToastAndroid.SHORT);
    }
  };

  const getAllCat = async () => {
    setLoading(true);

    const url = `${BaseUrl}/api/Categories/getcategories`;

    const body = {
      mobile: '',
    };

    // console.log("body", body)

    const response = await CallApi(url, body, 'GET');
    setcatdata(response);
    if (response) {
      setLoading(false);
    } else {
      setLoading(false);
    }

    if (response?.status === 200) {
      setLoading(false);
      // assuming response.data has your actual data
      console.log('Data:', response);
    } else {
      setLoading(false);
      ToastAndroid.show(response?.error, ToastAndroid.SHORT);
    }
  };

  const getAllsubCat = async id => {
    setLoading(true);

    const url = `${BaseUrl}/api/subCategories/getSubcategories?catId=${id}`;

    const body = {
      mobile: '',
    };

    // console.log("body", body)

    const response = await CallApi(url, body, 'GET');

    if (response?.status === 'success') {
      setLoading(false);

      setsubcatdata(response?.data);
    } else {
      setLoading(false);

      ToastAndroid.show(response?.error, ToastAndroid.SHORT);
    }
  };

  const dummyDatalistig = Array(6).fill({
    _id: '1',
    Item: 'Gagan Mittal',
    MRP: '499',
    'Item Pic':
      'https://dialerpstorage.blob.core.windows.net/40011/Actual_Vf7h_profile-user-svgrepo-com.png', // Placeholder image
    'Item Description': 'Hey there i am Gagan Mittal',
  });

  const dummyData = Array(6).fill({
    'Sub Sub CategoryID': 1,
    'Sub Sub Category': 'Sports',
    'Item Pic':
      'https://dialerpstorage.blob.core.windows.net/40011/Actual_CPwL_badminton.png', // Placeholder image URL
  });

  return (
    <>
      <SafeAreaView style={[styles.container, styles.bgWhite]}>
        {/* <StatusBar backgroundColor="#000" barStyle="light-content" /> */}
        <Header />
        <View style={[styles.content_, styles.mtTop]}>
          <Pressable
            style={[styles.sborder, styles.elevation]}
            onPress={() => {
              //  navigation.navigate("searchlist");
            }}>
            <MaterialCommunityIcons name="magnify" size={25} color="#989898" />
            <Text style={[styles.greyText, styles.sr]}>
              Search for AC services etc..
            </Text>
          </Pressable>
        </View>

        <ScrollView style={{marginTop: 0}}>
          <View
            style={{
              marginTop: 0,
              marginBottom: 10,
              marginStart: 5,
              marginEnd: 5,
            }}>
            <SwiperFlatList
              autoplay
              autoplayDelay={2}
              autoplayLoop
              index={0}
              showPagination
              data={bannerData}
              renderItem={({item}) => (
                <Image source={{uri: item.image}} style={styles.bannerImage} />
              )}
            />
          </View>
          <View>
            <View style={styles.greybg}></View>

            <View style={[styles.listing, styles.bgWhite]}>
              <View>
                <Text style={[styles.subHead, styles.boldTxt]}>
                  Top Companions
                </Text>

                {catdata.map((data, i) => {
                  return (
                    <Pressable
                      onPress={() => {}}
                      key={data?.id}
                      style={[styles.itemList]}>
                      <View style={[styles.flexx]}>
                        <Pressable
                          onPress={() => {
                            navigation.navigate('buyerprofile', {
                              id: data?.id,
                            });
                          }}
                          style={styles.wd80}>
                          <Text style={[styles.subTitle, styles.boldTxt]}>
                            {data.name}
                          </Text>
                          <Text style={styles.greyText}>
                            <MaterialCommunityIcons
                              name="star"
                              size={17}
                              color="gold"
                            />{' '}
                            1.0 (Reviews 10)
                          </Text>
                          <Text style={[styles.boldTxt, styles.price]}>
                            ₹
                            {parseInt(
                              data?.calendar?.categories[0]?.weekdaysPrice,
                            )}
                          </Text>
                          <View style={[styles.desc]}></View>
                        </Pressable>
                        <View style={styles.wd20}>
                          <Image
                            style={styles.itemImg}
                            source={{uri: data?.profilePic}}
                            resizeMode="cover"
                          />

                          <Pressable
                            onPress={() => {
                              navigation.navigate('Schedule');
                            }}
                            style={styles.button}>
                            <Text
                              style={{
                                color: 'white',
                                textTransform: 'uppercase',
                                marginTop: -4,
                              }}>
                              Book
                            </Text>
                          </Pressable>

                          <Pressable style={styles.wish}>
                            <MaterialCommunityIcons
                              name="heart"
                              size={18}
                              color="#d3d3d3"
                            />
                          </Pressable>
                        </View>
                      </View>
                      <Pressable
                        onPress={() => {
                          navigation.navigate('buyerprofile', {
                            id: data?.id,
                          });
                        }}
                        style={[styles.flexes, {flexDirection: 'row'}]}>
                        <ScrollView
                          style={{flex: 1, marginLeft: 10, marginTop: 10}}>
                          <Text>{data['Item Description']}</Text>
                        </ScrollView>
                      </Pressable>
                    </Pressable>
                  );
                })}
              </View>
            </View>
          </View>
        </ScrollView>

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
  wish: {
    marginTop: -120,
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 8,
    height: 35,
    width: 35,
    borderWidth: 1,
    borderColor: '#707070',
    marginLeft: -50,
  },
  mtTop: {marginTop: -20, marginBottom: 15, paddingBottom: 2},
  sborder: {
    height: 50,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#d3d3d3',
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  bannerImage: {
    width: width,
    height: 200,
    borderRadius: 0,
  },
  elevation: {
    elevation: 2,
    shadowColor: '#d3d3d3',
    shadowOffset: {width: 1, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: 2,
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

  border: {
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderColor: '#d3d3d3',
    borderStyle: 'dashed',
  },
  container: {
    flex: 1,
  },
  titles: {fontSize: 18, marginLeft: 10, fontWeight: '600'},
  flexxess: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  upperhead: {
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 1,
    padding: 15,
  },
  just: {justifyContent: 'center', alignItems: 'center'},
  cartite: {fontSize: 16, textAlign: 'center'},
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cartItemName: {width: 130},
  textInput: {
    height: 37,
    borderWidth: 0,
    padding: 0,
    backgroundColor: '#fff',
    textAlign: 'left',
    borderBottomWidth: 0,
    borderRadius: 0,
    borderBottomColor: '#ffff',
    width: 40,
    color: 'rgb(104, 71, 192)',
    elevation: 0,
    borderColor: 'white',
  },
  counterBtn: {
    backgroundColor: '#fff',
    width: 25,
    height: 35,
    textAlign: 'center',
    lineHeight: 20,
    paddingTop: 7,
    paddingLeft: 4,
  },
  counter: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#d3d3d3',
    overflow: 'hidden',
    height: 35,
  },
  cartItem: {marginBottom: 20},
  bottomView: {
    padding: 10,
    borderTopColor: '#d3d3d3',
    borderTopWidth: 1,
    backgroundColor: '#ffffff',
    height: 60,
  },
  btn: {padding: 0, lineHeight: 30, borderRadius: 5},
  number: {
    backgroundColor: '#f2f2f2',
    lineHeight: 10,
    paddingTop: 4,
    marginRight: 10,
    borderRadius: 5,
    height: 30,
    minWidth: 30,
    textAlign: 'center',
    color: '#000',
    fontWeight: '500',
    paddingLeft: 10,
  },
  amount: {fontWeight: '700', fontSize: 18},
  flexxes: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
  },
  bgWhite: {backgroundColor: '#fff'},
  button: {
    borderWidth: 1,
    paddingBottom: 10,
    borderColor: 'rgb(104, 71, 192)',
    padding: 0,
    backgroundColor: 'rgb(104, 71, 192)',
    width: 90,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
    paddingTop: 10,
    borderRadius: 5,
    color: '#fff',
    height: 38,
  },

  itemList: {
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderBottomColor: '#d3d3d3',
    padding: 20,
    marginTop: 5,
    backgroundColor: '#fff',
    borderStyle: 'dashed',
  },
  flexes: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    marginLeft: -20,
  },
  mticon: {marginRight: 10, marginTop: 10},
  desc: {
    marginTop: 15,
    marginBottom: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  price: {
    marginTop: 3,
    fontWeight: '700',
  },
  subTitle: {fontSize: 17, textTransform: 'capitalize', marginBottom: 5},
  mt30: {marginTop: 30},
  wd80: {width: '70%', paddingRight: 10},
  wd20: {
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: -10,
  },
  flexx: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'start',
    justifyContent: 'center',
  },
  subHead: {fontSize: 22, padding: 20},
  catName: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 12,
    color: '#404040',
  },
  catTab: {
    width: '25%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 10,
  },
  catImg: {width: 55, height: 55, borderRadius: 5},
  itemImg: {width: 95, height: 95, borderRadius: 5},
  flexContent: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  greybg: {backgroundColor: '#E8E8E8', height: 10},
  boldTxt: {fontWeight: '600'},
  blackText: {color: '#404040'},
  greyText: {color: '#888888'},
  save: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#D0D0D0',
    padding: 12,
    marginTop: 18,
  },
  title: {
    fontSize: 22,
    color: '#303030',
    fontWeight: '700',
    marginBottom: 10,
  },
  content: {
    padding: 20,
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: '#ffffff',
  },
  content_: {padding: 18, paddingBottom: 0},
  Banner: {height: 140, width: 'auto', backgroundColor: '#000'},
  sr: {fontSize: 17, marginLeft: 10},
});

export default HomeScreen;
