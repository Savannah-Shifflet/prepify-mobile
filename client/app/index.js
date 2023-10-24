import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRouter, useSegments } from "expo-router";
import { useRootNavigationState } from "expo-router";
import { useFirebaseAuth } from './utils/authContext';

export default function Index() {
    const segments = useSegments();
    const router = useRouter();

    const navigationState = useRootNavigationState();
    const user = useFirebaseAuth();

    useEffect(() => {
        if (!navigationState?.key ) return;

        const inAuthGroup = segments[0] === "(auth)";
        if (!user & !inAuthGroup) {
          // Redirect to the login page.
          router.replace("(auth)/login");
        } else if(user) {
          router.replace("/inside");
        }
      }, [segments, navigationState?.key]);

      return <View>{!navigationState?.key ? <ActivityIndicator/> : <></>}</View>;
}