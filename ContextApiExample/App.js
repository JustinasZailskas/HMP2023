import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import EventsScreen from './src/screens/EventsScreen';
import DriversScreen from './src/screens/DriversScreen';
import DriverInformation from './src/screens/DriverInformation';
import LeagueScreen from './src/screens/LeagueScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen 
          name="Leagues"
          component={LeagueScreen}
        />
        <Stack.Screen 
          name="Events"
          component={EventsScreen}
        />
        <Stack.Screen 
          name="Drivers"
          component={DriversScreen}
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
