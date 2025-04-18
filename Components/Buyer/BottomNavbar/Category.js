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
  ToastAndroid,
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
// import { Card } from '@rneui/themed';
import {useState, useEffect} from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../Common/Header';
// import { Card } from "react-native-elements";

import RBSheet from 'react-native-raw-bottom-sheet';

import {CallApi, BaseUrl} from '../Common/Functions';

import {useFocusEffect} from '@react-navigation/native';
import {useCallback} from 'react';

import {BackHandler, Alert} from 'react-native';
import {resetCache} from '../../../metro.config';

const Category = ({navigation}) => {
  const refRBSheet = useRef();

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
      getAllCat();
    }, []),
  );

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

  return (
    <>
      <SafeAreaView style={[styles.container, styles.bgWhite]}>
        {/* <StatusBar backgroundColor="#000" barStyle="light-content" /> */}
        <Header />
        <View style={[styles.content, styles.mtTop]}>
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

        <ScrollView>
          <View>
            <View style={styles.content}>
              {/* <Video source ={{uri : ""}} style={{height:100,width:100}}/> */}
              <View style={styles.gridContainer}>
                {catdata?.map((data, i) => {
                  return (
                    <Pressable
                      style={styles.cardContainer}
                      key={data?._id}
                      onPress={() => {
                        getAllsubCat(data?.cid);
                        setcatname(data?.name);
                        refRBSheet.current.open();
                      }}>
                      <View>
                        <View style={styles.cardbg}>
                          <Image
                            style={styles.cardImage}
                            source={{uri: data.cpic}}
                          />
                        </View>
                        <Text style={styles.text}>{data.name}</Text>
                      </View>
                    </Pressable>
                  );
                })}
              </View>
            </View>
            <View style={styles.greybg}></View>

            {/* <Button onPress={showDialog}>Show Dialog</Button> */}
            {/* <Text
              style={{
                fontSize: 18,
                margin: 10,
                padding: 10,
                color: '#4c40ed',
                fontWeight: '500',
              }}>
              Thoughtful Curations
            </Text> */}

            {/* <View style={[styles.container1]}>
              <Carousel
                data={banner}
                renderItem={renderItembanner}
                sliderWidth={400}
                itemWidth={200}
                layout="default"
                loop
                style={{}}
              />
            </View> */}

            <View style={{marginBottom: 100}}></View>
          </View>

          <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={true}
            closeOnPressBack={true}
            height={500}
            customStyles={{
              wrapper: {
                backgroundColor: 'rgba(0, 0, 0, .7)',
              },
              draggableIcon: {
                backgroundColor: '#000',
              },
              container: {
                padding: 15,
                backgroundColor: '#fff',
                opacity: 1,
              },
            }}>
            <Text
              style={{
                fontSize: 18,
                margin: 10,
                padding: 10,
                color: '#000',
                fontWeight: '500',
                textAlign: 'center',
              }}>
              {catname}
            </Text>
            <ScrollView>
              <View style={styles.gridContainer}>
                {subcatdata?.map((data, i) => {
                  return (
                    <Pressable
                      key={data._id}
                      style={styles.cardContainer2}
                      onPress={() => {
                        refRBSheet.current.close();
                        navigation.navigate('listings');
                      }}>
                      <View>
                        <View style={styles.cardbg}>
                          <Image
                            style={styles.sheetImage}
                            source={{uri: data.scpic}}
                          />
                        </View>
                        <Text style={styles.text}>{data.name}</Text>
                      </View>
                    </Pressable>
                  );
                })}
              </View>
            </ScrollView>
          </RBSheet>
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
  btn: {padding: 0, lineHeight: 30, borderRadius: 5},

  sky: {color: '#007fff'},
  statuss: {fontSize: 18, fontWeight: 600, marginBottom: 5},
  boldTxt: {fontWeight: '600'},
  blackText: {color: '#000000'},
  wd100: {width: '100%'},
  greyTxt: {
    color: '#707070',
    fontSize: 16,
    lineHeight: 15,
    marginBottom: 0,
    fontSize: 15,
  },
  flex: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
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
  cardImg: {width: 60, height: 60, marginRight: 10, borderRadius: 7},
  Statuss: {fontSize: 17, fontWeight: 600, marginBottom: 5},

  serName: {fontSize: 16, fontWeight: 500, color: '#000'},
  modal: {backgroundColor: '#fff', borderRadius: 10},
  sr: {fontSize: 17, marginLeft: 10},
  elevation: {
    elevation: 2,
    shadowColor: '#d3d3d3',
    shadowOffset: {width: 1, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
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
  mtTop: {marginTop: -20, paddingBottom: 2},

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
  sheetImage: {height: 70, width: 70, borderRadius: 5},
  greybg: {backgroundColor: '#E8E8E8', height: 10},
  text: {fontSize: 13, fontWeight: 400, color: '#303030', marginTop: 5,textAlign:"center"},
  cardbg: {
    backgroundColor: '#fff',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    width: 'auto',
  },
  bgWhite: {backgroundColor: '#fff'},
  content: {padding: 18, paddingBottom: 0},
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    paddingBottom: 20,
  },
  cardContainer: {
    marginTop: 5,
    width: '33%',
    marginBottom: 0,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 0,
  },
  cardImage: {
    width: 55,
    height: 55,
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    padding: 0,
    marginTop: 0,
    marginBottom: 100,
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    padding: 0,
    marginTop: 0,
    marginBottom: 100,
  },
  container: {
    flex: 1,
  },
  cardContainer1: {
    borderRadius: 10,
    marginBottom: 0,
    marginTop: 10,
    margin: 0,
    padding: 0,
    borderWidth: 1,
  },
  cardImage1: {
    height: 200,
  },

  cardContainer2: {
    marginTop: 5,
    width: '22%',
    marginBottom: 0,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 0,
    paddingBottom: 20,
    margin: 5,
  },
});

export default Category;
