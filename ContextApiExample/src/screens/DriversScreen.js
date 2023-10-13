import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  FlatList,
} from "react-native";
import React, { useRef, useEffect, useState } from "react";
import data from './../../assets/data.json';


export default function DriversScreen() {
  
  const semi_drivers = data.semi_drivers;
  const street_drivers = data.street_drivers;

  return (
    <SafeAreaView>
      <View>
        <FlatList 
          keyExtractor={(item) => item.driver_id}
          data={semi_drivers}
          renderItem={({item}) => {
              return (
                      <View>
                        <Text>{item.firstname} {item.lastname}</Text>
                      </View>                  
              )
          }}
        />
      </View>
      <View>
        <FlatList 
          keyExtractor={(item) => item.driver_id}
          data={street_drivers}
          renderItem={({item}) => {
              return (
                      <View>
                        <Text>{item.firstname} {item.lastname}</Text>
                      </View>                  
              )
          }}
        />
      </View>
    </SafeAreaView>
  );
}


