import { View, ActivityIndicator } from 'react-native';
import React, { useState } from "react";
import KeyboardWrapper from "../components/KeyboardWrapper";
import { Input, Button, Text } from "@rneui/themed";
import styles from "../theme/styles";
import { useRouter } from "expo-router";
import { appSignUp } from "../utils/authUtils";
import SvgLogo from "../assets/logoJS"

const Signup = () => {
    const [input, setInput] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [submitError, setSubmitError] = useState(false);
    const router = useRouter();

    const onInputChange = (name, value)=>{
        setInput((prev) => ({...prev, [name]: value}));
        validateInput(name, value)
    };

    const validateInput = (name, value)=>{
         setError(prev => {
            const stateObj = {...prev, [name]:''};
            const emailVal = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
            const passVal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
            switch(name){
                case "email":
                    if(!value){
                        stateObj[name]= "Please enter an email"
                    }else if(!emailVal.exec(value)){
                        stateObj[name]= "Please enter a valid email address"
                    }
                    break;
                case "password":
                    if(!value){
                        stateObj[name]="Please enter a password";
                    }else if(!passVal.exec(value)){
                        stateObj[name]="Please enter a password with \n -8 characters \n -1 uppercase character \n -1 lowercase character \n -one number"
                    }
                    break;
                case "confirmPassword":
                    if(!value){
                        stateObj[name]="Please confirm your password";
                    }else if(input.password && value!==input.password){
                        stateObj[name]="Passwords must match";
                    }
                    break;
                default: break;
            }
            return stateObj;
        })
    }

    const signUp = async()=>{
        setLoading(true);
        if(error.password ==='' && error.email==='' && error.confirmPassword==='' && input.email !=='' && input.password!=='' && input.confirmPassword!== '' && input.password===input.confirmPassword){
            try {
                const response = await appSignUp(input.email, input.password);
                if(response?.user){
                    setLoading(false);
                    router.replace("/home")
                }
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }else{
            setLoading(false);
            setSubmitError(true);
            return;
        }
    }

    return (
        <KeyboardWrapper>
            <View style={styles.container }>
            <View style={styles.col[3]}>
                <View style={{ aspectRatio: 100/36}}>
                    <SvgLogo/>
                </View>
                <Input
                    placeholder="Email"
                    label="Email"
                    value={input.email}
                    autoCapitalize="none"
                    onChangeText={(text) => onInputChange("email", text)}
                    errorMessage={error.email}></Input>
                <Input
                    placeholder="Password"
                    secureTextEntry={true}
                    label="Password"
                    autoCapitalize="none"
                    onChangeText={(text) => onInputChange("password", text)}
                    value={input.password}
                    errorMessage={error.password}
                ></Input>
                <Input
                    placeholder="Password"
                    secureTextEntry={true}
                    label="Confirm Password"
                    onChangeText={(text) => onInputChange("confirmPassword", text)}
                    value={input.confirmPassword}
                    errorMessage={error.confirmPassword}
                ></Input>
                { loading ?
                    <ActivityIndicator size="large" /> :
                    <>
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
                    {submitError ? <Text style={{color: "red", marginTop: 10}}>Please make sure you have submitted valid inputs.</Text> :
                    <></>
                    }
                    </>
                }
                </View>
            </View>
        </KeyboardWrapper>
    )
};

export default Signup;