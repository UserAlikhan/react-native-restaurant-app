import { ScrollView, StyleSheet, View } from "react-native"
import constants from "../../constants/constants"
import ImageComponent from "./ImageComponent"

type ImagesType = {
    images: string[],
    heightImage: number,
}

const HorizontalImageScroll = ({ images, heightImage }: ImagesType) => {

    return (
        <View style={[styles.container, { height: heightImage }]}>
            <ScrollView
                scrollEventThrottle={16}
                horizontal={true}
                snapToInterval={constants.windowParams.width}
                showsHorizontalScrollIndicator={false}
                decelerationRate={'fast'}
            >
                {images?.map((image, idx) => (
                    <ImageComponent key={idx} uri={image}/>
                ))}
            </ScrollView>
        </View>
    )
}

export default HorizontalImageScroll

const styles = StyleSheet.create({
    container: {
        width: constants.windowParams.width,
    }
})