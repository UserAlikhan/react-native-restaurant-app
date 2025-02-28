import { Alert } from "react-native";

type Props = {
    handleLoginPage: () => void;
}

export default function AccountWithThisEmailExistsAlert({ handleLoginPage }: Props) {
    return (
        Alert.alert(
            "User Exists",
            "An account with this email already exists. Please sign in instead.",
            [
                { text: "Sign In", onPress: () => handleLoginPage() },
                { text: "Cancel", style: "cancel" }
            ]
        )
    )
}