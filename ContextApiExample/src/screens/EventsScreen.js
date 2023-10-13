import {
    StyleSheet,
    Text,
    View,
    Animated,
    Button,
    SafeAreaView,
    TextInput,
    FlatList
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import data from './../../assets/data.json';
  
  
  export default function EventsScreen({ route, navigation}) {
    const {league_title} = route.params;
    const [eventList, setEventList] = useState();

    const filterByLeague = [league_title];
    const filterByLeagueSet = new Set(filterByLeague);
    const eventsList = data.event.filter((event) => event.leagues.some((league) => filterByLeagueSet.has(league)))
    
    return (
      <SafeAreaView>
        <FlatList
            keyExtractor={(item) => item.id}
            data={eventsList}
            renderItem={({item}) => {
                return (
                         <View>
                          <Text>{item.event_title}</Text>
                         </View>                  
                )
            }}
        />
      </SafeAreaView>
    );
  }
  
  
  