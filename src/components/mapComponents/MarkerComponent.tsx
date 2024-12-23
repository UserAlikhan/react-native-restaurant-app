import { BarResponse } from "@app/types/apiResponseTypes";
import { Marker } from "react-native-maps"

type Props = {
    bar: BarResponse;
    onCalloutPressed: (bar: BarResponse) => void;
}

const MarkerComponent = ({ bar, onCalloutPressed }: Props) => {
    return (
        <Marker
            coordinate={{
                latitude: bar.latitude,
                longitude: bar.longitude
            }}
            title={bar.name}
            description={bar.address}
            onCalloutPress={() => onCalloutPressed(bar)}
        />
    );
};

export default MarkerComponent