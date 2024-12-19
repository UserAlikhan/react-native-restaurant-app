import { StyleSheet, View } from "react-native";
import constants from "../../constants/constants";
import Info from "../sections/Info"
import GoToTopButton from "./GoToTopButton";
import Live from "../sections/Live";

type AnimatedCardProps = {
    tab: string;
    index: number;
}

const AnimatedCard = ({ tab, index }: AnimatedCardProps) => {

    return (
        <>
            {tab === constants.LAST_TAB_SECTION && (
                <>
                    <Info />
                    <GoToTopButton />
                </>
            )}
            {tab === "Info" && (
                <>
                    <Info />
                </>
            )}
            {tab === "Live" && (
                <>
                    <Live />
                </>
            )}
        </>
    )
}

export default AnimatedCard

const styles = StyleSheet.create({
    containerForLastItem: {

    }
})