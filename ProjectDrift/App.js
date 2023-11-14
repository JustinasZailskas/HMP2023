import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import EventsScreen from './src/screens/EventsScreen';
import LeagueScreen from './src/screens/LeagueScreen';
import DriverScreen from './src/screens/DriverScreen';
import DriverInformation from './src/screens/DriverInformation';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen 
          name="Events"
          component={EventsScreen}
        />
        <Stack.Screen 
          name="League"
          component={LeagueScreen}
        />
        <Stack.Screen 
          name="Drivers"
          component={DriverScreen}
        />
        <Stack.Screen 
          name="DriverInfo"
          component={DriverInformation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
