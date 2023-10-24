import { ActivityIndicator, View } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import { Input, Button, Text } from "@rneui/themed";
import { useRouter } from "expo-router";

import { appSignIn } from "../utils/store";
import styles from "../theme/styles";
import KeyboardWrapper from "../components/KeyboardWrapper";
import SvgLogo from "../assets/logoJS";

export default function Home() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const logIn = async()=>{
        setLoading(true);
        try {
            const response = await appSignIn(email, password);
            console.log(response);
            if(response?.user){
                setLoading(false);
                router.replace("/inside")
            }
        } catch (error) {
            // const passwordInput = document.getElementById('passwordInput')
            // passwordInput.errorMessage="Credentials are not valid."
            // passwordInput.errorStyle={ color: "red" }
            console.log(error);
        }
    }

        return (
        <KeyboardWrapper>
            <View style={styles.container }>
                <View style={styles.col[3]}>
                    <View style={{ aspectRatio: 100/36}}>
                        <SvgLogo/>
                    </View>
                    <Text>Login to your account:</Text>
                    <Input
                        value={email}
                        autoCapitalize="none"
                        onChangeText={(text)=>setEmail(text)}
                        placeholder="Email"></Input>
                    <Input
                        id = "passwordInput"
                        placeholder="Password"
                        secureTextEntry={true}
                        autoCapitalize="none"
                        onChangeText={(text)=>setPassword(text)}
                        value={password}
                    ></Input>
                    { loading ?
                        <ActivityIndicator size="large" /> :
                        <Button size="md"
                        title={'Sign in'}
                        icon={{
                            name: 'arrow-right',
                            type: 'font-awesome',
                            size: 15,
                            color: theme.colors.secondary,
                        }}
                        iconRight
                        onPress={logIn}/>
                    }

                    <Text>Don't have an account? <Link href={"(auth)/signup"}>Sign up</Link> </Text>
                </View>
            </View>
        </KeyboardWrapper>
        );
}
