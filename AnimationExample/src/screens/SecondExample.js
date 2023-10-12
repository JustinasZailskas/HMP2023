import {
    StyleSheet,
    Text,
    View,
    Animated,
    Button,
    SafeAreaView,
    TextInput,
  } from "react-native";
  import React, { useRef, useEffect, useState } from "react";
  
  
  export default function SecondExample() {
    const animatedWidth = useRef(new Animated.Value(200)).current; //deklaravimas
    const [isFocus, setIsFocus] = useState(false);

    const animate = (width) => {
        Animated.timing(animatedWidth, {
          toValue: width,
          duration: 1000,
          useNativeDriver: false,
        }).start();      
    };
    
    return (
      <SafeAreaView>
        <Animated.View
            style={{width: animatedWidth }}
        >
            <TextInput 
                style={[styles.input]}
                onBlur={() => animate(200)}
                onFocus={() => animate(325)}
            />
        </Animated.View>
        <Button 
                title='Submit'
                onPress={()=>animate(200)}
            />
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
  
  