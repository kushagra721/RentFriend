import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  Pressable,
  StatusBar,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Alert} from 'react-native';
import {Button} from 'react-native-paper';

import {useFocusEffect} from '@react-navigation/native';
import {useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Settings = ({navigation}) => {
  const [logindata, setlogindata] = useState({});
  useFocusEffect(
    useCallback(() => {
      getuserData();
    }, []),
  );

  const getuserData = async () => {
    const data = await AsyncStorage.getItem('logindata_companio');
    //console.log('Stored Data:', JSON.parse(data));
    setlogindata(JSON.parse(data));
  };

  return (
    <SafeAreaView style={[styles.container, styles.bgWHite]}>
      <ScrollView>
        <View style={[styles.card, styles.flx]}>
          <Pressable
            // onPress={() => {
            //   navigation.navigate("Profile");
            // }}
            style={{width: '100%'}}>
            {/* <View>
            
              <Text style={styles.prizetext}><MaterialCommunityIcons name="account" size={22} color="#FF8000" />KUSH</Text>
              <Text style={[styles.prizetext1, styles.greytxt2,  styles.fw500]}>+91 8851354099</Text>
              
            </View> */}

            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'coloumn',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <Image
                source={{
                  uri: 'https://dialerpstorage.blob.core.windows.net/10127/2936/59.jpg',
                }} // Replace "ProfilePicURL" with the key used for the profile picture URL
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                  borderWidth: 1,
                  borderColor: '#f2f2f2',
                }} // Adjust the width, height, and borderRadius as needed
              />
              <Button
                mode="text"
                style={{
                  marginTop: -40,
                  backgroundColor: 'white',
                  marginRight: -50,
                  borderWidth: 1,
                  borderColor: '#f2f2f2',
                  width: 40,
                  minWidth: 45,
                  minHeigh: 45,
                  height: 45,
                  borderRadius: 25,
                }}>
                <MaterialCommunityIcons
                  onPress={() => {}}
                  name="camera"
                  size={15}
                  color="#000"
                />
              </Button>
              <Text style={styles.prizetext}>
                {/* <MaterialCommunityIcons name="account" size={22} color="#FF8000" /> */}
                {logindata?.name}
              </Text>
              <Text style={[styles.prizetext1, styles.greytxt2, styles.fw500]}>
                +91- {logindata?.mobileNo}
              </Text>
            </View>

            {/* <View>

                <Text style={styles.prizetext}><MaterialCommunityIcons name="account" size={22} color="#FF8000" />otplogininfo?.["Full Name"]</Text>
                <Text style={[styles.prizetext1, styles.greytxt2, styles.fw500]}>otplogininfo?.["Login Mobile"]</Text>

              </View> */}
          </Pressable>
        </View>
        <View style={styles.greybg}></View>
        <View style={[styles.card]}>
          <Pressable
            onPress={() => {
              //   navigation.navigate("bookings");
            }}>
            <View style={styles.menu}>
              <View>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <Text>
                    <MaterialCommunityIcons
                      name="book"
                      size={20}
                      color="#000000"
                    />
                  </Text>
                  {/* <Pressable> */}
                  <Text style={styles.percentage}>My bookings</Text>
                  {/* </Pressable> */}
                </View>
              </View>
              <View>
                <Icon name="angle-right" size={24} color="#888888" />
              </View>
            </View>
          </Pressable>

          <Pressable
            onPress={() => {
              //  navigation.navigate("whishlist");
            }}>
            <View style={styles.menu}>
              <View>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <Text>
                    <MaterialCommunityIcons
                      name="heart"
                      size={20}
                      color="#000000"
                    />
                  </Text>
                  {/* <Pressable> */}
                  <Text style={styles.percentage}>Whishlist</Text>
                  {/* </Pressable> */}
                </View>
              </View>
              <View>
                <Icon name="angle-right" size={24} color="#888888" />
              </View>
            </View>
          </Pressable>

          {/* <View style={styles.menu}>
              <View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Text>
                    <MaterialCommunityIcons
                      name="help-box"
                      size={20}
                      color="#000000"
                    />
                  </Text>
                  <Text style={styles.percentage}>Help centre</Text>
                </View>
              </View>
              <View>
                <Icon name="angle-right" size={24} color="#888888" />
              </View>
            </View> */}

          {/* <View style={styles.menu}>
              <View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Text>
                    <MaterialCommunityIcons
                      name="nativescript"
                      size={20}
                      color="#000000"
                    />
                  </Text>
                  <Text style={styles.percentage}>Native Ro</Text>
                </View>
              </View>
              <View>
                <Icon name="angle-right" size={24} color="#888888" />
              </View>
            </View> */}

          {/* <View style={styles.menu}>
              <View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Text>
                    <MaterialCommunityIcons
                      name="wallet"
                      size={20}
                      color="#000000"
                    />
                  </Text>
                  <Text style={styles.percentage}>Wallet</Text>
                </View>
              </View>
              <View>
                <Icon name="angle-right" size={24} color="#888888" />
              </View>
            </View> */}

          {/* <View style={styles.menu}>
              <View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Text>
                    <MaterialCommunityIcons
                      name="rhombus"
                      size={20}
                      color="#000000"
                    />
                  </Text>
                  <Text style={styles.percentage}>My subscriptions</Text>
                </View>
              </View>
              <View>
                <Icon name="angle-right" size={24} color="#888888" />
              </View>
            </View> */}

          {/* <View style={styles.menu}>
              <View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Text>
                    <MaterialCommunityIcons
                      name="star-box"
                      size={20}
                      color="#000000"
                    />
                  </Text>
                  <Text style={styles.percentage}>Rating</Text>
                </View>
              </View>
              <View>
                <Icon name="angle-right" size={24} color="#888888" />
              </View>
            </View> */}
          <Pressable
            onPress={() => {
              //  navigation.navigate("manageaddresses");
            }}>
            <View style={styles.menu}>
              <View>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <Text>
                    <MaterialCommunityIcons
                      name="map"
                      size={20}
                      color="#000000"
                    />
                  </Text>

                  <Text style={styles.percentage}>Billing address</Text>
                </View>
              </View>
              <View>
                <Icon name="angle-right" size={24} color="#888888" />
              </View>
            </View>
          </Pressable>

          <Pressable
            onPress={() => {
              //  navigation.navigate("visit_address");
            }}>
            <View style={styles.menu}>
              <View>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <Text>
                    <MaterialCommunityIcons
                      name="map-marker-radius-outline"
                      size={20}
                      color="#000000"
                    />
                  </Text>

                  <Text style={styles.percentage}>Visit address</Text>
                </View>
              </View>
              <View>
                <Icon name="angle-right" size={24} color="#888888" />
              </View>
            </View>
          </Pressable>

          <Pressable
            onPress={() => {
              // navigation.navigate("help");
            }}>
            <View style={styles.menu}>
              <View>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <Text>
                    <MaterialCommunityIcons
                      name="help"
                      size={20}
                      color="#000000"
                    />
                  </Text>

                  <Text style={styles.percentage}>Help</Text>
                </View>
              </View>
              <View>
                <Icon name="angle-right" size={24} color="#888888" />
              </View>
            </View>
          </Pressable>

          {/* <View style={styles.menu}>
              <View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Text>
                    <MaterialCommunityIcons
                      name="credit-card-minus-outline"
                      size={20}
                      color="#000000"
                    />
                  </Text>
                  <Text style={styles.percentage}>Manage payment methods</Text>
                </View>
              </View>
              <View>
                <Icon name="angle-right" size={24} color="#888888" />
              </View>
            </View> 

            <Pressable style={styles.menu} onPress={() => {
          navigation.navigate("profile");
        }}>
              <View  >
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Text>
                    <MaterialCommunityIcons
                      name="saw-blade"
                      size={20}
                      color="#000000"
                    />
                  </Text>
                  <Text style={styles.percentage}>My Profile</Text>
                </View>
              </View>
              <View>
                <Icon name="angle-right" size={24} color="#888888" />
              </View>
            </Pressable>
*/}
          {/* <View style={styles.menu}>
              <View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Text>
                    <MaterialCommunityIcons
                      name="book-minus"
                      size={20}
                      color="#000000"
                    />
                  </Text>
                  <Text style={styles.percentage}>Scheduled bookings</Text>
                </View>
              </View>
              <View>
                <Icon name="angle-right" size={24} color="#888888" />
              </View>
            </View> */}

          {/* <View style={styles.menu}>
              <View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Text>
                    <MaterialCommunityIcons
                      name="zip-disk"
                      size={20}
                      color="#000000"
                    />
                  </Text>
                  <Text style={styles.percentage}>About</Text>
                </View>
              </View>
              <View>
                <Icon name="angle-right" size={24} color="#888888" />
              </View>
            </View> */}
          <Pressable
            onPress={async () => {
              try {
                await AsyncStorage.clear(); // Clear all data
                navigation.reset({
                  index: 0,
                  routes: [{name: 'login'}], // Replace 'Login' with your target screen
                });
              } catch (e) {
                console.log('Error clearing storage:', e);
              }
            }}>
            <View style={[styles.menu, styles.brnone]}>
              <View>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <Text>
                    <MaterialCommunityIcons
                      name="logout"
                      size={20}
                      color="#000000"
                    />
                  </Text>
                  <Text style={styles.percentage}>Logout</Text>
                </View>
              </View>
              <View>
                <Icon name="angle-right" size={24} color="#888888" />
              </View>
            </View>
          </Pressable>

          {/**    <Pressable onPress={() => deleteProfile() }>
              <View style={[styles.menu, styles.brnone]}>
                <View>

                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text>
                      <MaterialCommunityIcons
                        name="delete"
                        size={20}
                        color="#000000"
                      />
                    </Text>
                    <Text style={styles.percentage}>Delete Account</Text>
                  </View>

                </View>
                <View>
                  <Icon name="angle-right" size={24} color="#888888" />
                </View>
              </View>
            </Pressable>*/}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  greybg: {backgroundColor: '#F0F0F0', height: 9},
  brnone: {borderBottomWidth: 0},
  flx: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  container: {
    flex: 1,
  },
  bgWHite: {backgroundColor: 'white'},
  loginblock: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: '100%',
    marginTop: 60,
    display: 'flex',
  },
  menu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    marginBottom: 5,
    marginLeft: 0,
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#E0E0E0',
    paddingBottom: 15,
  },
  mb60: {marginBottom: 60},
  green: {color: 'green', fontWeight: '800', fontSize: 20},
  mt10: {marginTop: 5},
  fw500: {fontWeight: 400},
  action: {width: 24, height: 24},
  list2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  greytxt2: {
    color: '#606060',
    fontSize: 16,
    lineHeight: 20,
    textTransform: 'capitalize',
  },
  elevation: {
    elevation: 3,
    shadowColor: '#000',
  },
  text: {
    fontSize: 24,
    fontWeight: '700',
  },
  card: {
    padding: 15,
    margin: 0,
    borderRadius: 0,
    backgroundColor: 'white',
    marginBottom: 10,
  },

  prizecard: {
    padding: 3,
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#FFFFF4',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 0,
  },
  cardCovid: {
    padding: 3,
    margin: 10,
    borderRadius: 8,
    backgroundColor: '#F0F8FF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 0,
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#c2d6d6',
    padding: 10,
  },
  percentage: {
    fontWeight: '400',
    fontSize: 16,
    marginLeft: 8,
    marginTop: -2,
    color: '#000',
  },
  job: {
    marginLeft: 10,
    fontWeight: '500',
    marginTop: 15,
    color: '#787878',
    fontSize: 14,
  },
  rightdesigns: {
    color: '#fff',
    backgroundColor: '#006400',
    fontWeight: '400',
    padding: 8,
    borderRadius: 5,
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 12,
  },
  prizetext: {
    fontSize: 18,
    fontWeight: '600',
    padding: 0,
    marginBottom: 3,
  },
  prizetext1: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 3,
  },
});

export default Settings;
