import { Alert } from "react-native";


export default function barAlreadyInFavoritesAlert() {
    return (
        Alert.alert(
            'Bar already in favorites',
            'You cannot add the same bar to your favorites twice.',
            [
                { text: 'OK', onPress: () => { } }
            ]
        )
    )
}