import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from './Weather';
import { db } from './Firebase';

const API_KEY = '5d3c0ed4bb41616c6d85da82944866b2';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [datas, setData] = useState(null);
  const [condition, setCondition] = useState(null);

  const getWeather = async(latitude, longitude) => {
    const {data: {main: {temp}, weather}} = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    await db.collection('location').add({latitude, longitude});
    setCondition(weather[0].main);
    setLoading(false);
    setData(temp);
  }
  
  useEffect(() => {
    (async ()=> {
      try{
        let {status} = await Location.requestPermissionsAsync();
        if(status !== 'granted'){
          setErrorMsg('Permission to access location was denied');
        }
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        getWeather(location.coords.latitude, location.coords.longitude);
      }catch(error){
        console.log(error);
      }
    })();
  },[]);

  return (
    isLoading ? <Loading /> : <Weather temp={Math.round(datas)} condition={condition}/>
  );
}

