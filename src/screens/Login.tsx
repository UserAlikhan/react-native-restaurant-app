import { MainStackParamList } from "@app/types/navigation";
import { useAuth, useOAuth, useSignIn, useUser } from "@clerk/clerk-expo";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { ArrowRightIcon, Lock, Mail, User } from "lucide-react-native";
import { useCallback, useState } from "react";
import {
    Image,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import constants from "@app/constants/constants";

const Login = () => {
    const { signIn, setActive, isLoaded } = useSignIn();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const { isSignedIn } = useAuth();

    const navigation =
        useNavigation<NativeStackNavigationProp<MainStackParamList>>();

    const { startOAuthFlow } = useOAuth({
        strategy: 'oauth_google',
    })

    if (isSignedIn) {
        navigation.navigate("BottomNavigation");
    }
    // Manual Sign In
    const onSignInPress = useCallback(async () => {
        if (!isLoaded) return;

        try {
            const signInAttempt = await signIn.create({
                identifier: email,
                password: password,
            });

            if (signInAttempt.status == "complete") {
                await setActive({ session: signInAttempt.createdSessionId });
                navigation.navigate("Profile");
            } else {
                console.error(JSON.stringify(signInAttempt, null, 2));
            }
        } catch (err) {
            console.error(JSON.stringify(err, null, 2));
        }
    }, [isLoaded, email, password]);

    const handleSignUpPage = () => {
        navigation.navigate("BottomNavigation", { screen: "SignUp" } as never);
    }
    // Google Sign In
    const handleLoginViaGoogle = async () => {
        try {

            const { createdSessionId, signIn, signUp } = await startOAuthFlow();

            if (createdSessionId) {
                setActive?.({ session: createdSessionId });
                navigation.navigate("BottomNavigation");
            } else if (signIn) {
                await setActive?.({ session: signIn.createdSessionId });
                navigation.navigate("BottomNavigation");
            } else if (signUp) {
                await setActive?.({ session: signUp.createdSessionId });
                navigation.navigate("Login");
            }
        } catch (err) {
            console.error('Error signing in:', err);
        }
    }

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
                    <Mail
                        size={24}
                        color={"#9A9A9A"}
                        style={styles.inputUserIcon}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter email"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={(value) => setEmail(value)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <User
                        size={24}
                        color={"#9A9A9A"}
                        style={styles.inputUserIcon}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter username"
                        autoCapitalize="none"
                        value={username}
                        onChangeText={(value) => setUsername(value)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Lock
                        size={24}
                        color={"#9A9A9A"}
                        style={styles.inputUserIcon}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter password"
                        secureTextEntry={true}
                        onChangeText={(value) => setPassword(value)}
                    />
                </View>
                <View>
                    <Text style={styles.forgetPasswordText}>
                        Forget your password?
                    </Text>
                </View>
                {/* Sign In Button */}
                <View style={styles.signInButtonContainer}>
                    <TouchableOpacity
                        style={styles.signInButton}
                        onPress={onSignInPress}
                    >
                        <Text style={styles.signInText}>Sign In</Text>
                        <View style={styles.arrowContainer}>
                            <ArrowRightIcon size={24} color={"#fff"} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.differentOptionsText}>
                        Or login using the following
                    </Text>
                </View>
                <View style={styles.googleLogoContainer}>
                    <TouchableOpacity
                        style={styles.googleLogoButton}
                        onPress={() => handleLoginViaGoogle()}
                    >
                        <Image
                            source={Platform.select({
                                ios: require('../images/googleIcon.png'),
                                android: require('../images/googleIcon.png'),
                            })}
                            resizeMode="contain"
                            style={styles.googleLogo}
                            onError={(error) => {
                                console.log("Error loading image:", error);
                            }}
                        />
                    </TouchableOpacity>
                </View>
                {/* Redirect to SignUp Button */}
                <View style={styles.redirectContainer}>
                    <TouchableOpacity
                        onPress={() => handleSignUpPage()}
                    >
                        <Text style={styles.footerText}>
                            Don't have an account?{" "}
                            <Text
                                style={[
                                    styles.footerText,
                                    { textDecorationLine: "underline" },
                                ]}
                            >
                                Create
                            </Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        position: "relative",
        justifyContent: "center",
    },
    titleContainer: {
        marginTop: 0,
    },
    titleText: {
        textAlign: "center",
        fontSize: 64,
        fontWeight: "bold",
        color: "#000",
    },
    subtitle: {
        textAlign: "center",
        fontSize: 18,
        color: "#000",
        marginBottom: 20,
    },
    inputContainer: {
        backgroundColor: "#fff",
        flexDirection: "row",
        borderRadius: 20,
        marginHorizontal: 40,
        elevation: 10,
        marginVertical: 20,
        alignItems: "center",
        paddingHorizontal: 15,
        height: 50,
        borderWidth: 1,
        borderColor: "grey",
    },
    textInput: {
        flex: 1,
    },
    inputUserIcon: {
        marginRight: 10,
    },
    forgetPasswordText: {
        color: "#BEBEBE",
        textAlign: "right",
        width: "90%",
        fontSize: 15,
    },
    signInText: {
        color: "#000",
        fontSize: 25,
        fontWeight: "bold",
    },
    signInButtonContainer: {
        flexDirection: "row",
        width: "90%",
        justifyContent: "flex-end",
        gap: 10,
        paddingVertical: 35,
    },
    signInButton: {
        flexDirection: "row",
        gap: 8,
    },
    linearGradient: {
        height: 34,
        width: 56,
        borderRadius: 17,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 10,
        padding: 4,
    },
    footerText: {
        color: "#000",
        textAlign: "center",
        fontSize: 18,
    },
    arrowContainer: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 100,
        backgroundColor: "red",
    },
    formContainer: {
        paddingVertical: 25,
    },
    redirectContainer: {
        marginTop: 100,
        flexDirection: "row",
        width: "100%",
        height: "auto",
        justifyContent: "center",
    },
    differentOptionsText: {
        fontSize: 18,
        color: "#000",
        alignSelf: "center",
    },
    googleLogoContainer: {
        alignItems: "center",
        paddingVertical: 15,
    },
    googleLogoButton: {
        width: constants.GOOGLE_LOGO_SHAPE,
        height: constants.GOOGLE_LOGO_SHAPE,
        justifyContent: "center",
        alignItems: "center",
    },
    googleLogo: {
        width: constants.GOOGLE_LOGO_SHAPE,
        height: constants.GOOGLE_LOGO_SHAPE,
        resizeMode: "contain",
        borderRadius: 100,
        alignSelf: "center",
    },
});
