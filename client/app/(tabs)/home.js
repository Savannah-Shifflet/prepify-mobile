import { View } from 'react-native';
import React from "react";
import styles from "../theme/styles";
import { useFirebaseAuth } from '../utils/authContext';
import { Input, Button, Text } from "@rneui/themed";


export default function Home() {
    const user = useFirebaseAuth();

    return (
            <View style={{...styles.container, backgroundColor: theme.colors.background}}>
                {/* Header with Prepify, menu */}

                {/* Regimen section */}
                    {/* Conditional rendering: have they selected what regimen they use?  */}
                        {/* Regimen selected? - No: */}
                            {/* Two buttons: daily or 2-1-1 regimen if they haven't determined what they are going to do  */}
                            {/* Learn more button below?  */}
                        {/* Regimen selected? - Yes */}
                            {/* Conditional rendering based on 2-1-1 or daily */}
                                {/* 2-1-1 */}
                                    {/* Where in cycle are they? */}
                                {/* Daily:  */}
                                    {/* Button to take daily pill */}
                            {/* Button: do you want to change regimens? */}
                {/*  */}
                <Text>{user.email} Inside Stack</Text>
            </View>
    )
};


// Data to collect for a user:
// Current regimen
// Then have a 2-1-1 table and a daily table
// 2-1-1 table
    // User ID, cycleID: , event: (initial, etc.), timestamp
// Cycle table
    // was cycle completed?
    // Cycle ID, outcome: (in progress, finished, not completed)
// Daily table
    // user id, timestamp
