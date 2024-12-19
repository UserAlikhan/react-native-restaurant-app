import { StyleSheet, View } from "react-native"
import Header from "../header/Header"
import ScrollTabComponent from "../topTabs/ScrollTabComponent"
import ArrowHeader from "../header/ArrowHeader";

type Props = {
    currentPage: number;
    children: React.ReactNode;
    handleTabPress: (index: number) => void;
}

const HeaderWithTopBarTemplate = ({ currentPage, children, handleTabPress }: Props) => {

    return (
        <View style={styles.container}>
            <ArrowHeader />
            <ScrollTabComponent currentPage={currentPage} handleTabPress={handleTabPress}/>
            
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
    }
})