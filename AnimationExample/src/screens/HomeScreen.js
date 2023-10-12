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
      <SafeAreaView>
        <Button 
            title="First example"  
            onPress={() => navigation.navigate('FirstExample')}
        />
        <Button 
            title="Second example"  
            onPress={() => navigation.navigate('SecondExample')}
        />
        <Button 
            title="Third example"  
            onPress={() => navigation.navigate('ThirdExample')}
        />
      </SafeAreaView>
    );
  }