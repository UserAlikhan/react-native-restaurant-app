import { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native"
import { Text, View } from "react-native"
import { SignUpResource, SetActive } from "@clerk/types";
import { MainStackParamList } from "@app/types/navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { createUser, logInUserCall } from "@app/apiRequests/userCalls";

type Props = {
    isLoaded: boolean;
    signUp: SignUpResource | undefined;
    setActive: SetActive | undefined;
    isGoogleAccount: boolean;
    password: string;
    navigation: NativeStackNavigationProp<MainStackParamList>;
}

const EmailVerificationComponent = ({ isLoaded, signUp, setActive, isGoogleAccount, password, navigation }: Props) => {

    const [code, setCode] = useState("");

    const onVerifyPress = async () => {
        if (!isLoaded) return;

        try {
            const signUpAttempt = await signUp?.attemptEmailAddressVerification({
                code: code,
            });
            console.log('signUpAttempt ', signUpAttempt)
            if (setActive && signUpAttempt && signUpAttempt.status === "complete") {
                await setActive({ session: signUpAttempt.createdSessionId });
                // create and login user in the database
                await createAndLoginUser(signUpAttempt);
                navigation.navigate("BottomNavigation");
            } else {
                console.error(JSON.stringify(signUpAttempt, null, 2));
            }
        } catch (err) {
            console.error(JSON.stringify(err, null, 2));
        }
    };

    const createAndLoginUser = async (signUpAttempt: SignUpResource) => {
        if (signUpAttempt.createdUserId
            && signUpAttempt.emailAddress
            && signUpAttempt.username
        ) {
            await createUser({
                clerk_id: signUpAttempt.createdUserId,
                email: signUpAttempt.emailAddress,
                username: signUpAttempt.username,
                password: isGoogleAccount ? "GOOGLE_ACCOUNT" : password,
                isGoogleAccount: isGoogleAccount,
            }).then(async (user) => {
                const token = await logInUserCall({ email: user.email, username: user.username, password: isGoogleAccount ? "GOOGLE_ACCOUNT" : password })
                console.log('token ', token)
            })
        }
    }

    return (
        <View
            style={styles.container}
        >
            <Text style={styles.title}>Verify Your Email Address</Text>
            <TextInput
                value={code}
                placeholder="Enter your verification code"
                onChangeText={(value) => setCode(value)}
                style={styles.input}
            />
            <TouchableOpacity
                onPress={() => onVerifyPress()}
                style={styles.button}
            >
                <Text>Verify</Text>
            </TouchableOpacity>
        </View>
    )
}

export default EmailVerificationComponent;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 18,
        color: "#000",
        fontWeight: "bold",
        marginBottom: 20,
    },
    input: {
        width: "80%",
        height: 40,
        borderWidth: 1,
        borderColor: "#000",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginBottom: 20,
    },
    button: {
        width: '80%',
        height: 40,
        borderWidth: 2,
        borderColor: "#000",
        paddingVertical: 8
    }
})