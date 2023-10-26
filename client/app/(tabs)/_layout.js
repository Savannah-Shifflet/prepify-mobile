import { Stack, Tabs } from 'expo-router';
import { Icon } from '@rneui/base';
export default function RootLayout(){
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarStyle: {backgroundColor: theme.colors.primary },
            tabBarActiveTintColor: theme.colors.secondary,
            tabBarInactiveTintColor: theme.colors.background
            }}>
            <Tabs.Screen name='home'
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({size, color}) => <Icon name="home-outline" type='ionicon' size={size} color={color}></Icon>
            }}></Tabs.Screen>
            <Tabs.Screen name='information'
                options={{
                    tabBarLabel: 'Information',
                    tabBarIcon: ({size, color}) => <Icon name="information-circle-outline" type='ionicon' size={size} color={color}></Icon>
            }}></Tabs.Screen>
            <Tabs.Screen name='adherenceLog'
                options={{
                    tabBarLabel: 'Adherence',
                    tabBarIcon: ({size, color}) => <Icon name="analytics-outline" type='ionicon' size={size} color={color}></Icon>
            }}></Tabs.Screen>
            <Tabs.Screen name='profile'
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({size, color}) => <Icon name="person-circle-outline" type='ionicon' size={size} color={color}></Icon>
            }}></Tabs.Screen>
        </Tabs>);
}
