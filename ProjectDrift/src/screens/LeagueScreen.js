import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import data from './../../assets/data.json';



export default function LeagueScreen ({navigation}) {
    const [leageuData, setLeagueData] = useState();

    useEffect(() => {
        setLeagueData(data.league);
    })

    return (
        <View style={styles.container}>
            <Text>League page</Text>
            <FlatList 
                keyExtractor={(item) => item.id}
                data={leageuData}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity
                            onPress={()=> navigation.navigate('Events', {
                                title: item.league_title
                            })}
                        >
                            <Text>{item.league_title}</Text>
                        </TouchableOpacity>
                    )
                }}
                contentContainerStyle={{flexGrow:1, justifyContent: 'space-around'}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})