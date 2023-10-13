import {
    StyleSheet,
    Text,
    View,
    Animated,
    Button,
    SafeAreaView,
    TextInput,
    FlatList,
    TouchableOpacity,
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import data from './../../assets/data.json';
  
  
  export default function LeagueScreen({navigation}) {
    const [leagueData, setLeagueData] = useState();

    useEffect(() => {
        setLeagueData(data.league)
    })
    return (
      <View style={styles.container}>
        <FlatList
            keyExtractor={(item) => item.id}
            data={leagueData}
            renderItem={({item}) => {
                return (
                         <TouchableOpacity 
                            style={styles.button} 
                            onPress={() => navigation.navigate('Events', {
                                league_title: item.league_title
                            }   
                            )} 
                         >
                            <Text>{item.league_title}</Text>
                        </TouchableOpacity>                  
                )
            }}
            contentContainerStyle={{flexGrow: 1, justifyContent: "space-around"}}
        />        
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',  
        justifyContent: 'space-around'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
    }
  });
  
  