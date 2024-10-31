import type { RouteProp } from "@react-navigation/native"
import { Bar } from "./types"

export type MainStackParamList = {
    BottomNavigation: undefined,
    Home: undefined,
    Account: undefined,
    Bar: Bar,
    Login: undefined,
    SignUp: undefined,
    SpecificBar: Bar,
}

export type HomeScreenRouteProp = RouteProp<MainStackParamList, "Home">
export type BarScreenRouteProp = RouteProp<MainStackParamList, "Bar">