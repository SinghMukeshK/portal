import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';
import { Constants } from 'expo';


import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather, AntDesign } from '@expo/vector-icons';

import Vacencies from '../Job/Vacencies';
import Eligibility from '../Job/Eligibility';
import Dates from '../Job/Dates';
import Links from '../Job/Links';

export default function Card(props) {
    const job = props.job;
    return (
        <View style={styles.card}>
            <View style={styles.cardheader}>
                <View >
                    <Feather name="aperture" size={40} color="black" />
                </View>
                <View style={{ paddingLeft: 2, paddingTop: 4 }}>
                    <Text style={{ fontStyle: "normal", fontWeight: "500" }}>{job.jobTitle}</Text>
                    <Text style={styles.fontSmall}>Posted On: {job.jobDetail.postedOn} | Updated On: {job.jobDetail.updatedOn}</Text>
                </View>
                {/* <View style={{ paddingLeft: 20, paddingTop: 0 }}>
                    <TouchableOpacity><Feather name="more-horizontal" size={25} color="black" /></TouchableOpacity>
                </View> */}
            </View>

            <View style={styles.cardBody}>
                <Text>{job.jobDetail.detailDescription}</Text>
                <View style={{ paddingTop: 5, paddingBottom: 5 }}><Image
                    style={styles.logo}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                /></View>
                <Button
                    title="View more"
                    color="grey"
                    onPress={() => props.navigation.navigate('Root', { screen: 'JobDetail', params: job })} />
            </View>

            {/* <View style={styles.cardTrailer}>
                <AntDesign name="like2" size={24} color="blue" />
                <TouchableOpacity onPress={() => props.navigation.navigate('Root', { screen: 'JobDetail', params: job })}>
                    <MaterialIcons name="more-horiz" size={24} color="black" />
                </TouchableOpacity>
                <Button
                    title="View more"
                    color="black"
                    style={{ paddingTop: 1 }}
                    onPress={() => props.navigation.navigate('Root', { screen: 'JobDetail', params: job })} />
            </View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        margin: 8,
        minHeight: 100,
        backgroundColor: "white"
    },
    cardheader: {
        padding: 5,
        shadowColor: 'grey',
        shadowRadius: 1,
        flexDirection: "row",
        borderRadius: 3,
        borderBottomColor: 'grey',
        borderBottomWidth: .5,
    },
    cardBody: {
        minHeight: 100,
        padding: 5,
        marginTop: 2,
        paddingBottom: 10

    },
    cardTrailer: {
        flexDirection: "row",
        borderBottomColor: 'grey',
        borderTopWidth: .5,
        margin: 10,
        padding: 5
    },
    fontSmall: {
        fontSize: 11,
        fontWeight: "200"
    },
    datesName: {
        textAlign: "right"
    },
    datesValue: {
        textAlign: "left"

    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    logo: {
        width: 350,
        height: 200
    },
})