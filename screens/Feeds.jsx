import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../screens/Header';

export default function Feed() {
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <Text>Home!</Text>
        </View>
    );
}