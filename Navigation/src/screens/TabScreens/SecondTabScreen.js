import React from 'react';
import {
    SafeAreaView,
    Text,
    FlatList,
    StyleSheet,
    Button
} from 'react-native';

const carsData = [
    {
        "id": 1,
        "make": "BMW",
        "model": "M3",
        "price": "80000"
    },
    {
        "id": 2,
        "make": "MERSEDES BENZ",
        "model": "C350",
        "price": "50000"
    },

]


function SecondTabScreen({navigation: { navigate }}) {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>It is the second tab screen</Text>
            <FlatList
                data={carsData}
                renderItem={({item}) => (
                    <Button onPress={() => navigate('CarScreen', item)} title={item.make}/>
                )}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
    },
})

export default SecondTabScreen;