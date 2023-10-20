import { View, ActivityIndicator } from 'react-native';
import React, { useState } from "react";
import KeyboardWrapper from "./components/KeyboardWrapper";
import { Input, Button, Text } from "@rneui/themed";
import styles from "./theme/styles";
import { firebase_auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = firebase_auth

    const signUp = async()=>{
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
        } catch (error) {
            console.log(error);
        }finally {
            setLoading(false)
        }
    }

    return (
        <KeyboardWrapper>
            <View style={styles.container }>
            <View style={styles.col[3]}>
                <Input
                    placeholder="Email"
                    label="Email"
                    value={email}
                    autoCapitalize="none"
                    onChangeText={(text)=>setEmail(text)}></Input>
                <Input
                    id = "passwordInput"
                    placeholder="Password"
                    secureTextEntry={true}
                    label="Password"
                    autoCapitalize="none"
                    onChangeText={(text)=>setPassword(text)}
                    value={password}
                ></Input>
                <Input
                    placeholder="Password"
                    secureTextEntry={true}
                    label="Confirm Password"
                ></Input>
                { loading ?
                    <ActivityIndicator size="large" /> :
                    <Button size="md"
                    title={'Sign up'}
                    icon={{
                        name: 'arrow-right',
                        type: 'font-awesome',
                        size: 15,
                        color: theme.colors.secondary,
                    }}
                    iconRight
                    onPress={signUp}/>
                }
                </View>
            </View>
        </KeyboardWrapper>
    )
};

export default Signup;