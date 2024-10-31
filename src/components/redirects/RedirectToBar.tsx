import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MainStackParamList } from "../../types/navigation";
import { Bar } from "../../types/types";
import { TouchableOpacity } from "react-native";

type Props = {
    navigation: NativeStackScreenProps<MainStackParamList>;
    children:  React.ReactNode;
    data: Bar;
};

const RedirectToBar = ({ navigation, children, data }: Props) => {
    
    const onPress = () => {
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

export default RedirectToBar