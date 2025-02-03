import { StyleSheet, View } from "react-native";
import HeaderTemplate from "../components/templates/HeaderTemplate";
import SearchComponent from "@app/components/homePageComponents/SearchComponent";
import RecomendationsComponent from "@app/components/homePageComponents/RecomendationsComponent";
import { useGetLocationHook } from "@app/customHooks/useGetLocationHook";

export default function Home() {
    const { location } = useGetLocationHook();

    return (
        <HeaderTemplate>
            <View style={styles.container}>
                <View style={styles.searchComponent}>
                    <SearchComponent />
                </View>
                <RecomendationsComponent title={"Most Popular"} />
                {/* {location && (
                    <RecomendationsComponent title={"Nearest to you"} />
                )} */}
            </View>
        </HeaderTemplate>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    searchComponent: {
        marginVertical: 35,
        zIndex: 1,
    },
});
