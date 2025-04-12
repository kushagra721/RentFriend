import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import {
  Button,
  TextInput,
  Checkbox,
  Chip,
  Card,
  RadioButton,
  Divider,
} from "react-native-paper";

const Cancelation = ({ navigation }) => {
  return (
    <SafeAreaView style={[styles.container, styles.bgWhite]}>
      <Text style={styles.upperhead}>Cancellation Policy</Text>

      <ScrollView>
        <View style={styles.pad20}>
          <Text style={styles.greyTxt}>
            Service Provider has a fair cancellation policy. Our Professionals
            block time for jobs, and cancellations lead to lost revenue for
            them. We only charge cancellation fees when a Professional has been
            assigned to a job (since they no longer get any other jobs for that
            time). Depending on the service, customers have some time after
            placing the request to cancel the job without incurring a fees
          </Text>
        </View>
      </ScrollView>

      <View style={styles.bottomView}>
        <Button
          icon="arrow-right"
          mode="contained"
          maxFontSizeMultiplier={70}
          onPress={() => {
            navigation.navigate("Schedule"); }}
        >
          Okay, Got It
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  upperhead: {
    backgroundColor: "#512da8",
    color: "#fff",
    height: 55,
    fontSize: 18,
    padding: 15,
  },
  pad20: { padding: 20 },
  container: {
    flex: 1,
  },
  Title: { fontSize: 22 },

  bottomView: { padding: 15, borderTopColor: "#d3d3d3", borderTopWidth: 1 },
  greyTxt: { color: "#707070", fontSize: 16, lineHeight: 22, marginBottom: 15 },
});
export default Cancelation;