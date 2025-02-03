import { createNativeStackNavigator } from "@react-navigation/native-stack"
import BottomNavigation from "./BottomNavigation"
import { MainStackParamList } from "../types/navigation";
import Bar from "../screens/Bar";
import SignUp from "../screens/SignUp";
import Login from "../screens/Login";
import Profile from "@app/screens/Profile";
import AllBars from "@app/screens/AllBars";

const Stack = createNativeStackNavigator<MainStackParamList>()

const MainStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="BottomNavigation" component={BottomNavigation} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="Bar" component={Bar} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="Login" component={Login} options={{
                headerShown: false
            }} />
            <Stack.Screen name="Profile" component={Profile} options={{
                headerShown: false
            }} />
            <Stack.Screen name="AllBars" component={AllBars} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    )
}

export default MainStack