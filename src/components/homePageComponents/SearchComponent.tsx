import constants from "@app/constants/constants";
import { useAppDispatch } from "@app/store/hooks";
import { setSelectedBar } from "@app/store/slices/selectedBarSlice";
import { BarResponse } from "@app/types/apiResponseTypes";
import { Search } from "lucide-react-native";
import { useCallback, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
    StyleSheet,
    TextInput,
    View,
    FlatList,
    Text,
    Pressable,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MainStackParamList } from "@app/types/navigation";
import { debounce } from "lodash";
import { useGetFromStoreOrRetrieveAllBarsHook } from "@app/customHooks/useGetFromStoreOrRetrieveAllBarsHook";

const SearchComponent = () => {

    const { bars, isLoading, error } = useGetFromStoreOrRetrieveAllBarsHook();

    const dispatch = useAppDispatch();

    const [searchQuery, setSearchQuery] = useState("");
    const [allOptions, setAllOptions] = useState<BarResponse[]>([]);

    const navigation =
        useNavigation<NativeStackNavigationProp<MainStackParamList>>();

    const handleFilterOptions = useCallback(
        debounce((query) => {
            if (!query) {
                setAllOptions([]); // Clear options when query is empty
                return;
            }

            const lowerCaseQuery = query.toLowerCase();
            const allSimilarOptions = bars.filter(
                (bar) =>
                    bar.name.toLowerCase().includes(lowerCaseQuery) ||
                    bar.address.toLowerCase().includes(lowerCaseQuery) ||
                    bar.zipCode.toLowerCase().includes(lowerCaseQuery)
            );

            setAllOptions(allSimilarOptions);
        }, 300),
        [bars]
    );

    const handleRedirectToBar = (bar: BarResponse) => {
        // add selected bar to the local state
        dispatch(setSelectedBar(bar));
        navigation.navigate("Bar");
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <View style={styles.iconContainer}>
                    <Search
                        style={styles.searchIcon}
                        size={37}
                        color={"#000"}
                    />
                </View>
                <TextInput
                    style={styles.textInput}
                    placeholderTextColor={"#ccc"}
                    selectionColor={"#000"}
                    placeholder="Bars, City, Postal Code"
                    onChangeText={(text) => {
                        setSearchQuery(text);
                        handleFilterOptions(text);
                    }}
                    onSubmitEditing={() => { }}
                />
            </View>
            {searchQuery.length > 0 && allOptions.length > 0 && (
                <View style={styles.optionsContainer}>
                    <FlatList
                        data={allOptions}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <Pressable
                                onPress={() => handleRedirectToBar(item)}
                            >
                                <View style={styles.optionItem}>
                                    <Text style={styles.optionName}>
                                        {item.name}
                                        {" - "}
                                    </Text>
                                    <Text style={styles.optionText}>
                                        {item.address}
                                        {" - "}
                                    </Text>
                                    <Text style={styles.optionZip}>
                                        {item.zipCode}
                                    </Text>
                                </View>
                            </Pressable>
                        )}
                    />
                </View>
            )}
        </View>
    );
};

export default SearchComponent;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
    },
    inputContainer: {
        flexDirection: "row",
        backgroundColor: "#fff",
        width: "100%",
        borderRadius: 20,
        height: constants.INPUT_TEXT_HEIGHT,
        borderWidth: 1,
        gap: 10,
    },
    textInput: {
        alignSelf: "center",
        fontSize: 22,
        fontWeight: "bold",
        width: "75%",
    },
    iconContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: 70,
        borderRightWidth: 2,
    },
    searchIcon: {
        alignSelf: "center",
    },
    optionsContainer: {
        position: "absolute",
        top: constants.INPUT_TEXT_HEIGHT + 10,
        width: "100%",
        marginTop: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        backgroundColor: "#fff",
        maxHeight: 200,
        zIndex: 2
    },
    optionItem: {
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    optionName: {
        fontSize: 18,
        color: "#333",
        fontWeight: "bold",
    },
    optionText: {
        fontSize: 18,
        color: "#333",
    },
    optionZip: {
        fontSize: 18,
        color: "#333",
        fontStyle: "italic",
    },
});
