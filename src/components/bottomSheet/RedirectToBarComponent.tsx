import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Text, TouchableOpacity } from "react-native"
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { useBottomSheetModal } from "@gorhom/bottom-sheet";
import { Bar } from "../../types/types";
import { MainStackParamList } from "@app/types/navigation";

type Props = {
    navigation: NativeStackScreenProps<MainStackParamList>;
    children:  React.ReactNode;
    data: Bar;
    // ref: React.MutableRefObject<BottomSheetModalMethods>
};

const RedirectToBarComponent = ({ navigation , children, data }: Props) => {
    const { dismiss } = useBottomSheetModal();

    const onPress = () => {
        dismiss();
        navigation.navigation.push("SpecificBar", data)
    }

    return (
        <TouchableOpacity
            onPress={() => onPress()}        
        >
            {children}
        </TouchableOpacity>
    )
}

export default RedirectToBarComponent