import { View, Text } from 'react-native';
import React, { useState } from "react";
import styles from "../theme/styles";
import useAuth from '../utils/useAuth'



export default function Inside() {


    return (
            <View style={styles.container }>

                <Text>Inside Stack</Text>
            </View>
    )
};
