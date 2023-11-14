import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import data from './../../assets/data.json';


export default function DriverScreen () {
    const semi_drivers = data.semi_drivers;
    const street_drivers = data.street_drivers; 

    return (
        <View>
            <View>
                <Text>SEMI PRO Vairuotojai</Text>
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
                <Text>Street Vairuotojai</Text>
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
        </View>
    )
}