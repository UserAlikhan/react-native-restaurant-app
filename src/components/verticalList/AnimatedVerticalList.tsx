import Animated from "react-native-reanimated";
import constants from "../../constants/constants";
import AnimatedCard from "./AnimatedCard";

type VerticalListProps = {
    data: string[];
}

const AnimatedVerticalList = ({ data }: VerticalListProps) => {
    if (!data) {
        return ;
    }

    return (
        <Animated.FlatList 
            data={data}
            contentContainerStyle={{}}
            renderItem={({ item, index }) => (
                <AnimatedCard tab={item} index={index} />
            )}
            snapToInterval={constants.SECTION_HEIGHT}
            decelerationRate={"normal"}
            scrollEventThrottle={16}
            initialNumToRender={3}
            removeClippedSubviews={true}
        />
    )
}

export default AnimatedVerticalList