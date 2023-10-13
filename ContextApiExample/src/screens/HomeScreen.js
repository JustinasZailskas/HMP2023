import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
} from "react-native";
import React from "react";

export default function HomeScreen({ navigation }) {
    
    return (
      <SafeAreaView style={styles.container}>
        <Button 
            title="Leagues"  
            onPress={() => navigation.navigate('Leagues')}
        />
        <Button 
            title="Drivers"  
            onPress={() => navigation.navigate('Drivers')}
        />
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  })