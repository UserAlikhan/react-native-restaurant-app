import Animated from "react-native-reanimated";
import HeaderWithTopBarTemplate from "../components/templates/HeaderWithTopBarTemplate";
import AnimatedVerticalList from "../components/verticalList/AnimatedVerticalList";
import tabs from "../data/tabs";
import { useCallback, useRef, useState } from "react";
import { FlatList } from "react-native";

export default function Bar() {
    const [currentPage, setCurrentPage] = useState(0);
    const flatListRef = useRef<Animated.FlatList<string>>(null);

    // Memoize the scroll handler
    const handleScroll = useCallback((page: number) => {
        if (page !== currentPage) {
            setCurrentPage(page);
        }
    }, [currentPage]);

    // Memoize the tab press handler
    const handleTabPress = useCallback((index: number) => {
        if (index !== currentPage) {
            setCurrentPage(index);
            (flatListRef.current as unknown as FlatList<string>)?.scrollToIndex({
                index: index,
                animated: true
            });
        }
    }, [currentPage]);

    return (
        <HeaderWithTopBarTemplate currentPage={currentPage} handleTabPress={handleTabPress}>
            <AnimatedVerticalList
                data={tabs}
                flatListRef={flatListRef}
                onScroll={handleScroll}
                handleTabPress={handleTabPress}
            />
        </HeaderWithTopBarTemplate>
    )
}