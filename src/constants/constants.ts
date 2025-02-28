import { Dimensions, Platform, StatusBar } from "react-native";

const { width, height } = Dimensions.get("screen");
const windowParams = Dimensions.get("window");

const TAB_SECTION_HEIGHT = height * 0.05;

const HEADER_HEIGHT = Platform.OS === "ios" ? height * 0.12 : height * 0.1;

const HEADER_MARGIN_TOP =
    StatusBar.currentHeight && StatusBar.currentHeight / 3;

const SECTION_HEIGHT = height - HEADER_HEIGHT - TAB_SECTION_HEIGHT - 20;

const LAST_TAB_SECTION = "Location";

const LIVE_MAX_HEIGHT = 50;

const DUMMY_VIDEO_SOURCE =
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";

const PLAYER_WIDTH = 350;
const PLAYER_HEIGHT = 275;

const PLAY_BUTTON_DISTANCE_FROM_TOP = PLAYER_HEIGHT / 2 - 25;

const TIME_PERIOD_CONTAINER_HEIGHT = 130;
const TIME_PERIOD_IMAGE_HEIGHT = TIME_PERIOD_CONTAINER_HEIGHT * 0.7;
const TIME_PERIOD_TEXT_CONTAINER_HEIGHT = TIME_PERIOD_CONTAINER_HEIGHT * 0.3;

const INITIAL_REGION = {
    latitude: 40.7075217,
    longitude: -74.1444877,
    latitudeDelta: 0.3,
    longitudeDelta: 0.3,
};

const MANHATTAN = {
    latitude: 40.7591622,
    longitude: -74.0516314,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
};

const INPUT_TEXT_HEIGHT = 50;
const RECOMENDATIONS_CARD_HEIGHT = 200;
const CARD_BORDER_RADIUS = 35;

const GOOGLE_LOGO_SHAPE = 40;

const API_URL = "https://server.vibe-view.it.com";

const BOTTOM_NAVIGATION_HEIGHT = Platform.OS === "ios" ? 70 : 50;

export default {
    TAB_SECTION_HEIGHT,
    HEADER_HEIGHT,
    windowParams,
    HEADER_MARGIN_TOP,
    SECTION_HEIGHT,
    LAST_TAB_SECTION,
    LIVE_MAX_HEIGHT,
    DUMMY_VIDEO_SOURCE,
    PLAYER_WIDTH,
    PLAYER_HEIGHT,
    PLAY_BUTTON_DISTANCE_FROM_TOP,
    TIME_PERIOD_CONTAINER_HEIGHT,
    TIME_PERIOD_IMAGE_HEIGHT,
    TIME_PERIOD_TEXT_CONTAINER_HEIGHT,
    INITIAL_REGION,
    MANHATTAN,
    INPUT_TEXT_HEIGHT,
    RECOMENDATIONS_CARD_HEIGHT,
    CARD_BORDER_RADIUS,
    GOOGLE_LOGO_SHAPE,
    API_URL,
    BOTTOM_NAVIGATION_HEIGHT,
};
