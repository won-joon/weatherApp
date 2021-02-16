import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const WeatherOptions = {
    Clouds: {
        iconName: "ios-cloud",
        gradient: ["#4DA0B0","#D39D38"]
    },
    Snow: {
        iconName: "ios-snow",
        gradient: ["#4DA0B0","#D39D38"]
    },
    Clear: {
        iconName: "ios-sunny",
        gradient: ["#4DA0B0","#D39D38"]
    }
};

export default function Weather({temp, condition}){
    return (
        <LinearGradient
        colors={WeatherOptions[condition].gradient}
        style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfcontainer}>
                <Ionicons name={WeatherOptions[condition].iconName} size={100} color="white" />
                <Text style={styles.textTemp}>{temp}°C</Text>
                <Text>{condition}</Text>
            </View>
            <View style={styles.halfcontainer}>
                <Text>TITLE</Text>
                <Text>SUBTITLE</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Ash",
        "Squall",
        "Tornado",
        "Clear",
        "Clouds"
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textTemp:{
        fontSize: 42,
        color: 'white',
    },
    halfcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})