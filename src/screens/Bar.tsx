import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HeaderWithTopBarTemplate from "../components/templates/HeaderWithTopBarTemplate";
import AnimatedVerticalList from "../components/verticalList/AnimatedVerticalList";
import tabs from "../data/tabs";

export default function Bar() {
    return (
        <HeaderWithTopBarTemplate>
            <AnimatedVerticalList data={tabs} />
        </HeaderWithTopBarTemplate>
    )
}

const styles = StyleSheet.create({
    
})