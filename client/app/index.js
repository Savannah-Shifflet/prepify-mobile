import { View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Input, Button, Text } from "@rneui/themed";

import styles from "./theme/styles";
import KeyboardWrapper from "./components/KeyboardWrapper";
import SvgLogo from "./assets/logoJS";

export default function Home() {
        return (
        <KeyboardWrapper>
            <View style={styles.container }>
                <View style={styles.col[3]}>
                    <View style={{ aspectRatio: 100/36}}>
                        <SvgLogo/>
                    </View>
                    <Text>Login to your account:</Text>
                    <Input placeholder="Email"></Input>
                    <Input
                    placeholder="Password"
                    secureTextEntry={true}
                    errorStyle={{ color: "red" }}
                    errorMessage="Credentials are not valid."
                    ></Input>
                    <Button size="md"
                        title={'Sign in'}
                        icon={{
                            name: 'arrow-right',
                            type: 'font-awesome',
                            size: 15,
                            color: theme.colors.secondary,
                        }}
                        iconRight/>

                    <Text>Don't have an account? <Link href={"/signup"}>Sign up</Link> </Text>
                </View>
            </View>
        </KeyboardWrapper>
        );
}
