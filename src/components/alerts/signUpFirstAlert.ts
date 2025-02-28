import { Alert } from "react-native"

type Props = {
    handleSignUpPage: () => void;
}

export default function signUpFirstAlert({ handleSignUpPage }: Props) {
    return (
        Alert.alert(
            'Please sign up first.',
            'You need to have an account to add this bar to your favorites.',
            [
                { text: 'Sign Up', onPress: () => handleSignUpPage() },
                { text: 'Cancel', style: 'cancel' }
            ]
        )
    )
}