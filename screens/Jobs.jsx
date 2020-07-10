import React from 'react';
import { StyleSheet, StatusBar, Text, View, ScrollView, TextInput } from 'react-native';

import Card from './Card/Card.jsx'
import Header from '../screens/Header';


import JobService from '../service/JobService';

export default function Jobs(props) {
    console.log(props)
    let jobService = new JobService();
    let jobs = jobService.getJobs();

    return (
        <View style={{ flex: 1 }}>
            <Header />
            <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
            {/* <AdMobBanner
                bannerSize="fullBanner"
                adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
                servePersonalizedAds // true or false
                onDidFailToReceiveAdWithError={bannerError} /> */}
            <ScrollView>
                {jobs && jobs.map(job => {
                    return <Card job={job} navigation={props.navigation} />
                })}
            </ScrollView>
        </View>
    );
}

function bannerError() {

}