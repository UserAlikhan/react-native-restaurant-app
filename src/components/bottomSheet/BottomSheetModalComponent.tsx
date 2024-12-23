import { BottomSheetModal, useBottomSheetModal } from "@gorhom/bottom-sheet"
import { CircleX, Star } from "lucide-react-native"
import { forwardRef, useMemo, useState } from "react"
import { useNavigation, useRoute } from "@react-navigation/native"
import { StyleSheet, Text, View } from "react-native"
import RedirectToBarComponent from "./RedirectToBarComponent"
import HorizontalImageScroll from "../horizontallImageScroll/HorizontalImageScroll"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { MainStackParamList } from "@app/types/navigation"
import { useAppDispatch, useAppSelector } from "@app/store/hooks"
import { resetSelectedBar } from "@app/store/slices/selectedBarSlice"

export type Ref = BottomSheetModal

const BottomSheetModalComponent = forwardRef<Ref>((props, ref) => {

    const dispatch = useAppDispatch()
    const [iconColor, setIconColor] = useState<string>("grey");

    const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);
    const { dismiss } = useBottomSheetModal();

    const router = useRoute()
    const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

    const { selectedBar } = useAppSelector(state => state.selectedBar);

    if (!selectedBar) {
        return (
            <View>
                <Text>No data</Text>
            </View>
        )
    }

    return (
        <BottomSheetModal
            ref={ref} index={0} snapPoints={snapPoints}
            handleIndicatorStyle={{ backgroundColor: "#fff" }}
            backgroundStyle={{ backgroundColor: "#1d0f4e" }}
        >
            <CircleX
                color={iconColor} size={36}
                style={{ position: "absolute", top: 0, right: 15 }}
                onPress={() => {
                    dismiss()
                    dispatch(resetSelectedBar())
                }}
                onPressIn={() => setIconColor("red")}
                onPressOut={() => setIconColor("grey")}
            />
            <View style={styles.contentContainer}>
                <RedirectToBarComponent data={selectedBar} navigation={{ route: router, navigation }}>
                    <Text style={styles.containerHeadline}>{selectedBar.name}</Text>
                </RedirectToBarComponent>
                {/* images */}
                <HorizontalImageScroll images={selectedBar.images.map(image => image.url)} heightImage={200} />
                {/* information part */}
                <View style={{
                    width: '100%', height: 'auto', paddingHorizontal: 10,
                    marginTop: 25, flexDirection: 'row',
                    justifyContent: 'space-between'
                    // alignItems: 'center'
                }}>
                    <View style={{ flex: 2, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 20, color: "#fff" }}>
                            {selectedBar.address}
                        </Text>
                        <Text style={{ fontSize: 18, color: "grey" }}>
                            {selectedBar.state}  -  {selectedBar.city}
                        </Text>
                    </View>
                    <View style={{ flex: 2, flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 20, color: "#fff" }}>
                            {/* Add rating in the future */}
                            Rating: 4.65{<Star color="yellow" fill="yellow" style={{ width: 12, height: 12 }} />}
                            /5{<Star color="yellow" fill="yellow" style={{ width: 12, height: 12 }} />}
                        </Text>
                        <Text style={{ fontSize: 18, color: "grey", alignContent: 'flex-end' }}>
                            {selectedBar.zipCode}
                        </Text>
                    </View>
                </View>
                {/* Discription Part */}
                <View style={{
                    width: '100%', height: 'auto', paddingHorizontal: 10,
                    marginTop: 50
                }}>
                    <Text style={{ fontSize: 20, color: "#d5dbdb" }}>
                        {selectedBar.description}
                    </Text>
                </View>
            </View>
        </BottomSheetModal>
    )
})

export default BottomSheetModalComponent

const styles = StyleSheet.create({
    contentContainer: {
        alignItems: 'center'
    },
    containerHeadline: {
        fontSize: 28,
        marginBottom: 15,
        color: "#fff",
        fontWeight: '600',
        padding: 20
    },
})