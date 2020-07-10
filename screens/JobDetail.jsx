import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Profile(props) {
    // alert(JSON.stringify(props.route.params))
    const job = props.route.params
    return (
        <View style={{ flex: 1 }}>
            <MaterialIcons name="arrow-back" size={24} color="black" />
            <Text>Home! {JSON.stringify(job)} </Text>
        </View>
    );
}