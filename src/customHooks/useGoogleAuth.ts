import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MainStackParamList } from "@app/types/navigation";
import { useOAuth, useSignIn, useSignUp } from "@clerk/clerk-expo";
import { useState } from "react";

export const useGoogleAuth = (navigation: NativeStackNavigationProp<MainStackParamList>) => {
    const { signUp } = useSignUp();
    const { setActive } = useSignIn();

    const [pendingVerification, setPendingVerification] = useState(false);
    const [isGoogleAccount, setIsGoogleAccount] = useState(false);

    const { startOAuthFlow } = useOAuth({
        strategy: "oauth_google",
    });

    const handleGoogleAuth = async () => {
        try {
            const { createdSessionId, signIn } = await startOAuthFlow();

            if (signIn && createdSessionId) {
                // Set Clerk Session
                await setActive?.({ session: createdSessionId })
                navigation.replace("BottomNavigation");
                return;
            } else if (signUp && signUp.emailAddress && signUp.firstName && signUp.lastName) {
                await signUp.create({
                    emailAddress: signUp.emailAddress,
                    username: signUp.firstName + '_' + signUp.lastName,
                    password: "GOOGLE_ACCOUNT",
                    strategy: "oauth_google",
                    redirectUrl: "http://localhost:8081"
                }).then(async () => {
                    setIsGoogleAccount(true);
                    await signUp.prepareEmailAddressVerification({
                        strategy: "email_code",
                    });

                    setPendingVerification(true);
                })
            }
        } catch (error) {
            console.error('Error signing in:', error);
        }
    }

    return {
        handleGoogleAuth,
        pendingVerification,
        isGoogleAccount,
    };
}