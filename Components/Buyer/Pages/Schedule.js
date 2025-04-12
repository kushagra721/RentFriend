import React, {useState, useRef, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  TouchableHighlight,
  Pressable,
} from 'react-native';
import {
  Button,
  TextInput,
  Checkbox,
  Chip,
  Card,
  RadioButton,
  Divider,
} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RBSheet from 'react-native-raw-bottom-sheet';

import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment-timezone';
import {useRoute} from '@react-navigation/native';

const Schedule = ({navigation}) => {
  const route = useRoute();

  const generateOTP = () => {
    const otp = Math.floor(1000 + Math.random() * 9000);
    return otp.toString();
  };

  const jobStartOTPs = generateOTP();
  const jobEndOTPs = generateOTP();
  const refRBSheet = useRef();

  // console.log("add id",selectedaddressID)
  const [selectedDate, setSelectedDate] = useState(null);

  const [userinfoforchat, setuserinfoforchat] = useState();
  const [selectedTime, setSelectedTime] = useState([]);
  const [filtetimeslots, setfiltetimeslots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isDateSelected, setIsDateSelected] = useState(false);

  const [otplogininfo, setotplogininfo] = useState(null);

  const [checked1, setChecked1] = React.useState('first');
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDates = () => {
    const dates = [];
    for (let i = 0; i < 3; i++) {
      const newDate = new Date(currentDate.getTime() + i * 24 * 60 * 60 * 1000);
      dates.push(newDate);
    }
    return dates;
  };

  const dates = getDates();

  function formatDateTime(dateTimeString) {
    const utcDateTime = moment.utc(dateTimeString);
    const indianDateTime = utcDateTime.clone().tz('Asia/Kolkata', true); // Use 'true' to keep the same local time

    if (!indianDateTime.isValid()) {
      console.error('Invalid date format');
      return 'Invalid date format';
    }

    const formattedDateTime = indianDateTime.format('DD MMM YYYY, h:mm A');
    return formattedDateTime;
  }

  const handleDatePress = date => {
    if (date) {
      const currentDate = new Date();
      const formattedDate = date.toISOString().substring(0, 10); // Extract YYYY-MM-DD
      setSelectedDate(formattedDate);
      setIsDateSelected(true); // Set isDateSelected to true when a date is selected

      // Check if the selected date is today
      const isToday =
        date.getDate() === currentDate.getDate() &&
        date.getMonth() === currentDate.getMonth() &&
        date.getFullYear() === currentDate.getFullYear();

      // Get the current time in minutes
      const currentHours = currentDate.getHours();
      const currentMinutes = currentDate.getMinutes();
      const currentTime = currentHours * 60 + currentMinutes;

      // Calculate the current time plus 60 minutes
      const currentTimePlus60 = currentTime + 60;

      // Filter time slots only if the selected date is today
      let filteredTimeSlots = timeSlots;
      if (isToday) {
        filteredTimeSlots = timeSlots.filter(timeSlot => {
          const [hours, minutes, ampm] = timeSlot.split(/:|\s/);
          let timeInMinutes = parseInt(hours, 10) * 60 + parseInt(minutes, 10);
          if (ampm.toLowerCase() === 'pm' && hours !== '12') {
            timeInMinutes += 12 * 60; // Add 12 hours for PM times, except for 12:XX PM
          }
          return timeInMinutes > currentTimePlus60;
        });
      }

      setfiltetimeslots(filteredTimeSlots);
    } else {
      console.error('Invalid date object:', date);
    }
  };

  const timeSlots = [
    '06:00 AM',
    '07:00 AM',
    '08:00 AM',
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM',
    '06:00 PM',
    '07:00 PM',
    '08:00 PM',
    '09:00 PM',
  ];

  const handleTimePress = time => {
    setSelectedTime(prev => {
      if (prev.includes(time)) {
        // Deselect if already selected
        return prev.filter(t => t !== time);
      } else {
        // Add to selected
        return [...prev, time];
      }
    });
  };

  return (
    <SafeAreaView style={[styles.container, styles.bgWhite]}>
      <View style={[styles.upperhead, styles.flexxes]}>
        <MaterialCommunityIcons
          name="arrow-left"
          size={26}
          // color="white"
          color="#000"
          style={{marginRight: 10}}
          onPress={() => {
            navigation.goBack();
            // navigation.navigate("address");
          }}
        />
        <Text style={styles.title}>Schedule</Text>
      </View>

      <View
        style={[
          styles.upperhead,
          styles.flexxes,
          {justifyContent: 'space-between'},
        ]}>
        <View style={[styles.flexxes, {width: '70%'}]}>
          <MaterialCommunityIcons
            name="home"
            size={20}
            color="#000"
            style={{marginRight: 10}}
          />
          <Text style={[styles.text1, styles.boldTxt]}>
            {'janakpuri'}
            {','}
            {'delhi'}
            {/* {", "}
              {selectedAddress2} */}
            {', '}
            {'110045'}
            {', '}
            {'23'}
          </Text>
        </View>
        <View>
          <Button
            onPress={() => {
              // navigation.navigate("address");
            }}
            style={[
              {
                padding: 0,
                lineHeight: 20,
                minHeight: 15,
                borderWidth: 1,
                borderColor: 'grey',
                borderRadius: 5,
              },
            ]}>
            Change
          </Button>
        </View>
      </View>

      <ScrollView>
        <View style={styles.flx}>
          <View style={[styles.addressform]}>
            <Card
              style={[
                styles.card,
                styles.flex,
                styles.mt20,
                {backgroundColor: '#fff'},
              ]}>
              <Card.Content>
                <View style={[styles.flex]}>
                  <View>
                    <Text
                      style={[styles.blackText, styles.text2, styles.boldTxt]}>
                      Get Service Later
                    </Text>
                    <Text variant="bodyMedium" style={styles.greyText}>
                      Service at the earliest available time slot
                    </Text>
                  </View>

                  {/* <RadioButton
                    value="first"
                    status={checked1 === "first" ? "checked" : "unchecked"}
                    onPress={() => setChecked1("first")}
                  /> */}
                </View>

                <View>
                  <View style={[styles.flexxes, styles.mt20, styles.datecard]}>
                    {dates.map(date => (
                      <TouchableHighlight
                        key={date.toISOString()}
                        style={[
                          styles.btnNormal,
                          selectedDate ===
                            date.toISOString().substring(0, 10) &&
                            styles.btnPress,
                        ]}
                        onPress={() => handleDatePress(date)}>
                        <View>
                          <Text style={styles.greyText}>
                            {date
                              .toLocaleDateString('en-US', {weekday: 'short'})
                              .slice(0, 3)}
                          </Text>
                          <Text
                            style={[
                              styles.blackText,
                              styles.text2,
                              styles.boldTxt,
                              styles.alignn,
                            ]}>
                            {date.getDate()}
                          </Text>
                        </View>
                      </TouchableHighlight>
                    ))}
                  </View>

                  <View style={[styles.mt20, styles.timecard]}>
                    {isDateSelected && (
                      <>
                        <Text
                          style={[
                            styles.blackText,
                            styles.text2,
                            styles.boldTxt,
                          ]}>
                          Select start time of service
                        </Text>
                        <ScrollView>
                          <View
                            style={[
                              styles.flexxes,
                              styles.mt20,
                              styles.flxWrap,
                            ]}>
                            {filtetimeslots?.map(time => (
                              <Chip
                                key={time}
                                mode="outlined"
                                style={[
                                  styles.chip,
                                  selectedTime?.includes(time)
                                    ? styles.timePress
                                    : null,
                                ]}
                                onPress={() => handleTimePress(time)}>
                                {time}
                              </Chip>
                            ))}
                          </View>
                        </ScrollView>
                      </>
                    )}
                  </View>

                  {/* <View style={[styles.mt20, styles.timecard]}>
                      <Text
                        style={[styles.blackText, styles.text2, styles.boldTxt]}
                      >
                        Select start time of service
                      </Text>
                      <View style={[styles.flexxes, styles.mt20, styles.flxWrap]}>
                        {timeSlots?.map((time) => (
                          <Chip
                            key={time}
                            mode="outlined"
                            style={[
                              styles.chip,
                              selectedTime === time && styles.timePress,
                            ]}
                            onPress={() => handleTimePress(time)}
                          >
                            {time}
                          </Chip>
                        ))}
                      </View>
                    </View> */}
                </View>
              </Card.Content>
            </Card>
          </View>
        </View>
      </ScrollView>

      {isDateSelected && selectedTime && (
        <View style={styles.bottomView}>
          <Button
            icon="arrow-right"
            mode="contained"
            onPress={() => {
              refRBSheet.current.open();
            }}
            style={styles.btn}>
            Proceed to Checkout
          </Button>
        </View>
      )}

      {loading && (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}

      {/* <View style={styles.bottomView}>
          <Button
            icon="arrow-right"
            mode="contained"
            maxFontSizeMultiplier={70}
            onPress={() => {
              refRBSheet.current.open();
            }}
          >
            Proceed to Checkout
          </Button>
        </View> */}

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        closeOnPressBack={true}
        openDuration={100}
    
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0, 0, 0, .7)',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
          container: {
            padding: 5,
            backgroundColor: '#fff',
            opacity: 1,
            borderTopWidth: 1,
            borderColor: '#d3d3d3',
          },
        }}>
        <View style={[styles.content1, styles.mb20]}>
          <View style={[styles.flex, styles.borderbotom, styles.mb10]}>
            <View style={[styles.flexxes, styles.mrleft20]}>
              <MaterialCommunityIcons
                name="home-outline"
                size={20}
                color="purple"
                style={{marginRight: 10}}
              />
              <Text style={[styles.greyText]}>
                {'janakpuri'}
                {', '}
                {'delhi'}
                {', '}
                {'110045'}
              </Text>
            </View>
            {/* <MaterialCommunityIcons
                name="pencil-outline"
                size={20}
                color="#404040"
                onPress={() => {
                  navigation.navigate("addaddress");
                }}
              /> */}
          </View>

          <View style={[styles.flex, styles.borderbotom, styles.mb20]}>
            <View style={[styles.flexxes, styles.mrleft20]}>
              <MaterialCommunityIcons
                name="clock-outline"
                size={20}
                color="purple"
                style={{marginRight: 10}}
              />
              <Text style={[styles.greyText]}>
                {formatDateTime(selectedDate).slice(0, 13)}{' '}
                {selectedTime.length > 0
                  ? selectedTime.join(', ')
                  : 'No time selected'}
              </Text>
            </View>
          </View>

          <Button
            icon="arrow-right"
            mode="contained"
            onPress={() => {
              refRBSheet.current.close();
             navigation.navigate("Thankyou")
            }}
            style={[styles.btn, {minHeight: 45}]}>
            Proceed To Pay
          </Button>
          <Text style={[styles.greyText, styles.alignCenter, styles.mt10]}>
            By Proceeding, you agree to our{' '}
            <Text
              style={[styles.boldTxt, styles.blackText]}
              onPress={() => {
                 navigation.navigate("terms");
                refRBSheet.current.close();
              }}>
              T&C
            </Text>
            ,{' '}
            <Text
              style={[styles.boldTxt, styles.blackText]}
              onPress={() => {
                navigation.navigate("privacy");
                refRBSheet.current.close();
              }}>
              Privacy
            </Text>{' '}
            and{' '}
            <Text
              style={[styles.boldTxt, styles.blackText]}
              onPress={() => {
                navigation.navigate("cancellation");
                refRBSheet.current.close();
              }}>
              Cancellation Policy
            </Text>
          </Text>
        </View>
      </RBSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  alignn: {textAlign: 'center'},
  btn: {borderRadius: 5},
  container: {flex: 1},
  mb10: {marginBottom: 10},
  borderbotom: {
    borderBottomWidth: 1,
    borderStyle: 'dotted',
    borderBottomColor: '#d3d3d3',
    paddingBottom: 10,
  },
  selectedDate: {
    borderColor: 'blue', // Add any other styling you want for the selected date
    backgroundColor: 'blue',
    // ... other styles for the selected date
  },
  timePress: {
    borderColor: 'purple',
    backgroundColor: '#FAE6FA',
    color: 'purple',
  },
  flxWrap: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  datecard: {
    borderBottomWidth: 1,
    borderStyle: 'dotted',
    borderBottomColor: '#d3d3d3',
    paddingBottom: 25,
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
  btnNormal: {
    borderColor: '#f3f3f3',
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    width: 80,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  btnPress: {
    borderColor: 'purple',
    borderWidth: 1,
    backgroundColor: '#FAE6FA',
    width: 80,
    borderRadius: 5,
    padding: 15,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  card: {
    borderWidth: 1,
    borderColor: '#f3f3f3',
    backgroundColor: '#fff',
    marginBottom: 50,
  },
  purple: {color: 'purple'},
  flx: {display: 'flex', flexDirection: 'column'},
  map: {
    width: '100%',
    height: 250,
    borderWidth: 1,
    borderColor: '#ff0000',
  },
  chip: {
    fontSize: 18,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 5,
    height: 35,
    marginBottom: 10,
    marginRight: 0,
    padding: 0,
    color: '#000',
    width: '31%',
    flexDirection: 'row',
    backgroundColor: '#fff',
    fontWeight: 400,
  },
  mrleft20: {marginLeft: 20},
  wd50: {width: '48%'},
  justifyContent: {justifyContent: 'space-between'},
  addressform: {margin: 15, marginTop: 0},
  mb20: {marginBottom: 20},
  pd10: {padding: 10, paddingBottom: 5},
  bottomView: {padding: 15, borderTopColor: '#d3d3d3', borderTopWidth: 1},
  alignCenter: {textAlign: 'center'},
  borderTop: {
    borderTopWidth: 1,
    borderTopColor: '#d3d3d3',
    paddingTop: 15,
    paddingBottom: 15,
  },
  mt10: {marginTop: 13},
  mt20: {marginTop: 20},
  content1: {padding: 15},
  mrleft20: {marginLeft: -10},
  pad20: {paddingBottom: 17},
  text2: {fontSize: 17},
  greybg: {backgroundColor: '#F0F0F0', height: 9},
  textInput: {
    height: 45,
    borderWidth: 0,
    padding: 0,
    backgroundColor: '#ffffff',
    borderBottomWidth: 0,
    borderRadius: 0,
    borderBottomColor: '#ffff',
    marginBottom: 15,
  },
  text1: {fontSize: 15},
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boldTxt: {fontWeight: '600'},
  blackText: {color: '#000'},
  greyText: {color: '#888888'},
  title: {fontSize: 18, marginLeft: 10, fontWeight: '600'},
  flexxes: {
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
  content: {paddingLeft: 15, paddingRight: 15},
  bgWhite: {backgroundColor: '#fff'},
});
export default Schedule;
