import {
  StyleSheet,
  Animated,
  SafeAreaView,
  Image,
  Easing,
  Dimensions,
} from "react-native";
import React, { useEffect, useRef } from "react";

const { width, height } = Dimensions.get("window");
const cloudWidth = 60;

export default function ThirdExample() {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: false,
      }), 
      {iterations: 10}
    ).start();
  }, [animatedValue]);

  //   const left1 = this.animatedValue.interpolate({
  //     inputRange: [0, 1],
  //     outputRange: [-cloudWidth, width],
  //   });
  //   const left2 = this.animatedValue.interpolate({
  //     inputRange: [0, 1],
  //     outputRange: [-cloudWidth * 5, width + cloudWidth * 5],
  //   });

  return (
    <SafeAreaView>
      <Animated.Image
        style={[
          styles.cloud1,
          {
            
            transform: [
              {
                translateX: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-cloudWidth, width],
                  })
              },
            ],
          },
        ]}
        source={require("../../assets/cloudy.png")}
      />
      <Animated.Image
        style={[
          styles.cloud2,
          {
            opacity: animatedValue,
            transform: [
              {
                translateX: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-cloudWidth * 5, width + cloudWidth * 5],
                  extrapolate: "clamp",
                }),
              },
            ],
          },
        ]}
        source={require("../../assets/sun.png")}
      />
      <Image
        style={[styles.plane]}
        source={require("../../assets/airplane.png")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cloud1: {
    position: "absolute",
    width: cloudWidth,
    height: cloudWidth,
    top: height / 3 - cloudWidth / 2,
  },
  cloud2: {
    width: cloudWidth * 1.5,
    height: cloudWidth * 1.5,
    top: height / 2,
  },
  plane: {
    position: "absolute",
    width: cloudWidth * 1.3,
    height: cloudWidth * 1.3,
    top: height / 2 - cloudWidth,
    left: width / 2 - cloudWidth / 2,
  },
});
