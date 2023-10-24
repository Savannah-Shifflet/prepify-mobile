import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRouter, useSegments } from "expo-router";
import { useRootNavigationState } from "expo-router";
import { AuthStore } from "./utils/store";

export default function Index() {
    const segments = useSegments();
    const router = useRouter();

    const navigationState = useRootNavigationState();

    const { initialized, isLoggedIn } = AuthStore.useState();

    useEffect(() => {
        if (!navigationState?.key || !initialized) return;

        const inAuthGroup = segments[0] === "(auth)";

        if (!isLoggedIn & !inAuthGroup) {
          // Redirect to the login page.
          router.replace("(auth)/login");
        } else if(isLoggedIn) {
          router.replace("/inside");
        }
      }, [segments, navigationState?.key, initialized]);

      return <View>{!navigationState?.key ? <Text>LOADING...</Text> : <></>}</View>;
}