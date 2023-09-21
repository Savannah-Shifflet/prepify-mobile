import { View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Input, Button, Text } from "@rneui/themed";
import {
    useFonts,
    JosefinSans_400Regular
} from "@expo-google-fonts/josefin-sans";

import styles from "./theme/styles";
import KeyboardWrapper from "./components/KeyboardWrapper";

export default function Home() {
    let [fontsLoaded] = useFonts({
        JosefinSans_400Regular
    });

    if (!fontsLoaded) {
        return null;
    } else {
        return (
        <KeyboardWrapper>
            <View style={styles.container}>
            <View style={styles.col[3]}>
                <Text>Login to your account</Text>
                <Input placeholder="email"></Input>
                <Input
                placeholder="Password"
                secureTextEntry={true}
                errorStyle={{ color: "red" }}
                errorMessage="Credentials are not valid."
                ></Input>
                <Button size="md">Sign up</Button>

                <Text>Don't have an account?</Text>
                <Link href={"/signup"}>Signup</Link>
            </View>
            </View>
        </KeyboardWrapper>
        );
    }
}
