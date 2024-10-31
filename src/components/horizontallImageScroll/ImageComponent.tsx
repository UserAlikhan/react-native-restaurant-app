import { Image, StyleSheet, View } from "react-native";
import constants from "../../constants/constants";

type Props = {
    uri: string;
}

const ImageComponent = ({ uri }: Props) => {
    if (!uri) {
        return ;
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image 
                    source={{ uri: uri }}
                    style={styles.image}
                    onError={(error) => {
                        console.error("Image load error:", error);
                    }}
                />
            </View>
        </View>
    )
}

export default ImageComponent

const styles = StyleSheet.create({
    container: {
        width: constants.windowParams.width,
        flex: 1,
        alignItems: 'center'
    },
    content: {
        width: constants.windowParams.width - 70,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: "cover",
        borderRadius: 5,
        borderWidth: 1,
    }
})