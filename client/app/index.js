import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import useAuth from './utils/useAuth'
import { useRouter } from "expo-router";
import { useRootNavigationState } from "expo-router";

export default function Index() {
    const { user } = useAuth();
    const router = useRouter();

    const navigationState = useRootNavigationState();

    useEffect(() => {
        if (!navigationState?.key) return;
        if (!user) {
          // Redirect to the login page.
          router.replace("(auth)/login");
        } else {
          router.replace("/inside");
        }
      }, [navigationState?.key, user]);

      return <View>{!navigationState?.key ? <Text>LOADING...</Text> : <></>}</View>;
}