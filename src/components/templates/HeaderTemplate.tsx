import { StyleSheet, View } from "react-native"
import Header from "../header/Header"

type Props = {
    children: React.ReactNode
}

const HeaderTemplate = ({ children }: Props) => {

    return (
        <View style={styles.container}>
            <Header />
            
            <View style={styles.content}>
                {children}
            </View>
        </View>
    )
}

export default HeaderTemplate

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1,    
        backgroundColor: '#d8d8d8',
        justifyContent: 'center',
        alignItems: 'center',
    }
})