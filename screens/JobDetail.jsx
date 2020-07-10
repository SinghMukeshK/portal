import React, { Children } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const CardPlain = (props) => {
    return (
        <View style={{ backgroundColor: "white", marginTop: 5, paddingLeft: 10, paddingRight: 10 }}>
            <View style={{ backgroundColor: "gray", height: 25, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontWeight: "600", alignContent: "center" }}>{props.title}</Text>
            </View>
            <View>
                {props.children}
            </View>
        </View>
    )
}
export default function Profile(props) {
    // alert(JSON.stringify(props.route.params))
    const job = props.route.params
    return (
        <ScrollView>
            <View style={{ flex: 1, paddingLeft: 10, paddingRight: 10, backgroundColor: "" }}>
                <CardPlain title="Job Details">
                    <Text style={{ fontWeight: "200" }}>Job Title: </Text>
                    <Text style={{ fontWeight: "500" }}>{job.jobTitle}</Text>
                    <Text style={{ fontWeight: "200" }}>Job Description: </Text>
                    <Text style={{ fontWeight: "500" }}>{job.jobDetail.detailDescription}</Text>
                </CardPlain>
                <CardPlain title="Important Dates">
                    {job.dates && job.dates.map(date => {
                        return (
                            <View style={{
                                flexDirection: "row",
                                justifyContent: "space-between"
                            }}>
                                <View style={{ justifyContent: "flex-start" }}>
                                    <Text>{date.name}</Text>
                                </View>
                                <View style={{ justifyContent: "flex-end" }}>
                                    <Text>{date.value}</Text>
                                </View>
                            </View>)
                    })}
                </CardPlain>
                <CardPlain title="Vacencies">
                    {job.vacancies && job.vacancies.map(date => {
                        return (
                            <View style={{
                                flexDirection: "row",
                                justifyContent: "space-between"
                            }}>
                                <Text>{date.name}</Text>
                                <Text>{date.value}</Text>
                            </View>)
                    })}
                </CardPlain>
                <CardPlain title="Eligibility Criteria">
                    {job.eligibilities && job.eligibilities.map(date => {
                        return (
                            <View style={{
                            }}>
                                <Text style={{ textDecorationLine: "underline" }}>{date.name}</Text>
                                <Text>{date.value}</Text>
                            </View>)
                    })}

                </CardPlain>
                <CardPlain title="Exam Details">
                    {job.examDetails && job.examDetails.map(date => {
                        return (
                            <View style={{
                                flexDirection: "row",
                                justifyContent: "space-between"
                            }}>
                                <Text>{date.name}</Text>
                                <Text>{date.value}</Text>
                            </View>)
                    })}
                </CardPlain>
                <CardPlain title="Important Links">
                    {job.links && job.links.map(date => {
                        return (
                            <View style={{
                                flexDirection: "row",
                                justifyContent: "space-between"
                            }}>
                                <Text>{date.name}</Text>
                                <Text>{date.value}</Text>
                            </View>)
                    })}
                </CardPlain>
            </View>
        </ScrollView>
    );
}