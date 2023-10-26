import { View } from 'react-native';
import React from "react";
import styles from "../../theme/styles";
import { Input, Button, Text, Icon, ListItem } from "@rneui/themed";
import { Link } from "expo-router";


export default function New({user}) {

    return (
        <>
            <Text h4 color="dark" >Step 1: Choose your regimen</Text>
            <Text style={{fontSize: 15}} color="dark" >Do you take PrEP daily or as needed?</Text>
            {/* TODO: on press for both */}
            <Button customType='pink'>Daily</Button>
            <Button customType='pink'>On Demand</Button>
            <Link href='/(tabs)/information'
                style={{display: "flex"}}>
                <Text h4 color='dark'>More information</Text>
                <Icon name='arrow-right'
                    type='font-awesome'
                    color={theme.colors.background}
                    size={20}
                    style={{marginLeft: 5}}/>
            </Link>
        </>
    )
};