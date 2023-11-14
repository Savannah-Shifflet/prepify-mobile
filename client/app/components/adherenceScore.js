import { View } from 'react-native';
import React from "react";
import styles from "../theme/styles";
import { Input, Button, Text, Card} from "@rneui/themed";
import Loading from '../assets/loading'


export default function AdherenceScore({user}) {
// TODO: add logic for if there is no data show "once you have adherence data etc." vs the actual score
    return (
        <>
        <Card>
            <Card.Title>Adherence Score</Card.Title>
            <Card.Divider></Card.Divider>

            <Text customType='dark' style={{textAlign: 'center'}}>Start tracking your medication to see how you're doing!</Text>
            <View style={{ aspectRatio: 1, width: '20%', alignSelf: 'center'}}>
                <Loading />
            </View>
        </Card>
        </>
    )
};