

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Dates({ dates }) {
    return (
        <View style={{ flex: 1 }}>
            {
                dates.map(date => {
                    return (
                        <View>
                            <View style={styles.date}>
                                <Text style={{ textAlign: "right" }}>{date.name}</Text>
                            </View>)
                         <View style={styles.date}>
                                <Text style={{ textAlign: "left" }}>{date.value}</Text>
                            </View>
                        </View>)
                })}
        </View>
    );
}

const styles = StyleSheet.create({
    date: {
        alignSelf: "flex-end"
    }
})