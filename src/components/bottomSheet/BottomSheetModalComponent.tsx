import { Bar } from "@app/types/types"
import { BottomSheetModal, useBottomSheetModal } from "@gorhom/bottom-sheet"
import { CircleX, Star } from "lucide-react-native"
import { forwardRef, useMemo, useState } from "react"
import { useNavigation, useRoute } from "@react-navigation/native"
import { StyleSheet, Text, View } from "react-native"
import RedirectToBarComponent from "./RedirectToBarComponent"
import HorizontalImageScroll from "../horizontallImageScroll/HorizontalImageScroll"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { MainStackParamList } from "@app/types/navigation"

export type Ref = BottomSheetModal

const BottomSheetModalComponent = forwardRef<Ref, Bar>((props, ref) => {

    const [iconColor, setIconColor] = useState<string>("grey");

    const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);
    const { dismiss } = useBottomSheetModal();

    const router = useRoute()
    const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

    return (
        <BottomSheetModal
            ref={ref} index={0} snapPoints={snapPoints}
            handleIndicatorStyle={{ backgroundColor: "#fff" }}
            backgroundStyle={{ backgroundColor: "#1d0f4e" }}
        >
            <CircleX
                color={iconColor} size={36}
                style={{ position: "absolute", top: 0, right: 15 }}
                onPress={() => dismiss()}
                onPressIn={() => setIconColor("red")}
                onPressOut={() => setIconColor("grey")}
            />
            <View style={styles.contentContainer}>
                <RedirectToBarComponent data={props} navigation={{ route: router, navigation }}>
                    <Text style={styles.containerHeadline}>{props.name}</Text>
                </RedirectToBarComponent>
                {/* images */}
                <HorizontalImageScroll images={props.images} heightImage={200} />
                {/* information part */}
                <View style={{
                    width: '100%', height: 'auto', paddingHorizontal: 10,
                    marginTop: 25, flexDirection: 'row',
                    justifyContent: 'space-between'
                    // alignItems: 'center'
                }}>
                    <View style={{ flex: 2, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 20, color: "#fff" }}>
                            {props.address}
                        </Text>
                        <Text style={{ fontSize: 18, color: "grey" }}>
                            {props.state}  -  {props.city}
                        </Text>
                    </View>
                    <View style={{ flex: 2, flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 20, color: "#fff" }}>
                            Rating: {props.rating}{<Star color="yellow" fill="yellow" style={{ width: 12, height: 12 }} />}
                            /5{<Star color="yellow" fill="yellow" style={{ width: 12, height: 12 }} />}
                        </Text>
                        <Text style={{ fontSize: 18, color: "grey", alignContent: 'flex-end' }}>
                            {props.zipCode}
                        </Text>
                    </View>
                </View>
                {/* Discription Part */}
                <View style={{
                    width: '100%', height: 'auto', paddingHorizontal: 10,
                    marginTop: 50
                }}>
                    <Text style={{ fontSize: 20, color: "#d5dbdb" }}>
                        {props.description}
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