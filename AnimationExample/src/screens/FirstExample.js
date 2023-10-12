import {
  StyleSheet,
  Text,
  View,
  Animated,
  Button,
  SafeAreaView,
} from "react-native";
import React, { useRef, useEffect, useState } from "react";


export default function FirstExample() {
  const moveBoxAnim = useRef(new Animated.Value(20)).current; //deklaravimas
  const [isBoxDown, setIsBoxDown] = useState(false);

  const moveBox = () => {
    if (isBoxDown === false) {
      Animated.timing(moveBoxAnim, {
        toValue: 200,
        duration: 500,
        useNativeDriver: false,
      }).start();
      setIsBoxDown(true);
    } else {
      Animated.timing(moveBoxAnim, {
        toValue: 20,
        duration: 500,
        useNativeDriver: false,
      }).start();
      setIsBoxDown(false);
    }
    
  };
  
  return (
    <SafeAreaView>
      <Button title="Animate box" onPress={moveBox} />
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "red",
          marginTop: moveBoxAnim,
        }}
      />
    </SafeAreaView>
  );
}


