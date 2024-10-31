import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HeaderTemplate from "../components/templates/HeaderTemplate";
import { useRoute, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { MainStackParamList } from "../types/navigation";
import RedirectToBar from "../components/redirects/RedirectToBar";
import bars from "../data/bars";

export default function Home() {
    const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>()
    const router = useRoute()

    return (
        <HeaderTemplate>
            <RedirectToBar navigation={{ route: router, navigation }} data={bars[3]} >
                <Text>Search Bar</Text>
            </RedirectToBar>
        </HeaderTemplate>
    )
}

const styles = StyleSheet.create({

})