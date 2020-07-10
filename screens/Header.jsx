import React from 'react';
import { StyleSheet, StatusBar, Text, View } from 'react-native';

import { Entypo } from '@expo/vector-icons';

const Header = () => {
    return (
        <View style={{ flexDirection: "row", backgroundColor: "grey", height: 50 }}>
            <View style={{ marginTop: 20, flexDirection: "row" }}>
                <Entypo name="menu" size={24} color="black" />
                <Text style={{ paddingTop: 2 }}>This is header</Text>
            </View >
            <View style={{ felx: 1, marginTop: 20, marginLeft: 10, alignContent: "flex-end", alignItems: "stretch", flexDirection: "row" }}>
                <Text style={{ paddingTop: 2 }}>This is header</Text>
                <Text style={{ paddingTop: 2 }}>This is header asa s</Text>
                <Entypo style={{ marginLeft: 2 }} name="menu" size={24} color="black" />
            </View >
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 10,
        paddingTop: 20
    }
})


export default Header;