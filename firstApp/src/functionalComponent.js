import React from 'react';
import {Text} from 'react-native';

const StatelessComponent = () => {
    return (
        <Text>
            It is stateless component!
        </Text>
    )
}

function FunctionalComponent () {
    return (
        <View>
            <Text>It is functional component!</Text>
            <StatelessComponent />
        </View>
    )
}   

export default FunctionalComponent;