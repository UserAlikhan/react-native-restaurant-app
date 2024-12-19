import { ClerkLoaded, ClerkProvider } from "@clerk/clerk-expo"
import React from "react"
import { tokenCache } from "./cache"

type Props = {
    children: React.ReactNode
}

const ClerkProviderWrapper = ({ children }: Props) => {
    const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

    if (!publishableKey) {
        throw new Error('Add EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY to your .env file') 
    }

    return  (
        <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
            <ClerkLoaded>
                {children}
            </ClerkLoaded>
        </ClerkProvider>
    )
}

export default ClerkProviderWrapper