import { ScrollView, StyleSheet, View } from "react-native"
import TabComponent from "./TabComponent"
import constants from "../../constants/constants"
import tabs from "../../data/tabs"

const ScrollTabComponent = () => {

    return (
        <View style={ styles.container }>
            <ScrollView
                style={ styles.scrollView }
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                decelerationRate="fast"
                contentContainerStyle={{ paddingHorizontal: 25 }}
            >
                { tabs.map((tab, index) => (
                    <TabComponent key={index} name={tab} />
                )) }
            </ScrollView>
        </View>
    )
}

export default ScrollTabComponent

const styles = StyleSheet.create({
    container: {
        width: '100%', height: 'auto', 
        minHeight: constants.TAB_SECTION_HEIGHT, 
    },
    scrollView: {
        flex: 1
    }
})