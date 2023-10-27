import { View } from 'react-native';
import React from "react";
import styles from "../theme/styles";
import { useFirebaseAuth } from '../utils/authContext';
import { Button, Text } from "@rneui/themed";
import { appLogOut } from '../utils/authUtils';
import { useRouter } from "expo-router";

export default function Profile() {
    const router = useRouter();
    const { user } = useFirebaseAuth();

    return (
            <View style={{...styles.container, backgroundColor: theme.colors.background}}>
                <Text>{user.email} Profile</Text>
                <Button size="md"
                        title={'Log Out'}
                        icon={{
                            name: 'arrow-right',
                            type: 'font-awesome',
                        }}
                        iconRight
                        onPress={async()=> {
                            await appLogOut()
                            router.replace('/')
                        }}
                        customType='pink'/>
            </View>
    )
};