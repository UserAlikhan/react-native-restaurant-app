import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { HomeIcon, LocateIcon, User2Icon } from 'lucide-react-native';
import Explore from "../screens/Explore";
import SignUp from "@app/screens/SignUp";
import Profile from "@app/screens/Profile";
import { useAuth } from "@clerk/clerk-expo";
import { Text } from "react-native";

const BottomNavigation = () => {
    const Tab = createBottomTabNavigator();

    const { isSignedIn } = useAuth();

    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarActiveTintColor: "red",
                    tabBarLabel: "Home",
                    tabBarIcon: ({ focused, color, size }: { focused: boolean, color: string, size: number }) => (
                        <HomeIcon color={color} size={focused ? size : size + 5} />
                    )
                }}
            />
            <Tab.Screen
                name="Explore"
                component={Explore}
                options={{
                    tabBarActiveTintColor: "red",
                    tabBarLabel: "Explore",
                    tabBarIcon: ({ focused, color, size }: { focused: boolean, color: string, size: number }) => (
                        <LocateIcon color={color} size={focused ? size : size + 5} />
                    ),
                }}
            />
            <Tab.Screen
                name={isSignedIn ? "Profile" : "SignUp"}
                component={isSignedIn ? Profile : SignUp}
                options={{
                    tabBarActiveTintColor: "red",
                    tabBarLabel: () => {
                        return <Text>{isSignedIn ? "Profile" : "SignUp"}</Text>
                    },
                    tabBarIcon: ({ focused, color, size }: { focused: boolean, color: string, size: number }) => (
                        <User2Icon color={color} size={focused ? size : size + 5} />
                    ),
                }}
                listeners={({ navigation }: { navigation: any }) => ({
                    tabPress: (e: any) => {
                        e.preventDefault();
                        navigation.navigate(isSignedIn ? "Profile" : "SignUp");
                    }
                })}
            />
        </Tab.Navigator>
    )
}

export default BottomNavigation;