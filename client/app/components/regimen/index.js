import React from "react";
import { Text, Card, Button } from "@rneui/themed";
import New from './new';
import Daily from './daily';
import OnDemand from "./onDemand";
import styles from "../../theme/styles";
import { View } from 'react-native';




export default function Regimen({user, regimen}) {

    return (
        <>
            {
                regimen==='new'?
                (
                    <Card >
                        <New user={user}/>
                    </Card> ):
                ( <Card>
                    { regimen ==='daily'?
                        (<Daily user={user}/>):
                        (<OnDemand/>)
                    }
                    <Text customType='dark' style={{textAlign: 'center'}}> - Or - </Text>
                    <Button customType='new' style={{alignSelf:'center'}}>Switch to {regimen==='daily'? 'On Demand': 'Daily Method'}</Button>
                    <Text customType='italics' style={{textAlign: 'center'}}> *Learn more about how switching methods may impact you</Text>
                </Card>)
            }
        </>
    )
};