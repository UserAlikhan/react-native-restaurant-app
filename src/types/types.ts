import { SharedValue } from "react-native-reanimated";

export interface Coordinates {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
};
  
export interface Bar {
    coordinates: Coordinates;
    idx: number;
    address: string;
    zipCode: string;
    city: string;
    state: string;
    name: string;
    description: string;
    rating: number;
    images: string[];
};

export type BarsWithCoordinates = Coordinates & Bar;

export type CustomHeaderProps = {
    scrollY: SharedValue<number>;
    IMG_HEIGHT: number;
    HEADER_HIGHT: number;
    children: React.ReactNode;
};