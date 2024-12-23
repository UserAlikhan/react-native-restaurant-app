import { StyleSheet, View } from "react-native"
import ArrowHeader from "../header/ArrowHeader"

type Props = {
    children: React.ReactNode
}

const ArrowHeaderTemplate = ({ children }: Props) => {
    return (
        <View style={styles.container}>
            <ArrowHeader />

            <View style={styles.content}>
                {children}
            </View>
        </View>
    )
}

export default ArrowHeaderTemplate

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