import { ScrollView, StyleSheet, View } from "react-native"
import LiveImageComponent from "./LiveImageComponent"
import constants from "../../../constants/constants"

type TimeProps = {
    startTime: string,
    endTime: string
}

type ImagesType = {
    images: NodeRequire[],
    heightImage: number,
    time: TimeProps[],
}

const LiveImageScroll = ({ images, heightImage, time }: ImagesType) => {

    return (
        <View style={[styles.container, { height: heightImage }]}>
            <ScrollView
                scrollEventThrottle={16}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                decelerationRate={'fast'}
            >
                {images?.map((image, idx) => (
                    <LiveImageComponent key={idx} uri={image} time={time[idx]} />
                ))}
            </ScrollView>
        </View>
    )
}

export default LiveImageScroll

const styles = StyleSheet.create({
    container: {
        width: constants.windowParams.width,
        borderBottomWidth: 1
    }
})