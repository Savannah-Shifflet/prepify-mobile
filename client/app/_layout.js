import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@rneui/themed';
import theme from './theme/index';
import {
    useFonts,
    JosefinSans_400Regular
} from "@expo-google-fonts/josefin-sans";
import {
    ConcertOne_400Regular
} from "@expo-google-fonts/concert-one";
import { FirebaseAuthProvider } from "./utils/authContext";
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setContext } from '@apollo/client/link/context';
import {firebase_auth} from "../firebaseConfig";
// import { polyfill as polyfillEncoding } from "react-native-polyfill-globals/src/encoding";
// import { polyfill as polyfillReadableStream } from "react-native-polyfill-globals/src/readable-stream";
// import { polyfill as polyfillFetch } from "react-native-polyfill-globals/src/fetch";

// polyfillReadableStream();
// polyfillEncoding();
// polyfillFetch();

// const auth = firebase_auth;

// const httpLink = new HttpLink({ uri: "http://localhost:3001/graphql",
//     fetchOptions: {
//         reactNative: { textStreaming: true },
//     } 
// });

// const authLink = setContext(async(_, { headers }) => {
//     const token = async() => await auth.currentUser?.getIdToken()
//     console.log("token in layout: " + token)
//     return {
//         headers: {
//         ...headers,
//         authorization: token ? `Bearer ${token}` : '',
//         },
//     };
// });

// const link = authLink.concat(httpLink)

// const client = new ApolloClient({
//     uri: "localhost:3001/graphql",
//     cache: new InMemoryCache(),
// });

export default function Layout() {
    let [fontsLoaded] = useFonts({
            JosefinSans_400Regular,
            ConcertOne_400Regular
        });
        if (!fontsLoaded) {
            return null;
        }else {
            return (
                <ThemeProvider theme={theme}>
                    <FirebaseAuthProvider>
                        <SafeAreaProvider>
                            <Stack screenOptions={{ headerShown: false }}  />
                        </SafeAreaProvider>
                    </FirebaseAuthProvider>
                </ThemeProvider>
            )
        }
    };