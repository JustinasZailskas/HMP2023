import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


export default function HomeScreen ({navigation}) {
    return (
        <View>
            <Text>Home page</Text>
            <Button 
                title="Lygos"
                onPress={() => navigation.navigate('League')}
            />
            <Button 
                title="Vairuotojai"
                onPress={() => navigation.navigate('Drivers')}
            />
        </View>
    )
}