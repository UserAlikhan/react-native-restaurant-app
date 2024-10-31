import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { HomeIcon, LocateIcon, User2Icon } from 'lucide-react-native';
import Explore from "../screens/Explore";
import Account from "../screens/Account";

const BottomNavigation = () => {
    const Tab = createBottomTabNavigator();

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
                    tabBarActiveTintColor: "#7a0ab9",
                    tabBarLabel: "Home",
                    tabBarIcon: ({ focused, color, size }) => (
                        <HomeIcon color={color} size={focused ? size : size+5}/>
                    )
                }} 
            />
            <Tab.Screen 
                name="Explore" 
                component={Explore} 
                options={{
                    tabBarActiveTintColor: "#7a0ab9",
                    tabBarLabel: "Explore",
                    tabBarIcon: ({ focused, color, size }) => (
                        <LocateIcon color={color} size={focused ? size : size+5}/>
                    ),
                }} 
            />
            <Tab.Screen 
                name="Account" 
                component={Account} 
                options={{
                    tabBarActiveTintColor: "#7a0ab9",
                    tabBarLabel: "Account",
                    tabBarIcon: ({ focused, color, size }) => (
                        <User2Icon color={color} size={focused ? size : size+5}/>
                    ),
                }} 
            />
        </Tab.Navigator>
    )
}

export default BottomNavigation;