import Animated from "react-native-reanimated";
import constants from "../../constants/constants";
import AnimatedCard from "./AnimatedCard";
import { useCallback } from "react";
import { ViewToken } from "react-native";

type VerticalListProps = {
    data: string[];
    flatListRef: React.RefObject<Animated.FlatList<string>>,
    onScroll: (page: number) => void;
    handleTabPress: (index: number) => void;
}

type ViewableItemsProps = {
    viewableItems: ViewToken<string>[]
}

const AnimatedVerticalList = ({ data, flatListRef, onScroll, handleTabPress }: VerticalListProps) => {

    if (!data) {
        return null;
    }

    const viewabilityConfig = {
        viewAreaCoveragePercentThreshold: 40,
        waitForInteraction: true,
    };

    const onViewableItemsChanged = useCallback(({ viewableItems }: ViewableItemsProps) => {
        if (viewableItems.length > 0) {
            const currentPage = viewableItems[0].index;
            if (currentPage) {
                onScroll(currentPage);
            } else {
                onScroll(0);
            }
        }
    }, [onScroll]);

    return (
        <Animated.FlatList
            ref={flatListRef}
            data={data}
            contentContainerStyle={{}}
            renderItem={({ item, index }) => (
                <AnimatedCard
                    tab={item}
                    index={index}
                    handleTabPress={handleTabPress}
                />
            )}
            snapToInterval={constants.SECTION_HEIGHT}
            decelerationRate={"normal"}
            scrollEventThrottle={16}
            initialNumToRender={1}
            removeClippedSubviews={true}
            onViewableItemsChanged={onViewableItemsChanged}
            viewabilityConfig={viewabilityConfig}
        />
    )
}

export default AnimatedVerticalList;