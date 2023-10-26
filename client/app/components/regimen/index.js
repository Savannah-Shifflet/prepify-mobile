import { View } from 'react-native';
import React from "react";
import styles from "../../theme/styles";
import { Input, Button, Text, Card } from "@rneui/themed";
import New from './new';


export default function Regimen({user, regimen}) {

    return (
  
            <Card >
                {
                    regimen==='new'?
                    ( <New/> ):
                    (<Text dark>Other</Text>)
                }
            </Card>

    )
};