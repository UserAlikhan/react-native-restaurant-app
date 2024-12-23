import { MainStackParamList } from "@app/types/navigation"
import { useAuth, useSignIn } from "@clerk/clerk-expo"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { useNavigation } from '@react-navigation/native'
import { ArrowRightIcon, Lock, User } from "lucide-react-native"
import { useCallback, useState } from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

const Login = () => {

    const { signIn, setActive, isLoaded } = useSignIn()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { isSignedIn } = useAuth();

    const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>()

    if (isSignedIn) {
        navigation.navigate('BottomNavigation');
    }

    const onSignInPress = useCallback(async () => {
        if (!isLoaded) return;

        try {
            const signInAttempt = await signIn.create({
                identifier: email,
                password: password,
            });

            if (signInAttempt.status == 'complete') {
                await setActive({ session: signInAttempt.createdSessionId });
                navigation.navigate('Profile');
            } else {
                console.error(JSON.stringify(signInAttempt, null, 2));
            }
        } catch (err) {
            console.error(JSON.stringify(err, null, 2));
        }
    }, [isLoaded, email, password])

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Hello</Text>
                </View>
                <View>
                    <Text style={styles.subtitle}>Sign in to your account</Text>
                </View>
                <View style={styles.inputContainer}>
                    <User size={24} color={'#9A9A9A'} style={styles.inputUserIcon} />
                    <TextInput
                        style={styles.textInput} placeholder="Enter email"
                        autoCapitalize="none" value={email}
                        onChangeText={(value) => setEmail(value)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Lock size={24} color={'#9A9A9A'} style={styles.inputUserIcon} />
                    <TextInput
                        style={styles.textInput} placeholder="Enter password"
                        secureTextEntry={true}
                        onChangeText={(value) => setPassword(value)}
                    />
                </View>
                <View>
                    <Text style={styles.forgetPasswordText}>Forget your password?</Text>
                </View>
                {/* Sign In Button */}
                <TouchableOpacity
                    style={styles.signInButtonContainer}
                    onPress={onSignInPress}
                >
                    <Text style={styles.signInText}>Sign In</Text>
                    <View style={styles.arrowContainer}>
                        <ArrowRightIcon
                            size={24}
                            color={"#fff"}
                        />
                    </View>
                </TouchableOpacity>
                {/* Redirect to SignUp Button */}
                <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                    <Text style={styles.footerText}>Don't have an account?
                        <Text style={{ textDecorationLine: "underline" }}>
                            Create
                        </Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        position: 'relative',
        justifyContent: 'center'
    },
    titleContainer: {
        marginTop: 20
    },
    titleText: {
        textAlign: 'center',
        fontSize: 64,
        fontWeight: 'bold',
        color: '#000'
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        color: "#000",
        marginBottom: 20
    },
    inputContainer: {
        backgroundColor: "#fff",
        flexDirection: 'row',
        borderRadius: 20,
        marginHorizontal: 40,
        elevation: 10,
        marginVertical: 20,
        alignItems: 'center',
        paddingHorizontal: 15,
        height: 50,
    },
    textInput: {
        flex: 1,
    },
    inputUserIcon: {
        marginRight: 10
    },
    forgetPasswordText: {
        color: "#BEBEBE",
        textAlign: 'right',
        width: '90%',
        fontSize: 15
    },
    signInText: {
        color: "#000",
        fontSize: 25,
        fontWeight: 'bold'
    },
    signInButtonContainer: {
        flexDirection: 'row',
        marginTop: 150,
        width: '90%',
        justifyContent: 'flex-end',
        gap: 10
    },
    linearGradient: {
        height: 34,
        width: 56,
        borderRadius: 17,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10
    },
    footerText: {
        color: "#000",
        textAlign: 'center',
        fontSize: 18,
        marginTop: 130,
    },
    arrowContainer: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 100,
        backgroundColor: 'red',
    },
    formContainer: {
        // borderWidth: 2,
    }
})