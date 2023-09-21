import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@rneui/themed';
import theme from './theme/index'

export default function Layout() {
    return (
        <ThemeProvider theme={theme}>
            <SafeAreaProvider>
                <Stack/>
            </SafeAreaProvider>
        </ThemeProvider>
    )
}

;