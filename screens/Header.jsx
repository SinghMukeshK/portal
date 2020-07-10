import React from 'react';
import { StyleSheet, StatusBar, Text, View, TouchableOpacity, TextInput } from 'react-native';

import { Entypo, EvilIcons } from '@expo/vector-icons';

const Header = () => {
    const [value, onChangeText] = React.useState('');
    return (
        <View style={{ marginTop: 20, flexDirection: "row", paddingLeft: 5 }}>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity><Entypo name="menu" size={30} color="black" /></TouchableOpacity>
                <TextInput
                    style={{ height: 30, backgroundColor: 'white', borderBottomColor: "grey", padding: 5, borderBottomWidth: 2, width: 300, flexGrow: 10 }}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                    placeholder="Search jobs by title, year, qualification or more"
                />
                <TouchableOpacity><EvilIcons name="search" size={30} color="black" /></TouchableOpacity>
            </View >
            {/* <View style={{ felx: 1, marginTop: 20, marginLeft: 10, alignContent: "flex-end", alignItems: "stretch", flexDirection: "row" }}>
                <Text style={{ paddingTop: 2 }}>This is header</Text>
                <Text style={{ paddingTop: 2 }}>This is header asa s</Text>
                <Entypo style={{ marginLeft: 2 }} name="menu" size={24} color="black" />
            </View > */}
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