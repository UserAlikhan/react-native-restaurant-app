import Animated from "react-native-reanimated";
import HeaderWithTopBarTemplate from "../components/templates/HeaderWithTopBarTemplate";
import AnimatedVerticalList from "../components/verticalList/AnimatedVerticalList";
import tabs from "../data/tabs";
import { useRef, useState } from "react";

export default function Bar() {
    const [currentPage, setCurrentPage] = useState(0);
    const flatListRef = useRef<Animated.FlatList<string>>(null);

    const handleScroll = (page: number) => {
        setCurrentPage(page);
    }

    const handleTabPress = (index: number) => {
        setCurrentPage(index);
        flatListRef.current?.scrollToIndex({ index: index, animated: true });
    }

    return (
        <HeaderWithTopBarTemplate currentPage={currentPage} handleTabPress={handleTabPress}>
            <AnimatedVerticalList
                data={tabs} flatListRef={flatListRef}
                onScroll={handleScroll} handleTabPress={handleTabPress}
            />
        </HeaderWithTopBarTemplate>
    )
}