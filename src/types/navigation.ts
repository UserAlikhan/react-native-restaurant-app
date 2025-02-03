import type { RouteProp } from "@react-navigation/native"
import { BarResponse } from "./apiResponseTypes"

export type MainStackParamList = {
    BottomNavigation: undefined,
    Home: undefined,
    Bar: undefined,
    Login: undefined,
    SpecificBar: undefined,
    Profile: undefined,
    AllBars: undefined,
}

export type HomeScreenRouteProp = RouteProp<MainStackParamList, "Home">
export type BarScreenRouteProp = RouteProp<MainStackParamList, "Bar">