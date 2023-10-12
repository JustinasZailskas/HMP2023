import React, { useEffect, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import { Button } from "@react-native-material/core";
import ButtonComponent from './src/ButtonComponent';

function App() {
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [initialElements, setInitialElements] = useState([]);
  const [retrieve, setRetrieve] = useState(true);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const retrieveData = async () => {
    try {
      const valueString = await AsyncStorage.getItem('@storage_Key');
      const value = JSON.parse(valueString);
      value === null ? setInitialElements([]) : setInitialElements(value);
    } catch(error) {
      console.log(error);
    }
  }

  const validateForm = () => {
    let errors = {};
    
    if (!firstname) {
      errors.firstname = "Firstname is required";
    }
    if (!lastname) {
      errors.lastname = "Lastname is required";
    }
    setErrors(errors);
    firstname === undefined || lastname === undefined ? setIsFormValid(true) 
      :setIsFormValid(Object.keys(errors).length === 0);
  }

  useEffect(() => {
    validateForm()
    if (retrieve)
      retrieveData();
      setRetrieve(false);
  }, [firstname, lastname, retrieve])

  
  const saveData = async (firstname, lastname) => {
    try {
      if(firstname !== '' && lastname !== '') {
        console.log('firstname', firstname);
        const newObj = {
          id: uuid.v4(),
          firstname: firstname,
          lastname: lastname
        }
        const jsonValue = JSON.stringify([...initialElements, newObj]);
        await AsyncStorage.setItem('@storage_Key', jsonValue);
        setInitialElements(JSON.parse(jsonValue));
        setFirstname(undefined);
        setLastname(undefined);
      }  
    } catch (e) {
      console.log('Can not save value');
    }
  }

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key');
      console.log('Get data: ', jsonValue);
      jsonValue === null ? setInitialElements([]) : setInitialElements(JSON.parse(jsonValue));
    } catch (e) {
      console.log("Can't read data");
    }
  }
  
  const clearAll = async () => {
    try {
      await AsyncStorage.clear();
      const emptyArray = [];
      setInitialElements(emptyArray);
    } catch (e) {

    }
  }

  console.log(initialElements);

  return (
    <SafeAreaView>
      <TextInput
        style={{ height: 40 }}
        placeholder="Insert firstname here"
        defaultValue={firstname}
        onChangeText={(value) => setFirstname(value)}
      />
      <TextInput 
        style={{ height: 40 }}
        placeholder="Insert lastname here"
        defaultValue={lastname}
        onChangeText={(value) => setLastname(value)}
      />
      <ButtonComponent 
        title="Save data" 
        event={() => saveData(firstname, lastname)}
      />
      
      { isFormValid === true ? 

          <Text></Text>: Object.values(errors).map((error, index) => (
            <Text key={index} style={styles.error}>
                {error}
            </Text>  
          ))
          }
      <ButtonComponent title="Read data" event={() => getData()}/>
      {/* <Button
        title="Read data"
        style={{ alignSelf: 'center'}}
        onPress={() => getData()}
      /> */}
      <Button 
        title="Clear async storage"
        style={{ alignSelf: 'center', marginTop: 10}}
        onPress={() => clearAll()}
      />
      {/* <ButtonComponent title="Test button component" event={() => saveData(firstname, lastname)}/> */}
      <FlatList
        data={initialElements}
        renderItem={({item}) => {
          return (
            <View>
              <Text>{item.firstname} {item.lastname}</Text>
            </View>
          )
        }
        }
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontSize: 16,
    marginBottom: 8,
  }
})

export default App;