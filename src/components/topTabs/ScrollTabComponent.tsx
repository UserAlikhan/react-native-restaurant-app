import { ScrollView, StyleSheet, View } from "react-native"
import TabComponent from "./TabComponent"
import constants from "../../constants/constants"
import tabs from "../../data/tabs"

type Props = {
    currentPage: number;
    handleTabPress: (index: number) => void;
}

const ScrollTabComponent = ({ currentPage, handleTabPress }: Props) => {
    
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
                    <TabComponent key={index} name={tab} index={index} isActive={index === currentPage} handleTabPress={handleTabPress} />
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollView: {
        flex: 1,
    }
})