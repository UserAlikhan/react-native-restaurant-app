import { Video, ResizeMode } from "expo-av"
import { useRef, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { CustomPlaybackStatus } from "../../../types/componentsTypes";
import constants from "../../../constants/constants";
import { CirclePause, CirclePlay } from "lucide-react-native";

const VideoPlayer = () => {
    const video = useRef<Video>(null);
    const [status, setStatus] = useState<CustomPlaybackStatus>();
    const [isPlaying, setIsPlaying] = useState(false);
    const [showPause, setIsShowPause] = useState(false);

    const handlePlayPause = () => {
        if (status && !status.isPlaying) {
            video.current?.playAsync();
            setIsPlaying(true);
            setIsShowPause(false);
        } else {
            setIsPlaying(false);
        }
    }

    const handlePressVideo = () => {
        if (isPlaying) {
            video.current?.pauseAsync();
            setIsPlaying(false);
            // setIsShowPause(true);
        } else {
            video.current?.playAsync();
            setIsPlaying(true);
        }
    }

    return (
        <View style={styles.videoContainer}>
            <TouchableOpacity onPress={() => handlePressVideo()}>
                <Video
                    ref={video}
                    source={{ uri: constants.DUMMY_VIDEO_SOURCE }}
                    style={styles.video}
                    useNativeControls={false}
                    resizeMode={ResizeMode.CONTAIN}
                    isLooping={true}
                    onPlaybackStatusUpdate={(status) => {
                        if (status.isLoaded === true) {
                            setStatus(status as CustomPlaybackStatus);
                        } else {
                            console.error('Error updating playback status:');
                        }
                    }}
                />
            </TouchableOpacity>

            {!isPlaying && (
                <TouchableOpacity style={styles.playButton} onPress={() => handlePlayPause()}>
                    <CirclePlay size={50} color='#fff' />
                </TouchableOpacity>
            )}

            {showPause && (
                <TouchableOpacity style={styles.playButton} onPress={() => handlePlayPause()}>
                    <CirclePause size={50} color='#fff' />
                </TouchableOpacity>
            )}
        </View>
    )
}

export default VideoPlayer

const styles = StyleSheet.create({
    videoContainer: {
        borderWidth: 1,
        alignItems: 'center',
    },
    video: {
        width: constants.PLAYER_WIDTH,
        height: constants.PLAYER_HEIGHT,
    },
    playButton: {
        position: 'absolute',
        top: "50%",
        left: "50%",
        marginTop: -25,
        marginLeft: -25,
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
})