import React, { useEffect } from 'react';
import constants from "../../constants/constants";
import Info from "../sections/Info"
import GoToTopButton from "./GoToTopButton";
import Live from "../sections/Live";

type AnimatedCardProps = {
    tab: string;
    index: number;
    handleTabPress: (index: number) => void;
}

const AnimatedCard = ({ tab, index, handleTabPress }: AnimatedCardProps) => {

    return (
        <>
            {tab === constants.LAST_TAB_SECTION && (
                <>
                    <Info />
                    <GoToTopButton handleTabPress={handleTabPress} />
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