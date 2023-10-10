import { View } from 'react-native';
import KeyboardWrapper from "./components/KeyboardWrapper";
import { Input, Button, Text } from "@rneui/themed";
import styles from "./theme/styles";

const Signup = () => {
    return (
        <KeyboardWrapper>
            <View style={styles.container }>
            <View style={styles.col[3]}>
                <Input placeholder="Email" label="Email"></Input>
                <Input
                    placeholder="Password"
                    secureTextEntry={true}
                    label="Password"
                ></Input>
                <Input
                    placeholder="Password"
                    secureTextEntry={true}
                    label="Confirm Password"
                ></Input>
                <Button size="md"
                    title={'Sign up'}
                    icon={{
                        name: 'arrow-right',
                        type: 'font-awesome',
                        size: 15,
                        color: theme.colors.secondary,
                    }}
                    iconRight/>
                </View>
            </View>
        </KeyboardWrapper>
    )
};

export default Signup;