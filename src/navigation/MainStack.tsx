import { createNativeStackNavigator } from "@react-navigation/native-stack"
import BottomNavigation from "./BottomNavigation"
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { MainStackParamList } from "../types/navigation";
import Bar from "../screens/Bar";
import SignUp from "../screens/SignUp";
import Login from "../screens/Login";

const Stack = createNativeStackNavigator<MainStackParamList>()

const MainStack = () => {
    return (
        <GestureHandlerRootView>
            <BottomSheetModalProvider>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen name="BottomNavigation" component={BottomNavigation} options={{
                        headerShown: false,
                    }}/>
                    <Stack.Screen name="Bar" component={Bar} options={{
                        headerShown: false,
                    }}/>
                    <Stack.Screen name="SignUp" component={SignUp} options={{
                        headerShown: false
                    }}/>
                    <Stack.Screen name="Login" component={Login} options={{
                        headerShown: false
                    }}/>
                </Stack.Navigator>
            </BottomSheetModalProvider>
        </GestureHandlerRootView>
    )
}

export default MainStack