import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
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
                    <Text>{job.jobTitle}</Text>
                    <Text style={styles.fontSmall}>Posted On: {job.jobDetail.postedOn}</Text>
                </View>
            </View>

            <View style={styles.cardBody}>
                <Text>{job.jobDetail.detailDescription}</Text>

                {job.dates && <Dates dates={job.dates} />}
                {job.vacancies && <Vacencies vacencies={job.vacencies} />}
                {job.eligibilities && <Eligibility eligibilities={job.eligibilities} />}
                {job.links && <Links eligibilities={job.links} />}
            </View>

            <View style={styles.cardTrailer}>
                <AntDesign name="like2" size={24} color="blue" />
                <TouchableOpacity onPress={() => props.navigation.navigate('Root', { screen: 'JobDetail', params: job })}>
                    <MaterialIcons name="more-horiz" size={24} color="black" />
                </TouchableOpacity>
            </View>
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
        shadowColor: 'grey',
        shadowRadius: 1,
        flexDirection: "row",
        backgroundColor: 'lightgrey',
        borderRadius: 3
    },
    cardBody: {
        minHeight: 100,
        padding: 2,

    },
    cardTrailer: {
        flexDirection: "row",
    },
    fontSmall: {
        fontSize: 10
    },
    datesName: {
        textAlign: "right"
    },
    datesValue: {
        textAlign: "left"

    }
})