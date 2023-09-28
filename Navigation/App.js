import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/StackScreen/HomeScreen';
import SecondStackScreen from './src/screens/StackScreen/SecondStackPage';
import CarScreen from './src/screens/StackScreen/CarScreen';
import FirstTabScreen from './src/screens/TabScreens/FirstTabScreen';
import SecondTabScreen from './src/screens/TabScreens/SecondTabScreen';

const Stack = createNativeStackNavigator(); //sukuria funckija stack, kuri turi du parametrus: screen ir navigator
const Tab = createBottomTabNavigator();

function TabHome() {
  return (
    <Tab.Navigator initialRouteName='firstTabPage' screenOptions={{ headerShown: false }}>
      <Tab.Screen name="firstTabPage" component={FirstTabScreen}/>
      <Tab.Screen name="secondTabPage" component={SecondTabScreen}/>
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            headerTitle: "Home"
          }}
        />
        <Stack.Screen 
          name="SecondStackPage" 
          component={SecondStackScreen}
          options={{
            headerTitle: "2 Page"
          }}
        />
        <Stack.Screen 
          name="TabStackScreen" 
          component={TabHome}
          options={{
            headerTitle: "Tabs",
          }}
        />
        <Stack.Screen 
          name="CarScreen"
          component={CarScreen}
          options={{
            headerTitle: "Info"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

