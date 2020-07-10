

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Dates({ dates }) {
    return (
        <View style={{ flex: 1 }}>
            {
                dates.map(date => {
                    return (
                        <View syle={{ flex: 1, flexDirection: "row" }}>
                            {/* <View style={styles.dateRight}>
                                <Text>{date.name}</Text>
                            </View>
                            <View style={styles.dateLeft}>
                                <Text>{date.value}</Text>
                            </View> */}
                        </View>)
                })}
        </View>
    );
}

const styles = StyleSheet.create({
    dateLeft: {

    },
    dateRight: {

    }
})