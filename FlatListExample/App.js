import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, View, Image, SectionList, ScrollView } from 'react-native';
import carData from './src/assets/data';
import carDatav2 from './src/assets/dataV2';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.block}>
        <FlatList
          keyExtractor={(item) => item.id} 
          data={carData}
          renderItem={({item}) => {
            return (
              <View style={styles.carItem}>
                <Text>{item.make} {item.model}</Text>
                <Image 
                  source={{uri: item.img}}
                  style={{width: 200, height: 200}}
                />
              </View>
            )
          }}
        />
      </View>
      <View style={styles.block}>
        <SectionList 
          sections={carDatav2}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <View style={styles.carItem}>
              <Text>{item.make} {item.model}</Text>
                <Image 
                  source={{uri: item.img}}
                  style={{width: 200, height: 200}}
                />
            </View>
          )}
          renderSectionHeader={({section: {type}}) => (
            <Text style={styles.header}>{type}</Text>
          )}
        />
      </View>
      <View style={styles.block}>
        <ScrollView>
          {carData.map((item, i) => {
                return (
                  <View style={styles.carItem} key={i}>
                    <Text>{item.make} {item.model}</Text>
                    <Image 
                      source={{uri: item.img}}
                      style={{width: 200, height: 200}}
                    />
                </View>
                )
              })
          }
        </ScrollView>
      </View> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  block: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 1,
    justifyContent: 'center'
  },
  carItem: {
    margin: 1,
    alignItems: 'center', 
    borderWidth: 1,
    backgroundColor: "beige"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
});
