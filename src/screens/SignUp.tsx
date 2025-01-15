import { User, Lock, ArrowRightIcon, Mail } from "lucide-react-native";
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MainStackParamList } from "../types/navigation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSignUp } from "@clerk/clerk-expo";
import { useState } from "react";
import constants from "@app/constants/constants";

const SignUp = () => {
    const { isLoaded, signUp, setActive } = useSignUp();
    const navigation =
        useNavigation<NativeStackNavigationProp<MainStackParamList>>();

    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [pendingVerification, setPendingVerification] = useState(false);
    const [code, setCode] = useState("");

    const onSignUpPress = async () => {
        if (!isLoaded) return;

        try {
            await signUp.create({
                emailAddress: email,
                username: userName,
                password: password,
            });

            await signUp.prepareEmailAddressVerification({
                strategy: "email_code",
            });

            setPendingVerification(true);
        } catch (err) {
            console.error(JSON.stringify(err, null, 2));
        }
    };

    const onVerifyPress = async () => {
        if (!isLoaded) return;

        try {
            const signUpAttempt = await signUp.attemptEmailAddressVerification({
                code: code,
            });

            if (signUpAttempt.status === "complete") {
                await setActive({ session: signUpAttempt.createdSessionId });
                navigation.navigate("Home");
            } else {
                console.error(JSON.stringify(signUpAttempt, null, 2));
            }
        } catch (err) {
            console.error(JSON.stringify(err, null, 2));
        }
    };

    if (pendingVerification) {
        return (
            <View
                style={{
                    height: "100%",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Text>Verify Your Email Address</Text>
                <TextInput
                    value={code}
                    placeholder="Enter your verification code"
                    onChangeText={(value) => setCode(value)}
                />
                <TouchableOpacity onPress={() => onVerifyPress()}>
                    <Text>Verify</Text>
                </TouchableOpacity>
            </View>
        );
    }

    const handleLoginPage = async () => {
        await AsyncStorage.setItem("@mapPlace", "true");
        navigation.navigate("Login");
    };

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Create account</Text>
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
                        placeholder="Username"
                        value={userName}
                        onChangeText={(value) => setUserName(value)}
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
                        placeholder="Password"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(value) => setPassword(value)}
                    />
                </View>
                <View style={styles.signInButtonContainer}>
                    <TouchableOpacity
                        style={styles.signInButton}
                        onPress={() => onSignUpPress()}
                    >
                        <Text style={styles.signInText}>Create</Text>
                        <View style={styles.arrowContainer}>
                            <ArrowRightIcon size={24} color={"#fff"} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.differentOptionsText}>
                        Or create account using the following
                    </Text>
                </View>
                <View style={styles.googleLogoContainer}>
                    <TouchableOpacity style={styles.googleLogoButton}>
                        <Image
                            source={require("../images/googleIcon.png")}
                            style={styles.googleLogo}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.redirectContainer}>
                    <TouchableOpacity onPress={() => handleLoginPage()}>
                        <Text style={styles.footerText}>
                            Do you have account?{" "}
                            <Text style={{ textDecorationLine: "underline" }}>
                                Sign In
                            </Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default SignUp;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        position: "relative",
        justifyContent: "center",
    },
    titleContainer: {
        marginVertical: 15,
    },
    titleText: {
        textAlign: "center",
        fontSize: 44,
        fontWeight: "bold",
        color: "#000",
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
    },
    textInput: {
        flex: 1,
    },
    inputUserIcon: {
        marginRight: 10,
    },
    signInText: {
        color: "#000",
        fontSize: 25,
        fontWeight: "bold",
    },
    signInButtonContainer: {
        flexDirection: "row",
        width: "90%",
        paddingVertical: 35,
        justifyContent: "flex-end",
        gap: 10,
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
        marginTop: 20,
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
    },
    googleLogo: {
        width: constants.GOOGLE_LOGO_SHAPE,
        height: constants.GOOGLE_LOGO_SHAPE,
        resizeMode: "contain",
        paddingVertical: 25,
        borderRadius: 100,
        alignSelf: "center",
    },
    arrowContainer: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 100,
        backgroundColor: "red",
    },
    formContainer: {
        // borderWidth: 2,
    },
    redirectContainer: {
        marginTop: 100,
        flexDirection: "row",
        width: "100%",
        height: "auto",
        justifyContent: "center",
    },
});
