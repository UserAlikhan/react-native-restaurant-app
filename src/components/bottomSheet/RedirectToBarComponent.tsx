import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { TouchableOpacity } from "react-native"
import { useBottomSheetModal } from "@gorhom/bottom-sheet";
import { Bar } from "../../types/types";
import { MainStackParamList } from "@app/types/navigation";

type Props = {
    navigation: NativeStackScreenProps<MainStackParamList>;
    children:  React.ReactNode;
    data: Bar;
};

const RedirectToBarComponent = ({ navigation , children, data }: Props) => {
    const { dismiss } = useBottomSheetModal();

    const onPress = () => {
        dismiss();
        navigation.navigation.push("Bar", data)
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