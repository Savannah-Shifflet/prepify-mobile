import React from "react";
import { Text, Card } from "@rneui/themed";
import New from './new';


export default function Regimen({user, regimen}) {

    return (
        <Card >
            {
                regimen==='new'?
                ( <New/> ):
                ( <>
                    { regimen ==='daily'?
                        (<Text dark>Daily</Text>):
                        (<Text dark>Active on Demand</Text>)
                    }
                </>)
            }
        </Card>
    )
};