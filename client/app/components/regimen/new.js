import React from "react";
import { Button, Text, Icon, Card} from "@rneui/themed";
import { Link } from "expo-router";

// TODO: on press to choose regimen type for user 

export default function New({user}) {

    return (
        <>
            <Card.Title>Step 1: Choose your regimen {user.email}</Card.Title>
            <Card.Divider/>
            <Text style={{fontSize: 15, width: '100%', textAlign: 'center'}} customType="dark" >Do you take PrEP daily or as needed?</Text>
            <Button customType='pink'>Daily</Button>
            <Button customType='pink'>On Demand</Button>
            <Link href='/(tabs)/information'
                style={{display: "flex"}}>
                <Text h4 customType='dark'>More information</Text>
                <Icon name='arrow-right'
                    type='font-awesome'
                    color={theme.colors.background}
                    size={20}
                    style={{marginLeft: 5}}/>
            </Link>
        </>
    )
};