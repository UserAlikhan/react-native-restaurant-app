import { StyleSheet, View } from "react-native"
import Header from "../header/Header"
import ScrollTabComponent from "../topTabs/ScrollTabComponent"

type Props = {
    children: React.ReactNode
}

const HeaderWithTopBarTemplate = ({ children }: Props) => {
    return (
        <View style={styles.container}>
            <Header />
            <ScrollTabComponent />
            
            <View style={styles.content}>
                {children}
            </View>
        </View>
    )
}

export default HeaderWithTopBarTemplate

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1,    
        backgroundColor: '#d8d8d8',
        // paddingVertical: 12
        // justifyContent: 'center',
        // alignItems: 'center',
    }
})