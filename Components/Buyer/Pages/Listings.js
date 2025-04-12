import React, {useState, useEffect, useRef} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import {CallApi, BaseUrl} from '../Common/Functions';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useRoute} from '@react-navigation/native';

import {Button, TextInput} from 'react-native-paper';

import {useFocusEffect} from '@react-navigation/native';
import {useCallback} from 'react';

const Listings = ({navigation}) => {

   const [loading, setLoading] = useState(false);
     const [catdata, setcatdata] = useState([]);


   useFocusEffect(
     useCallback(() => {
       getAllSellers();
       //  getAllCat();
     }, []),
   );


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


  const dummyData = Array(6).fill({
    'Sub Sub CategoryID': 1,
    'Sub Sub Category': 'Sports',
    'Item Pic':
      'https://dialerpstorage.blob.core.windows.net/40011/Actual_CPwL_badminton.png', // Placeholder image URL
  });

  const dummyDatalistig = Array(6).fill({
    _id: '1',
    Item: 'Gagan Mittal',
    MRP: '499',
    'Item Pic':
      'https://dialerpstorage.blob.core.windows.net/40011/Actual_Vf7h_profile-user-svgrepo-com.png', // Placeholder image
    'Item Description': 'Hey there i am Gagan Mittal',
  });



  return (
    <SafeAreaView style={[styles.container, styles.bgWhite]}>
      <View style={[styles.upperhead, styles.flexxess]}>
        <MaterialCommunityIcons
          name="arrow-left"
          size={26}
          //color="#000"
          style={{marginRight: 10}}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={[styles.titles]}>Companions</Text>
      </View>
      <ScrollView style={{marginTop: 0}}>
        <View>
          {/* {banner?.response?.records?.map((d, i) => {
            return ( */}
          <View key={'232'}>
            <View>
              <Image
                style={styles.Banner}
                source={{
                  uri: 'https://dialerpstorage.blob.core.windows.net/40011/Actual_BBWZ_images%2847%29.jpeg',
                }}
                resizeMode="cover"
              />
            </View>
          </View>
          {/* );
          })} */}

          <View style={styles.content}>
            <View style={{flexDirection: 'row'}}>
              <Text style={[styles.title, {flexWrap: 'wrap', flex: 1}]}>
                {'Sports'}
              </Text>
            </View>
            <Text style={styles.greyText}>
              <MaterialCommunityIcons name="star" size={20} color="#FFBC35" />{' '}
              0.0 (Reviews 0)
            </Text>

            {/* <View style={styles.save}>
              <Pressable onPress={() => handleRemoveCart()}>
                <Text style={[styles.blackText, styles.boldTxt]}>
                  <MaterialCommunityIcons
                    name="sticker-emoji"
                    size={18}
                    color="blue"
                  />{" "}
                  Save 15% on your Booking
                </Text>
              </Pressable>
        </View>*/}
          </View>
          <View style={styles.greybg}></View>

          <View style={[styles.content, styles.flexContent]}>
            {dummyData
              .filter(
                (d, index, self) =>
                  self.findIndex(
                    item => item['Sub Sub Category'] === d['Sub Sub Category'],
                  ) === index,
              )
              .map((d, i) => {
                return (
                  <View key={i} style={styles.catTab}>
                    <Pressable>
                      <Image
                        style={{
                          ...styles.catImg,
                          borderColor:
                            '' === d['Sub Sub CategoryID']
                              ? '#000'
                              : 'transparent',
                          borderWidth: '' === d['Sub Sub CategoryID'] ? 2 : 0,
                          cursor: 'pointer',
                        }}
                        source={{uri: d['Item Pic']}}
                        resizeMode="cover"
                      />
                      <Text
                        style={{
                          ...styles.catName,
                          borderBottomColor:
                            '' === d['Sub Sub CategoryID']
                              ? '#000'
                              : 'transparent',
                          borderBottomWidth:
                            '' === d['Sub Sub CategoryID'] ? 2 : 0,
                          cursor: 'pointer',
                        }}>
                        {d['Sub Sub Category']}
                      </Text>
                    </Pressable>
                  </View>
                );
              })}

            {/* <View style={styles.catTab}>
              <Image
                style={styles.catImg}
                source={imgico1}
                resizeMode="cover"
              />

              <Text style={styles.catName}>Pedicure</Text>
            </View>

            <View style={styles.catTab}>
              <Image
                style={styles.catImg}
                source={imgico2}
                resizeMode="cover"
              />

              <Text style={styles.catName}>Facial & Cleanups</Text>
            </View> */}
          </View>

          <View style={styles.greybg}></View>

          <View style={[styles.listing, styles.bgWhite]}>
            <View>
              <Text style={[styles.subHead, styles.boldTxt]}>
                {/* {selectedSubSubCategorytitle ? (
                  selectedSubSubCategorytitle
                ) : (
                  <Text>All Services</Text>
                )} */}{' '}
                All Companions
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

      {dummyDatalistig.length > 0 ? (
        dummyDatalistig?.slice(0, 1)?.map((data, i) => {
          return (
            <View style={styles.bottomView}>
              <View style={styles.flexxes}>
                <View style={styles.flexxes}>
                  {/* 
                      <View style={styles.number}>
                        <Text>2</Text>
                      </View> 
                  */}
                  <Text style={styles.amount}>₹{'499'}</Text>
                </View>

                <Button
                  icon="arrow-right"
                  mode="contained"
                  onPress={() => {}}
                  style={styles.btn}>
                  Proceed
                </Button>
              </View>
            </View>
          );
        })
      ) : (
        <View style={styles.bottomView}>
          <View style={[styles.flex, styles.just]}>
            <MaterialCommunityIcons name="cart-heart" size={25} color="grey" />
            <Text style={[styles.cartite, styles.greyText]}>
              {' '}
              No Items in your Cart
            </Text>
          </View>
        </View>
      )}


      {loading && (
                <View style={styles.loader}>
                  <ActivityIndicator size="large" color="#0000ff" />
                </View>
              )}

  
    </SafeAreaView>
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
  Banner: {height: 140, width: 'auto', backgroundColor: '#000'},
});

export default Listings;
