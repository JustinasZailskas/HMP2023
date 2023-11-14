import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import data from './../../assets/data.json';


export default function EventsScreen ({route, navigation}) {
    const {title} = route.params;

    const filterByLeague = [title];
    const filterByLeagueSet = new Set(filterByLeague);
    const eventsList = data.event.filter((event) => event.leagues.some((league) => filterByLeagueSet.has(league)));
    return (
        <View>
            <Text>{title}</Text>
            <FlatList 
                keyExtractor={(item) => item.id}
                data={eventsList}
                renderItem={({item}) => {
                    return (
                        <View>
                            <Text>{item.event_title}</Text>
                            <Text>{item.beginDate}</Text>
                        </View>    
                    )
                }}
            />
        </View>
    )
}