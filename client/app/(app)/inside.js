import { View, Text } from 'react-native';
import React from "react";
import styles from "../theme/styles";
import { useFirebaseAuth } from '../utils/authContext';


export default function Inside() {
    const user = useFirebaseAuth();

    return (
            <View style={styles.container }>
                {console.log("inside user:" + user)}
                <Text>{user.email} Inside Stack</Text>
            </View>
    )
};
