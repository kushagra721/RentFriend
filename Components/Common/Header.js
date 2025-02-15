import React, { useState } from "react";
import { Pressable, StyleSheet } from "react-native";

import { Text, View, StatusBar } from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { useNavigation } from "@react-navigation/native";


import { Badge } from "react-native-paper";
import { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";


const Header = () => {
  const [cartcount, setcartCount] = useState(null);

  const navigation = useNavigation();


  useFocusEffect(
    useCallback(() => {
     
    }, [])
  );


  // console.log("location",location)
 //  console.log("address",addressfromheaderlocate?.updatedTime )



  return (
    <>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          padding: 18,
          alignItems: "center",
          paddingBottom: 15,
        }}
      >
        <Pressable
        //  onPress={() => navigation.navigate("home_address")}
          style={{
            width: "85%",
          }}
        >
          <View>
            <Text style={[styles.address, styles.boldTxt]}>{"Janakpuri C-Block"}...</Text>

           
      
            

        
            
{/* 
            {selectedAddress && addressfromheaderlocate && (
              <>
                <Text style={styles.greyText}>
                  {apiaddress}
                  <MaterialCommunityIcons
                    name="chevron-down"
                    size={20}
                    color="#888888"
                  />
                </Text>
              </>
            )} */}

          
              <>
                <Text style={styles.greyText}>
                  {"Janakpuri B2"}
                  <MaterialCommunityIcons
                    name="chevron-down"
                    size={20}
                    color="#888888"
                  />
                </Text>
              </>
            
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
           // navigation.navigate("cartitems");
          }}
        >
          <Badge style={styles.badge}>{cartcount ? cartcount : 0}</Badge>
          <MaterialCommunityIcons name="cart" size={27} color="#404040" />
        </Pressable>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  badge: { marginBottom: -8, marginRight: -5 },
  container: {
    marginTop: StatusBar.currentHeight,
  },

  address: { fontSize: 18 },
  greybg: { backgroundColor: "#E8E8E8", height: 10 },
  boldTxt: { fontWeight: "600" },
  blackText: { color: "#404040" },
  greyText: { color: "#888888" },

  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  cardContainer: {
    marginTop: 5,
    paddingLeft: 0,
    paddingRight: 0,
    padding: 10,
    width: "24%", // Set the width to 45% to allow 2 cards in a row with a little space in between
    marginBottom: 0, // Add margin at the bottom for spacing between rows
    // backgroundColor:"grey"
  },
  cardImage: {
    marginLeft: "20%",
    width: "50%", // Make the image take 100% of the width of its container
    height: 50,
  },
  container1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
    padding: 0,
    marginTop: 0,
  },
  cardContainer1: {
    borderRadius: 10,
    marginBottom: 0,
    marginTop: 10,
    margin: 0,
    padding: 0,
  },
  cardImage1: {
    height: 200,
  },
});

export default Header;
