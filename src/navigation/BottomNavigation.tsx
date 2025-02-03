import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { HomeIcon, LocateIcon, User2Icon } from 'lucide-react-native';
import Explore from "../screens/Explore";
import SignUp from "@app/screens/SignUp";
import Profile from "@app/screens/Profile";
import { useAuth } from "@clerk/clerk-expo";
import { Text } from "react-native";
import constants from "@app/constants/constants";

const BottomNavigation = () => {
    const Tab = createBottomTabNavigator();

    const { isSignedIn } = useAuth();

    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: constants.BOTTOM_NAVIGATION_HEIGHT,
                    paddingBottom: 0,
                    marginBottom: 0,
                    marginTop: 0,
                    marginHorizontal: 0,
                    marginVertical: 0,
                    backgroundColor: '#fff',
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarActiveTintColor: "red",
                    tabBarLabel: ({ focused }: { focused: boolean }) => {
                        return (
                            <Text
                                style={{
                                    fontSize: 12, color: focused ? 'red' : 'grey'
                                }}>
                                Home
                            </Text>
                        )
                    },
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
                    tabBarLabel: ({ focused }: { focused: boolean }) => {
                        return (
                            <Text style={{ fontSize: 12, color: focused ? 'red' : 'grey' }}>Explore</Text>
                        )
                    },
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
                    tabBarLabel: ({ focused }: { focused: boolean }) => {
                        return <Text style={{
                            fontSize: 12,
                            color: focused ? 'red' : 'grey'
                        }}>
                            {isSignedIn ? "Profile" : "SignUp"}
                        </Text>
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