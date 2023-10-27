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
// import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';

// const httpLink = createHttpLink({
//     uri: '/graphql',
//   });

//   const authLink = setContext((_, { headers }) => {
//     const token = localStorage.getItem('id_token');
//     return {
//       headers: {
//         ...headers,
//         authorization: token ? `Bearer ${token}` : '',
//       },
//     };
//   });
  
//   const client = new ApolloClient({
//     link: authLink.concat(httpLink),
//     cache: new InMemoryCache(),
//   });

export default function Layout() {
    let [fontsLoaded] = useFonts({
            JosefinSans_400Regular,
            ConcertOne_400Regular
        });
        if (!fontsLoaded) {
            return null;
        }else {
            return (
                // <ApolloProvider client={client}>
                    <ThemeProvider theme={theme}>
                        <FirebaseAuthProvider>
                            <SafeAreaProvider>
                                <Stack screenOptions={{ headerShown: false }}  />
                            </SafeAreaProvider>
                        </FirebaseAuthProvider>
                    </ThemeProvider>
                // </ApolloProvider>
            )
        }
    };