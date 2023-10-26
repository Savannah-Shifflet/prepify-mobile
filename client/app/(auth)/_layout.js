import { Stack } from 'expo-router';
export default function AuthLayout(){
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name='signup'
                options={{
                headerShown: true,
                headerTransparent: true,
                headerTitle: '',
                headerBackVisible: true,
                headerBackTitle: 'Back',
                headerTintColor: theme.colors.primary,
            }}></Stack.Screen>
        </Stack>
        );
}
