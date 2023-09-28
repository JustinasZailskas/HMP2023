import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import StatelessComponent from './src/statelessComponent';

export default function App() {
  const [username, setUsername] = useState('');
  const [counter, setCounter] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.block}> 
        <Text>Open up App.js to start working on your app!</Text>
        <TextInput 
          placeholder='Type here username'
          defaultValue={username}
          onChangeText={text => setUsername(text)}
        />
        <StatusBar style="auto" />
          {username !== '' 
          ? <Text>Username is {username}</Text>
          : <Text>It is empty</Text>
          }
      </View>
      <View style={styles.block}>
        <StatelessComponent />
      </View>
      <View style={styles.block}>
          <Text>{counter}</Text>
          <Button
            title="Decrease"
            onPress={() => setCounter(counter-1)}
          />
          <Button
            title="Increase"
            onPress={() => setCounter(counter+1)}
          />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  block: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: '2px',
    borderColor: '#008B8B'
  }
});
