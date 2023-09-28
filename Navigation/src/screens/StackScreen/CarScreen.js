import React from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';

function CarScreen({route, navigation}) {
    const { make, model, price } = route.params;
    console.log(route.params);
    return (
        <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
           <Text>It is car data screen:</Text>
           <Text>{make}</Text>
       </SafeAreaView>
    )
}

export default CarScreen;