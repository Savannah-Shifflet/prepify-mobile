import { View, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import { Link } from 'expo-router';
import { Text, Input, Button, Card } from '@rneui/themed';

import styles from './theme/styles';
import KeyboardWrapper from './components/KeyboardWrapper';

const Home = () => {

    return (
        <KeyboardWrapper >
            <View style={styles.container}>
                <View style={styles.col[3]}>
                    <Text h1>Login to your account</Text>
                    <Input placeholder='email'></Input>
                    <Input
                        placeholder='Password'
                        secureTextEntry={true}
                        errorStyle={{ color: 'red' }}
                        errorMessage='Credentials are not valid.'
                        ></Input>
                    <Button size='md'>Sign up</Button>

                    <Text>Don't have an account?</Text>
                    <Link href={'/signup'}>Signup</Link>
                </View>
            </View>
        </KeyboardWrapper>

    )
};

export default Home;