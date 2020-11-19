import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async ()=> {
      let {status} = await Location.requestPermissionsAsync();
      if(status !== 'granted'){
        setErrorMsg('Permission to access location was denied');
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })
  });

  let text = 'Waiting...';
  if(errorMsg){
    text = errorMsg;
  }else if(location){
    text = JSON.stringify(location.coords);
    console.log(text);
  }

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Loading />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
  },
});

