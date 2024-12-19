import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { TouchableOpacity } from "react-native"
import { useBottomSheetModal } from "@gorhom/bottom-sheet";
import { MainStackParamList } from "@app/types/navigation";
import { BarResponse } from "@app/types/apiResponseTypes";
import { useAppDispatch } from "@app/store/hooks"
import { setSelectedBar } from "@app/store/slices/selectedBarSlice";

type Props = {
    navigation: NativeStackScreenProps<MainStackParamList>;
    children:  React.ReactNode;
    data: BarResponse;
};

const RedirectToBarComponent = ({ navigation , children, data }: Props) => {
    const { dismiss } = useBottomSheetModal();

    const dispatch = useAppDispatch()

    const onPress = () => {
        dispatch(setSelectedBar(data));
        dismiss();

        navigation.navigation.push("Bar");
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