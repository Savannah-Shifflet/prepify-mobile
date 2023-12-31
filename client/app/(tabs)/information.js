import { View } from 'react-native';
import React from "react";
import styles from "../theme/styles";
import { useFirebaseAuth } from '../utils/authContext';
import { Input, Button, Text } from "@rneui/themed";


export default function Information() {
    const user = useFirebaseAuth();

    return (
            <View style={{...styles.container, backgroundColor: theme.colors.background}}>
                <Text> Information</Text>
            </View>
    )
};
