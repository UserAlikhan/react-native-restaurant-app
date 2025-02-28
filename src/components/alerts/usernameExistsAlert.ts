import { Alert } from "react-native";

type Props = {
    setUserName: (username: string) => void;
}

export default function UsernameExistsAlert({ setUserName }: Props) {
    return (
        Alert.alert(
            "Username Exists",
            "An account with this username already exists. Please sign in instead.",
            [
                { text: "Enter another username", onPress: () => setUserName("") },
                { text: "Cancel", style: "cancel" }
            ]
        )
    )
}